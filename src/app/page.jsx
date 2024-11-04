import { notFound } from 'next/navigation';
import { Hero } from '../components/Hero.jsx';
import { Stats } from '../components/Stats.jsx';
import { getPageFromSlug } from '../utils/content.js';

const componentMap = {
  hero: Hero,
  stats: Stats,
};

export default async function ComposablePage() {
  try {
    const page = await getPageFromSlug("/");

    if (!page) {
      return notFound();
    }

    return (
      <div data-sb-object-id={page.id}>
        <iframe src="https://2nv8f8lk.c5.rs"></iframe>
        {(page.sections || []).map((section, idx) => {
          const Component = componentMap[section.type];
          return <Component key={idx} {...section} />;
        })}
      </div>
    );
  } catch (error) {
    console.error(error.message);
    return notFound();
  }
}
