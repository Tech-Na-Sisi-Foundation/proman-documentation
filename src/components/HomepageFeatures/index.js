import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User Manual',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
        Get an understanding  on how AAPH GS works. With system rich in features, checkout to see all of what you can do inside the PROMAN  by opening <a href="/docs/user/user-manual-introduction"> User Manual </a>.
      </>
    ),
  },
  {
    title: 'API Documentation',
    Svg: require('@site/static/img/programming.svg').default,
    description: (
      <>
        If you are a developer. You might want to interract with this system. We welcome you with open arms. Have a look and start interracting with 
        <a href='/docs/category/developer-manual'> PROMAN API</a>
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
