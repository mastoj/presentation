"use client";
import background from "@/assets/images/nextecom/homepage.png";
import { SlideDefinition, Slideshow } from "@/components/slide-show";
import TitleSlide from "@/components/title-slide";
import { ComponentType, createElement } from "react";
import Slide1 from "./_slides/slide1.mdx";
import Slide10 from "./_slides/slide10.mdx";
import Slide11 from "./_slides/slide11.mdx";
import Slide12 from "./_slides/slide12.mdx";
import Slide2 from "./_slides/slide2.mdx";
import Slide3 from "./_slides/slide3.mdx";
import Slide4 from "./_slides/slide4.mdx";
import Slide5 from "./_slides/slide5.mdx";
import Slide6 from "./_slides/slide6.mdx";
import Slide7 from "./_slides/slide7.mdx";
import Slide8 from "./_slides/slide8.mdx";
import Slide9 from "./_slides/slide9.mdx";

type SlideProps = {
  initialSlide: number;
};
export const ReactParisSlides = ({ initialSlide }: SlideProps) => {
  const presentationUrl = `https://presentations.2mas.xyz/reactparis`;
  // eslint-disable-next-line react/display-name
  const c = (component: ComponentType) => () => createElement(component);
  const slides: SlideDefinition[] = [
    () => (
      <TitleSlide
        title="What we learned rebuilding the largest Nordic electronic retail website in Next.js?"
        date={new Date(2025, 3, 20)}
        backgroundImage={background}
        presentationSlug="reactparis"
      />
    ),
    c(Slide1),
    c(Slide2),
    c(Slide3),
    c(Slide4),
    c(Slide5),
    c(Slide6),
    c(Slide7),
    c(Slide8),
    c(Slide9),
    c(Slide10),
    c(Slide11),
    c(Slide12),
  ];
  return (
    <div className="flex h-full items-center relative">
      <Slideshow
        slides={slides}
        initialSlide={initialSlide}
        presentationUrl={presentationUrl}
        // className=""
      />
    </div>
  );
};
