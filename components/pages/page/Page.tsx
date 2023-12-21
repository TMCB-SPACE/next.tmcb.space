import clsx from 'clsx'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import GeometricContainer from '@/components/shared/GeometricContainer'
import { Header } from '@/components/shared/Header'
import type { PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data ?? {}

  return (
    <>
      <GeometricContainer>
        <div className={clsx(['p-16'])}>
          <Header centered title={title} description={overview} />
        </div>
      </GeometricContainer>

      <GeometricContainer>
        <div className={clsx(['block -m-[0.5px] p-16 min-h-[40vh]'])}>
          {body && (
            <CustomPortableText
              paragraphClasses="tracking-wide font-serif text-xl w-full max-w-[60rem] mx-auto py-[0.5rem]"
              value={body}
            />
          )}
        </div>
      </GeometricContainer>
    </>
  )
}

export default Page
