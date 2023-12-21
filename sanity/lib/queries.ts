import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    showcasePosts[]->{
      _type,
      body,
      overview,
      coverImage,
      "slug": slug.current,
      publishedAt,
      categories,
      author->{
        slug,
        title,
        coverImage,
      },
      title,
    },
    title,
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const postsBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    author->{
      _type,
      "slug": slug.current,
      title,
      role,
      overview,
      coverImage,
    },
    body,
    categories,
    coverImage,
    overview,
    publishedAt,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const membersBySlugQuery = groq`
  *[_type == "member" && slug.current == $slug][0] {
    _id,
    title,
    shortName,
    role,
    overview,
    coverImage,
    "slug": slug.current,
    socialLinks[]{
      _type,
      title,
      url,
      tooltip,
      "icon": icon.name
    },
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    "home": *[_type == "home"][0]{
      _type,
      title
    },
    footer,
    footerItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    socialLinks[]{
      _type,
      title,
      url,
      tooltip,
      "icon": icon.name
    },
    ogImage,
  }
`
