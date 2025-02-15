import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema-types'
import { media } from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'kut5x9ek',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
