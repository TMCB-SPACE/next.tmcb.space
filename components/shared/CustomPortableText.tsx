import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { Image } from 'sanity'

import HighlightCode from '@/components/shared/HighlightCode'
import ImageBox from '@/components/shared/ImageBox'
import { TimelineSection } from '@/components/shared/TimelineSection'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    list: {
      bullet: ({ children }) => <ul className="mt-xl list-disc">{children}</ul>,
      number: ({ children }) => <ol className="mt-lg list-decimal">{children}</ol>,
    },
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
      h1: ({ children }) => {
        return <h1 className="text-4xl font-serif font-bold">{children}</h1>
      },
      h2: ({ children }) => {
        return <h2 className="text-3xl font-serif font-bold">{children}</h2>
      },
      h3: ({ children }) => {
        return <h3 className="text-2xl font-serif font-bold">{children}</h3>
      },
      h4: ({ children }) => {
        return <h4 className="text-xl font-serif font-bold">{children}</h4>
      },
      h5: ({ children }) => {
        return <h5 className="text-lg font-serif font-bold">{children}</h5>
      },
      h6: ({ children }) => {
        return <h6 className="text-base font-serif font-bold">{children}</h6>
      },
      blockquote: ({ children }) => {
        return <blockquote className="border-l-4 border-neutral-500 pl-1">{children}</blockquote>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a className="underline transition hover:opacity-50" href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        )
      },
      em: ({ children }) => <em className="text-gray-600 font-semibold">{children}</em>,
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      strikeThrough: ({ children }) => <del className="line-through">{children}</del>,
      underline: ({ children }) => <u className="underline">{children}</u>,
    },
    types: {
      image: ({ value }: { value: Image & { alt?: string; caption?: string } }) => {
        return (
          <div className="my-1 space-y-1 max-w-[60rem] mx-auto">
            <ImageBox image={value} alt={value.alt} classesWrapper="relative aspect-[16/9]" />
            {value?.caption && <div className="font-sans text-sm text-gray-600">{value.caption}</div>}
          </div>
        )
      },
      timeline: ({ value }) => {
        const { items } = value || {}
        return <TimelineSection timelines={items} />
      },
      code: ({ value }) => {
        const { code, language } = value || {}

        return <HighlightCode code={code} language={language} />
      },
    },
  }

  return <PortableText components={components} value={value} />
}
