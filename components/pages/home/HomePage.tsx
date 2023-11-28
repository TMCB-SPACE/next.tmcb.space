import { type EncodeDataAttributeCallback } from '@sanity/react-loader/rsc'
import clsx from 'clsx'
import Link from 'next/link'

import { PostListItem } from '@/components/pages/home/PostListItem'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import GeometricContainer from '@/components/shared/GeometricContainer'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title = '', overview = [], showcaseProjects = [], showcasePosts = [] } = data ?? {}

  return (
    <>
    <GeometricContainer>
      {title && <Header data-sanity={encodeDataAttribute?.('title')} centered title={title} description={overview} />}
    </GeometricContainer>

      <GeometricContainer>
        <Header centered title='Blog' />
      </GeometricContainer>

      <GeometricContainer>
        {showcasePosts && showcasePosts.length > 0 && (
        <div className={clsx([
          '-m-[0.5px] grid grid-cols-1',
        ])} data-section="posts">
          {showcasePosts.map((post, key) => {
            const href = resolveHref(post._type, post.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href} className={clsx([
                'block'
              ])}>
                <PostListItem post={post} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}

      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className={clsx([
          '-m-[1px] grid grid-cols-1 lg:grid-cols-2 flex-wrap gap-6 p-6'
        ])} data-section="projects">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href} className={clsx([
                'block'
              ])}>
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}
    </GeometricContainer>
    </>
  )
}

export default HomePage
