import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer.js";
import Card from "../components/card.js";
import PersonalLinks from "../components/personal-links.js";

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
          <PersonalLinks
            links={[
              {
                url: "https://github.com/cedwards036",
                imgSrc: "/github.png",
                alt: "Github link",
              },
              {
                url: "https://www.linkedin.com/in/cedwards036/",
                imgSrc: "/linkedin.png",
                alt: "LinkedIn link",
              },
              {
                url: "https://twitter.com/cedwards036",
                imgSrc: "/twitter.png",
                alt: "Twitter link",
              },
            ]}
          />
        </div>
        <p className={styles.description}>
          Classically trained singer, dog lover, and all-around nerd.
        </p>

        <div className={styles.grid}>
          <Card
            name="Sudoku App"
            shortDesc="A web app for solving sudoku puzzles"
            webURL="https://react-sudoku.netlify.app/"
            blogURL="/"
            imgSrc="/sudoku.png"
            imgAlt="Sudoku App preview image"
          />
          <Card
            name="Workflowish"
            shortDesc="A clone of the Workflowy productivity app"
            webURL="https://workflowish.netlify.app/"
            blogURL="/"
            imgSrc="/workflowish.png"
            imgAlt="Workflowish App preview image"
          />
          <Card
            name="Autohandshake"
            shortDesc="A web automation library for the Handshake career services platform"
            webURL="https://pypi.org/project/autohandshake/"
            blogURL="/"
            imgSrc="/handshake.png"
          />
          <Card
            name="Deterministic Turing Machine Simulation"
            shortDesc="A command-line app simulating a deterministic Turing machine"
            webURL="https://github.com/cedwards036/DeterministicTuringMachine"
            blogURL="/"
            imgSrc="/turing.jpg"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
