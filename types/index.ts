import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface TeamMember {
  _type: string
  slug?: string
  title?: string
  role?: string
  coverImage?: Image
  overview?: PortableTextBlock[]
}

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface FooterItem {
  _type: string
  slug?: string
  title?: string
}

export interface SocialLink {
  _type: string
  title: string
  url: string
  tooltip?: string
  icon?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface ShowcasePost {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  body?: PortableTextBlock[]
  slug?: string
  publishedAt?: string
  categories?: string[]
  author?: TeamMember
  title?: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  showcasePosts?: ShowcasePost[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface PostPayload {
  author?: TeamMember
  body?: PortableTextBlock[]
  categories?: string[]
  coverImage?: Image
  overview?: PortableTextBlock[]
  publishedAt?: string
  slug?: string
  title?: string
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface MemberPayload {
  title?: string
  shortName?: string
  role?: string
  overview?: PortableTextBlock[]
  coverImage?: Image
  slug?: string
  socialLinks?: SocialLink[]
}

export interface SettingsPayload {
  menuItems?: MenuItem[]
  home: HomePagePayload & {
    _type: string
  }
  footer?: PortableTextBlock[]
  footerItems?: FooterItem[]
  socialLinks?: SocialLink[]
  ogImage?: Image
}
