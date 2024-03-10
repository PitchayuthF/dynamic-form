import Image from "next/image";

type BannerProps = {
  src: string;
  alt: string;
};

const Banner = ({ src, alt }: BannerProps) => {
  return (
    <Image src={src} alt={alt} layout="responsive" width={100} height={100} />
  );
};

export default Banner;
