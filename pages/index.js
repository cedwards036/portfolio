import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer.js";
import CardGrid from "../components/card_grid.js";
import PersonalLinks from "../components/personal-links.js";
import card_data from "../data/cards.json";
import personal_link_data from "../data/personal_links.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christopher Edwards Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Christopher Edwards</h1>
        <div>
          <h2>Software Developer</h2>
          <PersonalLinks links={personal_link_data} />
        </div>
        <p className={styles.description}>
          Classically trained singer, dog lover, and all-around nerd.
        </p>
        <CardGrid cards={card_data} />
      </main>

      <Footer />
    </div>
  );
}
