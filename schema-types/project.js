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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Brand Design', value: 'brand-design' },
          { title: 'Digital Campaign', value: 'digital-campaign' },
          { title: 'User Interface', value: 'ui' },
          { title: 'Identity Design', value: 'identity' },
          { title: 'Packaging', value: 'packaging' }
        ]
      }
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
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'projectDetails',
      title: 'Project Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'detail',
              title: 'Detail',
              type: 'string'
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'services',
      title: 'Services Provided',
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
