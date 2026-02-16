import Image from "next/image";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

const Carousel = () => {
  const slides = [
    { title: "Cyber security", imgUrl: "/images/development-carousel1.webp" },
    { title: "Machine learning", imgUrl: "/images/development-carousel2.webp" },
    { title: "Web applications", imgUrl: "/images/development-carousel3.webp" },
    {
      title: "Mobile applications",
      imgUrl: "/images/development-carousel4.webp",
    },
    { title: "Data Science", imgUrl: "/images/development-carousel5.webp" },
  ];
  return (
    <MotionWrapper className="w-full inline-flex flex-nowrap overflow-hidden pb-28 xs:pb-32 md:pb-40 lg:pb-48 2xl:pb-24">
      <ul className="development-carousel">
        {slides.map((slide, index) => (
          <li key={index} className="development-carousel-list">
            <Image
              src={slide.imgUrl}
              height={266}
              width={344}
              className="h-full"
              alt={slide.title}
            />
            <div className="development-carousel-text">
              <span>{slide.title.split(" ")[0]}</span>
              <span>{slide.title.split(" ")[1]}</span>
            </div>
          </li>
        ))}
      </ul>
      <ul className="development-carousel " aria-hidden="true">
        {slides.map((slide, index) => (
          <li key={index} className="development-carousel-list">
            <Image
              src={slide.imgUrl}
              height={266}
              width={344}
              alt={slide.title}
              className="h-full"
            />
            <div className="development-carousel-text">
              <span>{slide.title.split(" ")[0]}</span>
              <span>{slide.title.split(" ")[1]}</span>
            </div>
          </li>
        ))}
      </ul>
      <ul className="development-carousel" aria-hidden="true">
        {slides.map((slide, index) => (
          <li key={index} className="development-carousel-list">
            <Image
              src={slide.imgUrl}
              height={400}
              width={344}
              alt={slide.title}
              className="h-full"
            />
            <div className="development-carousel-text">
              <span>{slide.title.split(" ")[0]}</span>
              <span>{slide.title.split(" ")[1]}</span>
            </div>
          </li>
        ))}
      </ul>
    </MotionWrapper>
  );
};

export default Carousel;
