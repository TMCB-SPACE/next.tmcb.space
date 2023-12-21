'use client'

import { Icon } from '@iconify-icon/react'
import type { PortableTextBlock } from '@portabletext/types'
import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { resolveHref } from '@/sanity/lib/utils'
import type { FooterItem, SettingsPayload, SocialLink } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const footerItems = data?.footerItems || ([] as FooterItem[])
  const socialLinks = data?.socialLinks || ([] as SocialLink[])
  const home = data?.home

  return (
    <footer className={clsx([''])}>
      <div
        className={clsx([
          'relative border-y -my-[1px] grid grid-cols-xs sm:grid-cols-sm lg:grid-cols-lg xl:grid-cols-xl',
          'bg-neutral-300 border-slate-500',
          'dark:bg-neutral-800 dark:border-black',
        ])}
      >
        <div className={clsx(['col-start-2 col-end-3 border-x', 'border-slate-500', 'dark:border-black'])}>
          <div className="flex flex-row flex-wrap">
            <div className="basis-1/2 text-left flex">
              <Link
                href={resolveHref(home?._type) ?? '/'}
                className={clsx(['inline-flex flex-row', 'hover:bg-white', 'dark:hover:bg-black'])}
              >
                <Image width={128} height={128} src={'/logo-animated.gif'} alt={`Logo`} className="w-48 h-48" />
              </Link>
              <div
                className={clsx(['inline-flex flex-row flex-1 p-1 border-l', 'border-slate-500', 'dark:border-black'])}
              >
                {footer && <CustomPortableText paragraphClasses="text-lg" value={footer} />}
              </div>
            </div>
            <div className={clsx(['basis-1/4 border-l', 'border-slate-500', 'dark:border-black'])}>
              <h3 className={clsx(['font-extrabold font-mono p-1'])}>Company</h3>
              {footerItems && (
                <ul className="flex flex-wrap m-0">
                  {footerItems.map((footerItem, key) => {
                    const href = resolveHref(footerItem?._type, footerItem?.slug)
                    if (!href) {
                      return null
                    }
                    return (
                      <li className="w-full" key={key}>
                        <Link
                          className={clsx([
                            'block p-1 border-t underline-offset-2 hover:underline',
                            'border-slate-500 hover:bg-white',
                            'dark:border-black dark:hover:bg-black',
                          ])}
                          href={href}
                          title={footerItem.title}
                        >
                          {footerItem.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className={clsx(['basis-1/4 border-l', 'border-slate-500', 'dark:border-black'])}>
              <h3 className={clsx(['font-extrabold font-mono p-1'])}>Social links</h3>
              {socialLinks && (
                <ul className="flex flex-wrap m-0">
                  {socialLinks.map((socialLink, key) => {
                    return (
                      <li className="w-full" key={key}>
                        <a
                          className={clsx([
                            'block p-1 border-t underline-offset-2 hover:underline',
                            'border-slate-500 hover:bg-white',
                            'dark:border-black dark:hover:bg-black',
                          ])}
                          href={socialLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={socialLink.tooltip ?? socialLink.title}
                        >
                          <Icon icon={socialLink.icon ?? 'uil:'} className="text-xl align-text-top mr-1" />
                          {socialLink.title ?? socialLink.tooltip ?? socialLink.url}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx([
          'relative z-10 border-y -my-[1px] grid grid-cols-xs sm:grid-cols-sm lg:grid-cols-lg xl:grid-cols-xl',
          'bg-neutral-300 border-slate-500',
          'dark:bg-neutral-800 dark:border-black',
        ])}
      >
        <div
          className={clsx([
            'col-start-2 col-end-3',
            'flex justify-between items-center backdrop-blur border-x',
            'border-slate-500',
            'dark:border-black',
          ])}
        >
          <p className="p-1 m-auto font-mono text-md">
            &copy; 2023 {process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
