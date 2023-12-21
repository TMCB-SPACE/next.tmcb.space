import clsx from 'clsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface HighlightCodeProps {
  code: string
  language: string
}

export function HighlightCode(props: HighlightCodeProps) {
  const { code, language } = props

  return (
    <>
      <figure
        className={clsx([
          'block text-black border -m-[0.5px] relative w-full-1  max-w-[60rem] mx-auto my-1 rounded-md overflow-hidden',
          'bg-gray-100/90 border-slate-500',
          'dark:bg-neutral-800/90 dark:border-black',
        ])}
      >
        <figcaption
          className={clsx([
            '-mx-[1px] border-b -mt-[1px] flex justify-between p-0.5',
            'text-black bg-neutral-300 border-slate-500',
            'dark:text-stone-100 dark:bg-neutral-800 dark:border-black',
          ])}
        >
          <div
            className={clsx([
              'font-body text-base tracking-wide leading-normal font-normal normal-case py-[0.5rem] px-[0.5rem]',
            ])}
          >
            {language}
          </div>

          <button
            className={clsx([
              'relative group/button inline-block -m-[1px] px-[0.5rem] font-mono text-sm leading-mono font-normal uppercase',
            ])}
          >
            <span className="opacity-100 pointer-events-auto col-start-1 row-start-1 flex items-center justify-center">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-0.5"
              >
                <rect
                  x="3.5"
                  y="3.5"
                  width="12"
                  height="14"
                  className="stroke-current"
                  vectorEffect="non-scaling-stroke"
                ></rect>
                <path
                  d="M3.5 14.5H0.5V0.5H12.5V3.5"
                  className="stroke-current"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
              <span className="sr-only">Copy Icon</span>
              Copy
            </span>
          </button>
        </figcaption>

        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          showLineNumbers={true}
          useInlineStyles={true}
          wrapLines={true}
          customStyle={{
            // background: 'transparent',
            margin: 0,
            padding: 0,
          }}
          className={clsx(['overflow-x-scroll px-[0.875rem] max-h-[42rem] overflow-y-scroll py-0'])}
          codeTagProps={{
            className: clsx(['font-mono leading-code normal-case max-w-full text-sm']),
          }}
          // lineNumberContainerStyle
          // lineNumberStyle
          // wrapLongLines
          // lineProps={() => ({
          //   class: clsx([
          //     'leading-code normal-case max-w-full text-sm font-mono'
          //   ])
          // })}
        >
          {code}
        </SyntaxHighlighter>
      </figure>
    </>
  )
}

export default HighlightCode
