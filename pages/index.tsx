import { ArrowRight } from '@styled-icons/feather';
import Head from 'next/head';

import { CardSection } from '../components/CardSection';
import { Footer } from '../components/Footer';
import { JoinLinks } from '../components/JoinLinks';
import { JoinPrompt } from '../components/JoinPrompt';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.scss';
import URLs from '../urls';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netscape</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/bpi8rtm.css" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.9, user-scalable=0"
        />

        <meta property="og:title" content="Netscape" />
        <meta property="og:url" content="https://Netscape.page" />
        <meta
          property="og:image"
          content="https://Netscape.page/netscape.gif"
        />
        <meta
          property="og:description"
          content="A digital nerve center of collaboration, knowledge management, learning and productivity."
        />

        <meta property="twitter:title" content="SocialTech" />
        <meta property="twitter:site" content="@socialtech.live" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://netscape.page/netscape.gif"
        />
        <meta
          property="twitter:image:alt"
          content="Open Technology Collaboration"
        />
        <meta
          property="twitter:description"
          content="A digital nerve center of collaboration, knowledge management, learning and productivity."
        />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />

        {
          // Disabled scroll snapping.
          /* // Firefox only: Scroll snapping.
                    // Doesn't work properly with Chromium.
                    typeof window !== 'undefined' &&
                    typeof (window as any).InstallTrigger !== 'undefined' &&
                    <style dangerouslySetInnerHTML={{ __html: `html { scroll-snap-type: y mandatory; }` }} /> */
        }
      </Head>
      <main>
        <section className={styles.hero}>
          <Navbar />
          <div className={styles.overview}>
            <div className={styles.left}>
              <div className={styles.tagline}>
                <h1>
                  Мануфактура
                  <br />
                  суперфактура
                </h1>
                <p>
                  Какой-нибудь дополнительный слоган
                  <br />
                  или еще чего нибудь
                </p>
                <JoinLinks />
              </div>
            </div>
            <div className={styles.graphic}>
              <img src="/assets/images/feature.svg" draggable={false} />
            </div>
          </div>
        </section>
        <CardSection />
        <section className={styles.section} data-reverse="true">
          <div className={styles.image}>
            <img
              src="/members.svg"
              draggable={false}
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div className={styles.content}>
            <div>
              <img src="/assets/images/image1.svg" draggable={false} />
              <h1>
                Kickstart a collective
                <br /> with your co-founders.
              </h1>
              <p>
                It’s the early days, you just had a long conversation with two
                friends about a meaningful challenge that you’re all passionate
                about and have a potential solution for. You’re ready to embark
                the startup journey.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.content}>
            <div>
              <img src="/assets/images/image2.svg" draggable={false} />
              <h1>
                Onboard users, investors
                <br /> and advisors as you grow
              </h1>
              <p>
                You’ve bootstrapped and delivered an MVP, and some investors and
                advisors are interested in having a chat with you. As an Open
                Enterprise, you can onboard them seamlessly into your digital
                organization and align them with your success.
              </p>
              <a
                className={styles.link}
                href={URLs.GitHub}
                target="_blank"
                rel="noreferrer"
              >
                <ArrowRight size={24} strokeWidth={2} />
                View project on GitHub
              </a>
            </div>
          </div>
          <div className={styles.image}>
            <img src="/proposal.svg" draggable={false} />
          </div>
        </section>
        <section className={styles.section} data-reverse="true">
          <div className={styles.image}>
            <img src="/illustration.svg" draggable={false} />
          </div>
          <div className={styles.content}>
            <div>
              <img src="/assets/images/image3.svg" draggable={false} />
              <h1>
                Engage highly committed
                <br />
                contributors
              </h1>
              <p>
                You need talented people on-demand across various tasks that
                your full-time workforce can’t prioritize at the moment. As an
                collective, you can easily fund tasks and have people apply to
                work on them in return for funds or shares.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.content}>
            <div>
              <h1>
                Future of communication
                <br />
                collaboration and consultation.
              </h1>
              <p>
                A digital nerve center of{' '}
                <u>
                  collaboration, knowledge management, learning and
                  productivity.
                </u>{' '}
                Designed to provide omni-channel environments for real time
                communication, interaction, discussion and publication using
                recent advances in modern digital technologies. The focus
                towards which the unifying forces of decentralised networks and
                digital experiences will converge and from which its energizing
                influences will radiate.
              </p>
            </div>
          </div>
          <div className={styles.image}>
            <img src="assets/images/feature1.svg" draggable={false} />
          </div>
        </section>
        <JoinPrompt />
        <Footer />
      </main>
    </div>
  );
}
