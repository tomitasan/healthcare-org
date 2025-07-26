import { getServices } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function Home() {
  const services = await getServices();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        {/* Services Section from Contentful */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6">Our Healthcare Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.sys.id} className="bg-white/10 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl mb-4">
                  {typeof service.fields.icon === 'string' || typeof service.fields.icon === 'number'
                    ? service.fields.icon
                    : null}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {typeof service.fields.title === 'string' || typeof service.fields.title === 'number'
                    ? service.fields.title
                    : ''}
                </h3>
                <div className="prose dark:prose-invert">
                  {service.fields.description && typeof service.fields.description === 'object' && 'nodeType' in service.fields.description
                    ? documentToReactComponents(service.fields.description as import('@contentful/rich-text-types').Document)
                    : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Keep your existing links */}
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* Your existing buttons... */}
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* Your existing footer... */}
      </footer>
    </div>
  );
}