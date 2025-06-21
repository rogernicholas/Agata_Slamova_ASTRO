import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'jaagz5m2',       // your project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
