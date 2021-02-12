import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Card(props) {
  const technologies = props.technologies.map((tech) => (
    <div className={styles.technology} key={tech}>
      {tech}
    </div>
  ));
  const githubLinks = props.githubLinks.map((link) => (
    <a
      href={link.url}
      target="_blank"
      className={styles.ghlinks}
      key={link.name}
    >
      <Image src="/github.svg" width={15} height={15} alt="Github logo"></Image>
      {" " + link.name}
    </a>
  ));
  return (
    <div className={styles.card}>
      <Link href={props.webURL}>
        <a target="_blank">
          <Image
            src={props.imgSrc}
            width={324}
            height={200}
            alt={props.imgAlt}
          ></Image>
          <h3>{props.name}</h3>
        </a>
      </Link>
      <div>{githubLinks}</div>
      <div className={styles.technologies}>{technologies}</div>
      <p>{props.shortDesc}</p>
      {props.blogURL && (
        <Link href={props.blogURL}>
          <a className={styles.bloglink}>Read more &rarr;</a>
        </Link>
      )}
    </div>
  );
}
