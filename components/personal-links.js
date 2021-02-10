import Image from "next/image";

export default function PersonalLinks(props) {
  const links = props.links.map((link) => (
    <a href={link.url} target="_blank">
      <Image src={link.imgSrc} width={30} height={30} alt={link.alt}></Image>
    </a>
  ));
  return <div>{links}</div>;
}
