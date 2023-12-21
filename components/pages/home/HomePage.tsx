import { type EncodeDataAttributeCallback } from '@sanity/react-loader'
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
      {title && (
        <GeometricContainer>
          <div className={clsx(['pt-1'])}>
            <Header data-sanity={encodeDataAttribute?.('title')} centered title={title} description={overview} />
          </div>
        </GeometricContainer>
      )}

      {showcasePosts && showcasePosts.length > 0 && (
        <>
          <GeometricContainer>
            <Header centered title="Blog" />
          </GeometricContainer>

          <GeometricContainer>
            <div className={clsx(['-m-[0.5px] grid grid-cols-1'])} data-section="posts">
              {showcasePosts.map((post, key) => {
                const href = resolveHref(post._type, post.slug)
                if (!href) {
                  return null
                }
                return (
                  <Link key={key} href={href} className={clsx(['block'])}>
                    <PostListItem post={post} odd={key % 2} />
                  </Link>
                )
              })}
            </div>
          </GeometricContainer>
        </>
      )}

      {showcaseProjects && showcaseProjects.length > 0 && (
        <>
          <GeometricContainer>
            <Header centered title="Our Open Source Projects" />
          </GeometricContainer>

          <GeometricContainer>
            <div
              className={clsx(['-m-[1px] grid grid-cols-1 lg:grid-cols-2 flex-wrap gap-1 p-1'])}
              data-section="projects"
            >
              {showcaseProjects.map((project, key) => {
                const href = resolveHref(project._type, project.slug)
                if (!href) {
                  return null
                }
                return (
                  <Link key={key} href={href} className={clsx(['block'])}>
                    <ProjectListItem project={project} odd={key % 2} />
                  </Link>
                )
              })}
            </div>
          </GeometricContainer>
        </>
      )}
    </>
  )
}

export default HomePage
