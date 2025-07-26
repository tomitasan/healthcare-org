import { getServices } from '../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Home({ services }) {
  return (
    <div className="container">
      <header>
        <h1>Healthcare Services</h1>
      </header>
      
      <div className="services-grid">
        {services.map(service => (
          <div key={service.sys.id} className="service-card">
            <div className="service-icon">{service.fields.icon}</div>
            <h2>{service.fields.title}</h2>
            <div className="service-description">
              {documentToReactComponents(service.fields.description)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const services = await getServices();
  return {
    props: { services },
    revalidate: 60, // Refresh every 60 seconds
  };
}
