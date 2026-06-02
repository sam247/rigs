"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ href, className, activeClassName, ...props }, ref) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return <Link ref={ref} href={href} className={cn(className, isActive && activeClassName)} {...props} />;
});

NavLink.displayName = "NavLink";

export { NavLink };
