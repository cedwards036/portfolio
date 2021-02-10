import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Card(props) {
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
          <h3>{props.name} &rarr;</h3>
        </a>
      </Link>
      <p>{props.shortDesc}</p>
    </div>
  );
}
