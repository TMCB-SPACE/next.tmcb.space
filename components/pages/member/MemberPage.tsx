import { Icon } from '@iconify-icon/react'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import clsx from 'clsx'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import GeometricContainer from '@/components/shared/GeometricContainer'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import type { MemberPayload, SocialLink } from '@/types'

export interface MemberProps {
  data: MemberPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function MemberPage({ data, encodeDataAttribute }: MemberProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { role, overview, title, shortName, coverImage } = data ?? {}
  const socialLinks = data?.socialLinks || ([] as SocialLink[])

  return (
    <>
      <GeometricContainer>
        <div className={clsx(['p-16'])}>
          <ImageBox
            width={82}
            height={82}
            data-sanity={encodeDataAttribute?.('coverImage')}
            image={coverImage}
            alt={`Cover image from ${title}`}
            classesWrapper={clsx([
              'm-auto max-w-[82px] w-[82px] relative rounded-full aspect-square object-cover border',
              'border-slate-500',
              'dark:border-black',
            ])}
          />

          <Header centered title={title} />
          {shortName && (
            <p className="text-center text-2xl font-serif">
              <blockquote>&#34;{shortName}&#34;</blockquote>
            </p>
          )}
          {role && <p className="text-center text-2xl font-serif">{role}</p>}

          {socialLinks && (
            <ul className="flex flex-wrap flex-row justify-center mt-1">
              {socialLinks.map((socialLink, key) => {
                return (
                  <li className="block" key={key}>
                    <a
                      className={clsx([
                        'block p-1 underline-offset-2 hover:underline rounded-lg',
                        'hover:bg-white',
                        'dark:hover:bg-black',
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
      </GeometricContainer>

      <GeometricContainer>
        <div className={clsx(['block -m-[0.5px] p-16'])}>
          {overview && (
            <CustomPortableText
              paragraphClasses="tracking-wide font-serif text-xl w-full max-w-[60rem] mx-auto py-[0.5rem]"
              value={overview}
            />
          )}
        </div>
      </GeometricContainer>
    </>
  )
}

export default MemberPage
