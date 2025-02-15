export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      validation: Rule => Rule.required(),
      title: 'Date',
      type: 'date',
    },
    {
      name: 'employer',
      title: 'Employer',
      type: 'string'
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [
        { type: 'image' },
        {
          type: 'object',
          name: 'youtube',
          title: 'YouTube Video',
          fields: [
            {
              name: 'url',
              title: 'YouTube URL',
              type: 'url',
              validation: Rule => Rule.required()
            }
          ]
        },
      ]
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    },
    {
      name: 'openGraphImage',
      title: 'Open Graph Image',
      description: 'Image for social media sharing',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'mainImage'
    },
    prepare({ title, client, media }) {
      return {
        title,
        subtitle: client,
        media
      }
    }
  }
}
