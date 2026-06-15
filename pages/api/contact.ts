import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  try {
    // 1. Save submission to Supabase database
    if (supabaseUrl && supabaseKey) {
      const { error: dbError } = await supabase
        .from('consultation_requests')
        .insert([{ name, email, phone, message }]);

      if (dbError) {
        console.error('Supabase DB error:', dbError);
      }
    } else {
      console.warn('Supabase URL or Key not set. Skipping DB insert.');
    }

    // 2. Send Email via Nodemailer if SMTP is configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'aadilkhany@gmail.com';

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost || 'smtp.gmail.com',
        port: parseInt(smtpPort || '587'),
        secure: smtpPort === '465',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"Tech3 Web Inquiry" <${smtpUser}>`,
        to: receiverEmail,
        subject: `New Request from ${name} - Tech3`,
        text: `You have received a new consultation request:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message || 'N/A'}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Consultation Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap;"><strong>Message:</strong>\n${message || 'No message provided.'}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #777;">Submitted via Tech3 Technology website contact form.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`Notification email sent to ${receiverEmail}`);
    } else {
      console.warn(
        'SMTP credentials not fully configured in environment variables. Email notification skipped.\n' +
        'Please define SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in your .env file.'
      );
    }

    return res.status(200).json({ success: true, message: 'Inquiry submitted successfully' });
  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
