"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/assets/store-reception.png",
    alt: "高端宠物洗护店的接待等候区，暖木、绿墙、玻璃隔断和专业洗护空间",
    caption: "前厅接待区",
  },
  {
    src: "/assets/store-bathing.png",
    alt: "高端宠物洗护店的专业沐浴区，不锈钢洗护台、毛巾柜和玻璃隔断",
    caption: "洗护沐浴区",
  },
  {
    src: "/assets/store-styling.png",
    alt: "高端宠物洗护店的吹干造型区，专业美容台、吹风设备和整洁工具墙",
    caption: "吹干造型区",
  },
];

export default function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="photo-carousel"
      data-carousel
      role="group"
      aria-label="宠物洗护店内环境轮播图"
    >
      {slides.map((slide, index) => (
        <figure
          className={`carousel-slide${index === activeIndex ? " is-active" : ""}`}
          key={slide.src}
        >
          <img src={slide.src} alt={slide.alt} />
          <figcaption className="carousel-caption">{slide.caption}</figcaption>
        </figure>
      ))}
      <div className="carousel-dots" aria-label="切换店内环境图片">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              className={`carousel-dot${isActive ? " is-active" : ""}`}
              type="button"
              aria-label={`查看${slide.caption}`}
              aria-current={isActive ? "true" : "false"}
              key={slide.src}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
