import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CF7G9FW9J8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-CF7G9FW9J8', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
