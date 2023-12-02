import NextLink from "next/link";
import { UrlObject } from 'url';

export type Url = string | UrlObject;

export interface LinkProps {
  children?: React.ReactNode;
  href: string | Url;
}

export default function Link({ href, children }: LinkProps) {
  return (
    <NextLink
      href={href}
      className="decoration-indigo-500 hover:decoration-pink-500 dark:decoration-sky-500 dark:hover:decoration-pink-500"
    >
      {children}
    </NextLink>
  );
}

export function HoverLink({ href, children }: LinkProps) {
  return (
    <NextLink
      href={href}
      className="hover:underline hover:decoration-indigo-500 dark:hover:decoration-sky-500"
    >
      {children}
    </NextLink>
  );
};