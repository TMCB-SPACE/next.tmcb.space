import type { PortableTextBlock } from '@portabletext/types'
import clsx from 'clsx'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import { formatTimeSince } from '@/sanity/lib/utils'
import type { ShowcasePost } from '@/types'

interface PostProps {
  post: ShowcasePost
  odd: number
}

export function PostListItem(props: PostProps) {
  const { post, odd } = props
  const timeSince = formatTimeSince(post.publishedAt)

  return (
    <div
      className={clsx([
        'gap-y-1 gap-x-2 p-1 md:p-2 group grid md:grid-cols-[theme(spacing.9)_1fr] lg:grid-cols-[theme(spacing.8)_1fr_theme(spacing.11)]',
        'relative border -m-[0.5px]',
        'border-slate-500 hover:bg-white focus-visible:bg-white',
        'dark:border-black dark:hover:bg-black dark:focus-visible:bg-black',
        odd && '',
      ])}
    >
      <div className={clsx(['w-full sm:max-w-12 relative md:row-span-2 lg:row-span-1'])}>
        <ImageBox
          width={384}
          height={256}
          image={post.coverImage}
          alt={`Cover image from ${post.title}`}
          classesWrapper="relative aspect-[3/2] border border-slate-500 dark:border-black"
        />
      </div>

      <div className={clsx(['pr-1'])}>
        <p className={clsx(['font-mono text-sm leading-mono last:mb-0 mb-1 font-normal uppercase text-gray-dark'])}>{`${
          timeSince && `${timeSince.formattedDate} (about ${timeSince.timeSince})`
        }`}</p>

        <h2
          className={clsx([
            'font-extrabold tracking-tight',
            'text-xl md:text-3xl leading-heading last:mb-0 mb-1 font-bold normal-case decoration-[0.0625em] underline-offset-body cursor-pointer hover:underline focus-visible:underline group-hover:underline group-focus-visible:underline max-w-[45rem] [text-wrap:pretty]',
          ])}
        >
          {post.title}
        </h2>

        <div className={clsx(['flex gap-[1rem] flex-row items-center'])}>
          <div className={clsx(['w-[42px]'])}>
            <ImageBox
              width={42}
              height={42}
              image={post.author?.coverImage}
              alt={`Cover image from ${post.author?.title}`}
              classesWrapper={clsx([
                'flex shrink-0 grow-0 w-[42px] relative rounded-full aspect-square object-cover border',
                'border-slate-500',
                'dark:border-black',
              ])}
            />
          </div>

          <div className="font-mono text-sm leading-mono font-normal uppercase text-gray-dark">
            by {post.author?.title}
            {post.categories?.map((tag, key) => (
              <span className="whitespace-nowrap" key={key}>
                {' '}
                • {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className={clsx([
          'p-[0.5rem] text-md font-sans',
          'font-body text-base tracking-wide leading-normal font-normal normal-case max-w-[45rem]',
        ])}
      >
        <CustomPortableText value={post.overview as PortableTextBlock[]} />
      </div>
    </div>
  )
}
