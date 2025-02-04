import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Self hostable',
    Svg: require('@site/static/img/desktop-tower.svg').default,
    description: (
      <>
        Host your own instance with complete control over your data and infrastructure.
        Easy to deploy and maintain on your own servers.
      </>
    ),
  },
  {
    title: 'Interconnected',
    Svg: require('@site/static/img/intersect-three.svg').default,
    description: (
      <>
        Creations are interoperable between instances. Share interactive items across any IP built with Hyperfy.
      </>
    ),
  },
  {
    title: 'Real time multiplayer scripting',
    Svg: require('@site/static/img/users.svg').default,
    description: (
      <>
        Collaborate on scripts in real-time with other users. Write, edit, and execute
        code together in a synchronized environment.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
