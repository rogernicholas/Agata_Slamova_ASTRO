import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'jaagz5m2', //
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});