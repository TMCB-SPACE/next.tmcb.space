import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import clsx from 'clsx'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import GeometricContainer from '@/components/shared/GeometricContainer'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import type { ProjectPayload } from '@/types'

export interface ProjectPageProps {
  data: ProjectPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectPage({ data, encodeDataAttribute }: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { client, coverImage, description, duration, overview, site, tags, title } = data ?? {}

  const startYear = new Date(duration?.start!).getFullYear()
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'

  return (
    <>
      <GeometricContainer>
        <div className={clsx(['p-16'])}>
          <Header centered title={title} description={overview} />
        </div>
      </GeometricContainer>

      <GeometricContainer>
        <div className={clsx(['block -m-[0.5px] p-16'])}>
          <div
            className={clsx([
              'border rounded-xl',
              'bg-gray-100/90 border-slate-500',
              'dark:bg-neutral-800/90 dark:border-black',
            ])}
          >
            {/* Image  */}
            <ImageBox
              data-sanity={encodeDataAttribute?.('coverImage')}
              image={coverImage}
              alt={title}
              classesWrapper="relative aspect-[16/9] rounded-t-xl"
            />

            <div className="divide-inherit grid grid-cols-1 divide-y lg:grid-cols-4 lg:divide-x lg:divide-y-0 dark:divide-black divide-slate-500 overflow-hidden">
              {/* Duration */}
              {!!(startYear && endYear) && (
                <div className="p-1 hover:bg-white dark:hover:bg-black lg:rounded-bl-xl">
                  <div className="text-xs md:text-sm">Duration</div>
                  <div className="text-md md:text-lg">
                    <span data-sanity={encodeDataAttribute?.('duration.start')}>{startYear}</span>
                    {' - '}
                    <span data-sanity={encodeDataAttribute?.('duration.end')}>{endYear}</span>
                  </div>
                </div>
              )}

              {/* Client */}
              {client && (
                <div className="p-1 hover:bg-white dark:hover:bg-black">
                  <div className="text-xs md:text-sm">Client</div>
                  <div className="text-md md:text-lg">{client}</div>
                </div>
              )}

              {/* Site */}
              {site && (
                <div className="p-1 hover:bg-white dark:hover:bg-black">
                  <div className="text-xs md:text-sm">Site</div>
                  {site && (
                    <Link target="_blank" className="text-md break-words md:text-lg" href={site}>
                      {site}
                    </Link>
                  )}
                </div>
              )}

              {/* Tags */}
              <div className="p-1 hover:bg-white dark:hover:bg-black rounded-b-xl lg:rounded-b-none lg:rounded-br-xl">
                <div className="text-xs md:text-sm">Tags</div>
                <div className="text-md flex flex-row flex-wrap md:text-lg">
                  {tags?.map((tag, key) => (
                    <div key={key} className="mr-1 break-words ">
                      #{tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GeometricContainer>

      <GeometricContainer>
        <div className={clsx(['block -m-[0.5px] p-16'])}>
          {description && (
            <CustomPortableText
              paragraphClasses="tracking-wide font-serif text-xl w-full max-w-[60rem] mx-auto py-[0.5rem]"
              value={description}
            />
          )}
        </div>
      </GeometricContainer>
    </>
  )
}

export default ProjectPage
