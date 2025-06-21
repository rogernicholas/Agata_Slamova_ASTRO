import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'your_project_id', // TODO: Replace with your actual project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
}); 