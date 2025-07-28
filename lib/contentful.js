import { createClient } from 'contentful';
import https from 'https';;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: 'cdn.contentful.com',
  httpsAgent: new https.Agent({
    keepAlive: true,
    rejectUnauthorized: process.env.NODE_ENV !== 'development'
  })

});

export async function getServices() {
  const res = await client.getEntries({ 
    content_type: 'service',
    order: 'sys.createdAt'
  });
  return res.items;
}