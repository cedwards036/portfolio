import Image from "next/image";

export default function PersonalLinks(props) {
  const links = props.links.map((link) => (
    <a href={link.url} target="_blank" key={props.url}>
      <Image src={link.imgSrc} width={24} height={24} alt={link.alt}></Image>
    </a>
  ));
  return <div>{links}</div>;
}
