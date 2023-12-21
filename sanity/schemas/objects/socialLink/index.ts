import { defineField, defineType } from 'sanity'
import IconPreview from './IconifyPreview'

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      description: 'Social link human readable title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'tooltip',
      title: 'Tooltip',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'icon',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tooltip: 'tooltip',
      url: 'url',
      icon: 'icon.name',
    },
    prepare({ title, tooltip, url, icon }) {
      return {
        title: `${title}${tooltip ? ` (${tooltip})` : ''}`,
        subtitle: url,
        media: IconPreview({ icon }),
      }
    },
  },
})
