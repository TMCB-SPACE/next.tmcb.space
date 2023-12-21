'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { membersBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { MemberPayload } from '@/types'

import MemberPage from './MemberPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<MemberPayload | null>
}

export default function MemberPreview(props: Props) {
  const { params, initial } = props
  const { data } = useQuery<MemberPayload | null>(membersBySlugQuery, params, {
    initial,
  })

  return <MemberPage data={data!} />
}
