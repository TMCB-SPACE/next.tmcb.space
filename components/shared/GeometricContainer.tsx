import clsx from 'clsx'
import { ReactNode } from 'react'

export default function GeometricContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className={clsx([
        'relative border-y -my-[1px] flex-grow grid grid-cols-xs sm:grid-cols-sm lg:grid-cols-lg xl:grid-cols-xl',
        'border-slate-500',
        'dark:border-black',
      ])}
    >
      <div className={clsx(['col-start-2 col-end-3 border-x', 'border-slate-500', 'dark:border-black'])}>
        {children}
      </div>
    </div>
  )
}
