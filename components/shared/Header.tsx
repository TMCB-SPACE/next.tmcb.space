import clsx from 'clsx'

import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
}

export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className={clsx(['font-mono p-1 -m-[0.5px]', centered ? 'text-center' : 'text-left'])}>
      {/* Title */}
      {title && <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>}
      {/* Description */}
      {description && (
        <div className={clsx(['my-1 font-sans text-xl md:text-2xl mx-auto', centered && 'w-5/6 lg:w-4/6'])}>
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}
