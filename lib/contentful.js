import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getServices() {
  const res = await client.getEntries({ 
    content_type: 'service',
    order: 'sys.createdAt'
  });
  return res.items;
}