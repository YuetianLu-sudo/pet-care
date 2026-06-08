"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    quote: "我家小狗很怕吹风，店员会停下来安抚，最后出来蓬松又不紧张。",
    owner: "可乐的主人",
    detail: "胆小比熊 · 基础洗护",
  },
  {
    quote: "猫咪洗护很专业，全程分区，回家没有香精味，毛也顺了很多。",
    owner: "奶盖的主人",
    detail: "长毛猫 · 深层护理",
  },
  {
    quote: "修剪前会认真沟通脸型和长度，不会一刀切，照片记录也很贴心。",
    owner: "芝麻的主人",
    detail: "泰迪 · 洗护加精修",
  },
  {
    quote: "第一次带幼犬洗澡，本来担心会害怕，护理师一直放慢节奏，接回家状态很放松。",
    owner: "团子的主人",
    detail: "幼犬 · 适应洗护",
  },
  {
    quote: "换毛季梳出了好多浮毛，家里沙发终于轻松很多，护理建议也讲得很清楚。",
    owner: "豆包的主人",
    detail: "柯基 · 除浮毛护理",
  },
  {
    quote: "店里干净、没有混杂气味，猫犬分区让我比较安心，预约沟通也很顺。",
    owner: "栗子的主人",
    detail: "英短 · 日常洗护",
  },
];

const reviewPages = [
  reviews.slice(0, 3),
  reviews.slice(3, 6),
];

export default function ReviewCarousel() {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePage((current) => (current + 1) % reviewPages.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [activePage]);

  const showPage = (page: number) => {
    setActivePage((page + reviewPages.length) % reviewPages.length);
  };

  return (
    <div className="reviews-carousel" role="group" aria-label="客户评价轮播">
      <div className="review-viewport" aria-live="polite">
        {reviewPages.map((page, pageIndex) => {
          const isActive = pageIndex === activePage;

          return (
            <div
              className={`review-page${isActive ? " is-active" : ""}`}
              aria-hidden={isActive ? "false" : "true"}
              key={pageIndex}
            >
              {page.map((review) => (
                <article className="review-card" key={review.owner}>
                  <div className="stars" aria-label="五星评价">
                    ★★★★★
                  </div>
                  <blockquote>{review.quote}</blockquote>
                  <div className="reviewer">
                    <strong>{review.owner}</strong>
                    <span>{review.detail}</span>
                  </div>
                </article>
              ))}
            </div>
          );
        })}
      </div>

      <div className="review-controls" aria-label="切换客户评价">
        <button
          className="review-arrow"
          type="button"
          aria-label="上一组评价"
          onClick={() => showPage(activePage - 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m14.5 5-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="review-dots">
          {reviewPages.map((_, pageIndex) => {
            const isActive = pageIndex === activePage;

            return (
              <button
                className={`review-dot${isActive ? " is-active" : ""}`}
                type="button"
                aria-label={`查看第 ${pageIndex + 1} 组评价`}
                aria-current={isActive ? "true" : "false"}
                key={pageIndex}
                onClick={() => showPage(pageIndex)}
              />
            );
          })}
        </div>

        <button
          className="review-arrow"
          type="button"
          aria-label="下一组评价"
          onClick={() => showPage(activePage + 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m9.5 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
