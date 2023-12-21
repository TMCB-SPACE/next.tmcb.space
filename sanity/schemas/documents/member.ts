import { RocketIcon } from '@sanity/icons'
import { defineArrayMember, defineField } from 'sanity'

export default {
  name: 'member',
  title: 'Member',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the name of the team member.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortName',
      description: 'This field is the displayed short name of the team member.',
      title: 'Displayed name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      description: 'This field is the role of the team member.',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description: 'Used both for the <meta> description tag for SEO, and team member header.',
      title: 'Overview',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      description: 'This image will be used as the image for the team member.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      description: 'Links displayed on team member display.',
      type: 'array',
      of: [
        {
          type: 'socialLink',
        },
      ],
      validation: (rule) => rule.unique(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      role: 'role',
    },
    prepare({ title, role }) {
      return {
        subtitle: `Role: ${role}`,
        title,
      }
    },
  },
}
