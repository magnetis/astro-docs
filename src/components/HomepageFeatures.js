import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "atomic",
    src: require("../../static/img/atomic.png").default,
    description: (
      <>
        Astro is built based on Atomic Design, so our designers and developers
        can use its style set and components to enhance our product interface,
        as a modular system that can be easily managed and updated.
      </>
    ),
  },
  {
    title: "open",
    src: require("../../static/img/open.png").default,
    description: (
      <>
        Magnetis believes that good design and experiences can impact the
        product market and society itself. Our design and code assets are open
        so we can contribute to the community and help new product teams.
      </>
    ),
  },
  {
    title: "accessible",
    src: require("../../static/img/accessible.png").default,
    description: (
      <>
        Design is meant to be for all. Astro style and components follow basic
        recommendations from the WCAG guidelines for accessibility, with tested
        contrast ratios and good practices in legibility and screen reading
        solutions.
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--left">
        <img src={src} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--left padding-horiz--md">
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
