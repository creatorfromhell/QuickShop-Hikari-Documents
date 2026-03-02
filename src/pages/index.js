import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const title = siteConfig.title || 'QuickShop Hikari Docs';
  const tagline =
    siteConfig.tagline ||
    'A shop plugin that lets players buy and sell items from containers without commands.';

  return (
    <Layout
      title={title}
      description="QuickShop-Hikari User Documents">
      <main className={styles.page}>
        {/* Big center panel like the Next.js site */}
        <section className={styles.contentShell}>
          {/* HERO */}
          <header className={styles.hero}>
            <div className={styles.heroLogo}>
              <img
                src="img/logo.webp"
                alt="QuickShop Hikari Logo"
                height="250px"
              />
            </div>

            <h1 className={styles.heroTitle}>{title}</h1>

            <p className={styles.heroTagline}>
              {tagline}{' '}
              This documentation covers setup, configuration, addons, and
              compatibility modules.
            </p>

            <div className={styles.heroButtons}>
              <Link
                className={clsx(styles.heroButton, styles.heroButtonPrimary)}
                to="/docs/setup/install">
                Getting Started
              </Link>

              <Link
                className={clsx(styles.heroButton, styles.heroButtonGhost)}
                to="/docs/category/compatibility-modules">
                Compatibility Modules
              </Link>

              <Link
                className={clsx(styles.heroButton, styles.heroButtonGhost)}
                to="/docs/category/addon">
                Addons
              </Link>

              <Link
                className={clsx(styles.heroButton, styles.heroButtonModrinth)}
                to="https://modrinth.com/plugin/quickshop-hikari">
                View on Modrinth
              </Link>

              <Link
                className={clsx(styles.heroButton, styles.heroButtonDiscord)}
                to="https://discord.gg/Bu3dVtmsD3">
                Join Discord
              </Link>
            </div>

            <p className={styles.heroMeta}>
              <span className={clsx(styles.dot, styles.dotGreen)} />
              Paper 1.20+ ready
              <span className={styles.metaSep}>•</span>
              <span className={clsx(styles.dot, styles.dotBlue)} />
              Active snapshots
              <span className={styles.metaSep}>•</span>
              <span className={clsx(styles.dot, styles.dotPink)} />
              Open source
            </p>
          </header>

          {/* SECTION GRID */}
          <section className={styles.sectionGrid}>
            <article className={styles.sectionCard}>
              <h2>Installation</h2>
              <p>
                Learn how to install QuickShop Hikari, and verify
                that everything is working correctly on your server.
              </p>
              <ul>
                <li>
                  <Link to="/docs/setup/install">Installation</Link>
                </li>
                <li>
                  <Link to="/docs/category/faq">
                    FAQ &amp; common issues
                  </Link>
                </li>
              </ul>
            </article>

            <article className={styles.sectionCard}>
              <h2>Configuration &amp; Permissions</h2>
              <p>
                Tweak every aspect of QuickShop: language, taxes, protections,
                limits, and integration with your permission system.
              </p>
              <ul>
                <li>
                  <Link to="#">
                    Configuration overview(WIP)
                  </Link>
                </li>
                <li>
                  <Link to="/docs/setup/permissions">
                    Permissions &amp; roles
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Commands &amp; arguments(WIP)
                  </Link>
                </li>
              </ul>
            </article>

            <article className={styles.sectionCard}>
              <h2>Addons &amp; Compatibility</h2>
              <p>
                Explore official addons and compatibility modules to connect
                QuickShop Hikari with other plugins and networks.
              </p>
              <ul>
                <li>
                  <Link to="/docs/category/addon">Official addons</Link>
                </li>
                <li>
                  <Link to="/docs/category/compatibility-modules">
                    Compatibility modules
                  </Link>
                </li>
                <li>
                  <Link to="/docs/category/addon-unofficial">
                    Community addons
                  </Link>
                </li>
              </ul>
            </article>
          </section>
        </section>
      </main>
    </Layout>
  );
}
