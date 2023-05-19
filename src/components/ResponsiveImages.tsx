import Image from "next/image";
import { useEffect, useState } from "react";
const ResponsiveImage = ({
  mobileSrc,
  desktopSrc,
  alt,
}: {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 460);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Image
      src={isMobile ? mobileSrc : desktopSrc}
      alt={alt}
      width={isMobile ? " " : 1480}
      height={isMobile ? 500 : ""}
      className={isMobile ? "m-auto" : "m-auto max-h-screen"}
    />
  );
};

export default ResponsiveImage;
