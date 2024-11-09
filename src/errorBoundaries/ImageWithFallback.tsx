import {useState} from "react";
import Image, {ImageProps} from "next/image";

type ImageWithFallbackProps = Omit<ImageProps, "src"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "/blog-card/empty.svg",
  className = "",
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={() => setError(true)}
      blurDataURL={fallbackSrc}
      placeholder="blur"
      className={`${className}`}
      {...props}
    />
  );
};

export default ImageWithFallback;
