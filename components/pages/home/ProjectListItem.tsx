import type { PortableTextBlock } from '@portabletext/types'
import clsx from 'clsx'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseProject } from '@/types'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd } = props

  return (
    <div
      className={clsx([
        'border rounded-xl',
        'bg-gray-100/90 border-slate-500 hover:bg-white',
        'dark:bg-neutral-800/90 dark:border-black dark:hover:bg-black',
        odd && '',
      ])}
    >
      <h2
        className={clsx([
          'text-xl font-extrabold tracking-tight p-1 border-b',
          'border-slate-500',
          'dark:border-black',
        ])}
      >
        {project.title}
      </h2>

      <div className="w-full">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-[16/9]"
        />
      </div>

      <div className={clsx(['border-t p-1 text-lg font-sans min-h-[125px]', 'border-slate-500', 'dark:border-black'])}>
        <CustomPortableText value={project.overview as PortableTextBlock[]} />
      </div>

      <div
        className={clsx([
          'flex flex-row gap-x-[0.875rem] border-t p-1 font-mono',
          'border-slate-500',
          'dark:border-black',
        ])}
      >
        {project.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))}
      </div>
    </div>
  )
}
