import Card from "./card.js";
import styles from "../styles/Home.module.css";

export default function CardGrid(props) {
  const cards = props.cards.map((card) => (
    <Card
      name={card.name}
      shortDesc={card.shortDesc}
      webURL={card.webURL}
      blogURL={card.blogURL}
      imgSrc={card.imgSrc}
      imgAlt={card.imgAlt}
      technologies={card.technologies}
      key={card.name}
    />
  ));
  return <div className={styles.grid}>{cards}</div>;
}
