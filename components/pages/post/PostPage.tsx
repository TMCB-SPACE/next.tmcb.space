import clsx from 'clsx'
import Link from 'next/link'
import { useReadingTime } from 'react-hook-reading-time'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import GeometricContainer from '@/components/shared/GeometricContainer'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import { blocksToText, formatTimeSince, resolveHref } from '@/sanity/lib/utils'
import type { PostPayload } from '@/types'

export interface PostProps {
  data: PostPayload | null
}

export function PostPage({ data }: PostProps) {
  const { body, publishedAt, title, author, categories } = data ?? {}
  const timeSince = formatTimeSince(publishedAt)
  const authorHref = resolveHref(author?._type, author?.slug)
  const { text: readingTimeText } = useReadingTime(blocksToText(body))

  return (
    <>
      <GeometricContainer>
        <div
          className={clsx(['p-16 relative w-full-1 overflow-hidden', 'bg-neutral-100/90', 'dark:bg-neutral-900/90'])}
        >
          <div className={clsx(['max-w-[60rem] mx-auto [text-wrap:pretty]', 'tracking-wide font-serif text-xl'])}>
            <p
              className={clsx(['font-mono text-sm leading-mono last:mb-0 px-1 font-normal uppercase text-gray-dark'])}
            >{`${timeSince && `${timeSince.formattedDate} (about ${timeSince.timeSince})`}`}</p>

            <Header title={title} />

            <div className={clsx(['flex gap-[1rem] flex-row items-center px-1'])}>
              <div className={clsx(['w-[56px]'])}>
                <Link className={clsx(['underline'])} href={authorHref ?? '#'}>
                  <ImageBox
                    width={56}
                    height={56}
                    image={author?.coverImage}
                    alt={`Cover image from ${author?.title}`}
                    classesWrapper={clsx([
                      'flex shrink-0 grow-0 w-[56px] relative rounded-full aspect-square object-cover border',
                      'border-slate-500 hover:border-black focus-visible:border-slate-800',
                      'dark:border-black dark:hover:border-neutral-700 dark:focus-visible:border-neutral-700',
                    ])}
                  />
                </Link>
              </div>

              <div className="font-mono text-sm leading-mono font-normal uppercase text-gray-dark">
                by{' '}
                <Link
                  className={clsx(['underline underline-offset-2', 'hover:no-underline focus-visible:no-underline'])}
                  href={authorHref ?? '#'}
                >
                  {author?.title}
                </Link>
                <span className="whitespace-nowrap"> • {readingTimeText}</span>
                {categories?.map((tag, key) => (
                  <span className="whitespace-nowrap" key={key}>
                    {' '}
                    • {tag}
                  </span>
                ))}
              </div>
            </div>

            <hr className={clsx(['border-neutral-300 dark:border-neutral-700 my-2 first:mt-0'])} />

            {body && <CustomPortableText value={body} />}

            <section className={clsx(['mt-3 mb-2'])}>
              <h2 className={clsx(['font-mono text-sm leading-mono font-normal uppercase text-gray-dark mb-0.5'])}>
                Written By
              </h2>
              <div className={clsx(['flex border-t py-1 border-putty'])}>
                <div className={clsx(['block w-2 h-2 flex-grow-0 flex-shrink-0 basis-2 relative'])}>
                  <Link className={clsx([])} href={authorHref ?? '#'}>
                    <ImageBox
                      width={42}
                      height={42}
                      image={author?.coverImage}
                      alt={`Cover image from ${author?.title}`}
                      classesWrapper={clsx([
                        'flex shrink-0 grow-0 w-[42px] relative rounded-full aspect-[1/1] object-cover border',
                        'border-slate-500 hover:border-slate-800 focus-visible:border-slate-800',
                        'dark:border-black dark:hover:border-neutral-700 dark:focus-visible:border-neutral-700',
                      ])}
                    />
                  </Link>
                </div>

                <div className="px-1 flex-grow">
                  <h3 className="font-body text-xl leading-heading-4 font-normal normal-case decoration-[0.0625em] underline-offset-body cursor-pointer hover:underline focus-visible:underline group-hover:underline group-focus-visible:underline mb-0.5">
                    <Link className={clsx([])} href={authorHref ?? '#'}>
                      {author?.title} – {author?.role}
                    </Link>
                  </h3>
                  <div className="font-body text-base tracking-wide leading-normal last:mb-0 mb-1 font-normal normal-case [text-wrap:pretty]">
                    {author?.overview && <CustomPortableText value={author?.overview} />}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </GeometricContainer>
    </>
  )
}

export default PostPage
