import Link from "next/link";
import type { ReactNode } from "react";
import { useRouter } from "next/router";
import { useState, useEffect, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className, activeClassName, children }, ref) => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      setIsActive(router.pathname === href || router.pathname.startsWith(href + "/"));
    }, [router.pathname, href]);

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className || "", isActive && activeClassName || "")}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
