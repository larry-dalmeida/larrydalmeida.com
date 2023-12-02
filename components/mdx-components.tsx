import React from 'react';
import Image from "next/image"
import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from "next-contentlayer/hooks"
import Link, { Url } from "./link"

const components: MDXComponents = {
  Image,
  a: ({ children, href }) => <Link href={href as Url}>{children}</Link>,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
