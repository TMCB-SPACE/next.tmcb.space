'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { pagesBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { PagePayload } from '@/types'

import PostPage from './PostPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<PagePayload | null>
}

export default function PostPreview(props: Props) {
  const { params, initial } = props
  const { data } = useQuery<PagePayload | null>(pagesBySlugQuery, params, {
    initial,
  })

  return <PostPage data={data!} />
}
