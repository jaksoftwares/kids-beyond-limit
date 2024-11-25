"use client";
import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";

const carouselOptions: EmblaOptionsType = {
  loop: true,
  dragFree: true,
};

interface EmblaCarouselProps {
  CardComponent: React.ComponentType<any>;
  items: any[];
  showButtons?: boolean;
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
  CardComponent,
  items,
  showButtons = false,
}) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, [
    AutoScroll({
      playOnInit: true,
      stopOnFocusIn: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      speed: 0.5,
    }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      const autoScroll = emblaApi.plugins()?.autoScroll;
      autoScroll?.stop();
      setTimeout(() => autoScroll?.play(), 5000);
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      const autoScroll = emblaApi.plugins()?.autoScroll;
      autoScroll?.stop();
      setTimeout(() => autoScroll?.play(), 5000);
    }
  };

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_auto] w-[250px] mx-2"
            >
              <CardComponent {...item} />
            </div>
          ))}
        </div>
      </div>

      {showButtons && (
        <div className="space-y-4 space-x-2">
          <Button onClick={scrollPrev} disabled={prevBtnDisabled}>
            <IoIosArrowBack size={30} />
          </Button>
          <Button onClick={scrollNext} disabled={nextBtnDisabled}>
            <IoIosArrowForward size={30} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;
