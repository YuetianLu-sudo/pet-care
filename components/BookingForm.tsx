"use client";

import { FormEvent, useState } from "react";

const arrivalTimes = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

export default function BookingForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const owner = data.get("owner") || "你";
    const service = data.get("service") || "洗护";
    const date = data.get("date") || "所选日期";
    const arrivalTime = data.get("arrivalTime") || "所选到店时间";

    setMessage(
      `${owner}，已记录 ${date} ${arrivalTime} 到店的${service}需求，请电话确认最终安排。`,
    );
    form.reset();
  }

  return (
    <form className="booking-form" id="bookingForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          主人姓名
          <input name="owner" type="text" placeholder="例如：林小姐" required />
        </label>
        <label>
          联系电话
          <input name="phone" type="tel" placeholder="138 0000 5200" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          宠物类型
          <select name="pet" required defaultValue="">
            <option value="">请选择</option>
            <option>小型犬</option>
            <option>中大型犬</option>
            <option>猫咪</option>
            <option>多只宠物</option>
          </select>
        </label>
        <label>
          预约项目
          <select name="service" required defaultValue="">
            <option value="">请选择</option>
            <option>基础洗护</option>
            <option>洗护加精修</option>
            <option>深层护理</option>
            <option>幼宠适应</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          期望日期
          <input name="date" type="date" required />
        </label>
        <label>
          期望到店时间
          <select name="arrivalTime" required defaultValue="">
            <option value="">请选择</option>
            {arrivalTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        备注
        <textarea
          name="note"
          placeholder="可以写宠物体重、毛况、是否怕水或怕吹风"
        />
      </label>
      <button className="btn btn-primary" type="submit">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 12.5 9 17 20 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        提交预约信息
      </button>
      <p className="form-message" id="formMessage" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
