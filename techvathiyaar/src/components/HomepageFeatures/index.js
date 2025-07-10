import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'About Me',
    Svg: require('@site/static/img/tv-about-me.svg').default,
    link: '/docs/about',
  },
  {
    title: 'Technical Writing',
    Svg: require('@site/static/img/tv-technical-writing.svg').default,
    link: '/docs/technical-writing',
  },
  {
    title: 'Blogging',
    Svg: require('@site/static/img/tv-blogging.svg').default,
    link: '/docs/blogging',
  },
  {
    title: 'UX Writing',
    Svg: require('@site/static/img/tv-ux-writing.svg').default,
    link: '/docs/ux-writing',
  },
  {
    title: 'Content Strategy',
    Svg: require('@site/static/img/tv-content-strategy.svg').default,
    link: '/docs/content-strategy',
  },
  {
    title: 'API Documentation',
    Svg: require('@site/static/img/tv-api-documentation.svg').default,
    link: '/docs/api-docs',
  },
  {
    title: 'Multimedia Content',
    Svg: require('@site/static/img/tv-multimedia-content-creation.svg').default,
    link: '/docs/multimedia',
  },
  {
    title: 'Monetization',
    Svg: require('@site/static/img/tv-monetization.svg').default,
    link: '/docs/monetization',
  },
];

function Feature({ Svg, title, link }) {
  return (
    <div className={clsx('col col--4', styles.featureItem)}>
      <Link to={link} className="text--center" style={{ textDecoration: 'none' }}>
        <div>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
