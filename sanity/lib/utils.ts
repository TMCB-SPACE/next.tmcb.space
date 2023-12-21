import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '@/sanity/lib/api'
import { PortableTextBlock } from '@portabletext/types'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image | undefined) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto('format').fit('max')
}

export const urlForOpenGraphImage = (image: Image | undefined) => {
  return urlForImage(image)?.width(1200).height(627).fit('crop').url()
}

export const resolveHref = (documentType?: string, slug?: string): string | undefined => {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'project':
      return slug ? `/projects/${slug}` : undefined
    case 'post':
      return slug ? `/blog/${slug}` : undefined
    case 'member':
      return slug ? `/team/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}

export const formatTimeSince = (dateTime?: string) => {
  if (!dateTime) {
    return ''
  }

  const formattedDate = new Date(dateTime as string).toLocaleDateString('en-US')
  const dateDifference = new Date().getTime() - new Date(dateTime as string).getTime()
  const yearsAgo = Math.floor(dateDifference / (1000 * 3600 * 24 * 365))
  const monthsAgo = Math.floor(dateDifference / (1000 * 3600 * 24 * 30))
  const daysAgo = Math.floor(dateDifference / (1000 * 3600 * 24))
  const hoursAgo = Math.floor(dateDifference / (1000 * 3600))
  const minutesAgo = Math.floor(dateDifference / (1000 * 60))
  let timeSince = ''

  switch (true) {
    case yearsAgo > 0:
      timeSince = `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`
      break
    case monthsAgo > 0:
      timeSince = `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`
      break
    case daysAgo > 0:
      timeSince = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`
      break
    case hoursAgo > 0:
      timeSince = `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`
      break
    default:
      timeSince = `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`
      break
  }

  return {
    formattedDate,
    timeSince,
  }
}

export const textWithoutZerospace = (text?: string) => {
  return text?.replace(/[\u200B-\u200D\uFEFF]/g, '') || ''
}

export const blocksToText = (blocks: PortableTextBlock[] | undefined, opts = {}) => {
  const options = Object.assign({}, { nonTextBehavior: 'remove' }, opts)

  if (!blocks) {
    return ''
  }

  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }

      return block.children.map((child) => child.text.trim()).join('')
    })
    .join('\n\n')
}
