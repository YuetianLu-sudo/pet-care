"use client";

import { FormEvent, useState } from "react";

export default function BookingForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const owner = data.get("owner") || "你";
    const service = data.get("service") || "洗护";
    const date = data.get("date") || "所选日期";
    const time = data.get("time") || "所选时段";

    setMessage(
      `${owner}，已记录 ${date} ${time} 的${service}需求，请电话确认最终到店时间。`,
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
          期望时段
          <select name="time" required defaultValue="">
            <option value="">请选择</option>
            <option>10:00-12:00</option>
            <option>12:00-15:00</option>
            <option>15:00-18:00</option>
            <option>18:00-20:00</option>
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
