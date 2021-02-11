import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function PersonalLinks(props) {
  const links = props.links.map((link) => (
    <a href={link.url} target="_blank" key={link.url}>
      <Image src={link.imgSrc} width={24} height={24} alt={link.alt}></Image>
    </a>
  ));
  return <div className={styles.plinks}>{links}</div>;
}
