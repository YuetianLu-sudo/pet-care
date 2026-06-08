import BookingForm from "../components/BookingForm";
import PhotoCarousel from "../components/PhotoCarousel";
import ReviewCarousel from "../components/ReviewCarousel";

export default function Home() {
  return (
    <>
      <header className="site-header">
          <nav className="nav" aria-label="主导航">
            <a className="brand" href="#top" aria-label="晴爪 Pawlish 首页">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M7.5 10.2c1 0 1.8-.9 1.8-2s-.8-2-1.8-2-1.8.9-1.8 2 .8 2 1.8 2Zm9 0c1 0 1.8-.9 1.8-2s-.8-2-1.8-2-1.8.9-1.8 2 .8 2 1.8 2Zm-8 8.1h7c1.7 0 2.6-1.9 1.5-3.2l-2.5-3a3.1 3.1 0 0 0-4.9 0l-2.5 3c-1.1 1.3-.2 3.2 1.5 3.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.7 14c1 0 1.7-.8 1.7-1.9s-.8-1.9-1.7-1.9S3 11.1 3 12.1 3.8 14 4.7 14Zm14.6 0c1 0 1.7-.8 1.7-1.9s-.8-1.9-1.7-1.9-1.7.8-1.7 1.9.8 1.9 1.7 1.9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>
                <span className="brand-name">晴爪 Pawlish</span>
                <span className="brand-sub">宠物洗护与造型</span>
              </span>
            </a>
      
            <div className="nav-links">
              <a href="#services">服务</a>
              <a href="#pricing">套餐</a>
              <a href="#process">流程</a>
              <a href="#reviews">评价</a>
              <a href="#booking">预约</a>
            </div>
      
            <a className="btn btn-primary" href="#booking">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 2v4m8-4v4M4.5 9.5h15M6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              预约
            </a>
          </nav>
        </header>
      
        <main id="top">
          <section className="hero" aria-label="晴爪 Pawlish 宠物洗护馆">
            <div className="hero-inner">
              <div className="hero-copy">
                <p className="eyebrow">猫犬分区护理 · 一宠一巾一消毒</p>
                <h1>晴爪 Pawlish</h1>
                <p className="hero-lead">温和洗护、精致修剪、皮毛护理和幼宠适应训练。让每一次到店都像一次干净、安静、被认真照顾的小假期。</p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#booking">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M8 2v4m8-4v4M4.5 9.5h15M9 15l2 2 4-5M6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    立即预约
                  </a>
                  <a className="btn btn-secondary" href="#pricing">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M7 7h10M7 12h10M7 17h6M5.5 3.5h13A1.5 1.5 0 0 1 20 5v14a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19V5a1.5 1.5 0 0 1 1.5-1.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    查看套餐
                  </a>
                </div>
                <div className="hero-facts" aria-label="门店亮点">
                  <div className="fact">
                    <strong>45分钟起</strong>
                    <span>小型犬基础洗护</span>
                  </div>
                  <div className="fact">
                    <strong>猫犬分区</strong>
                    <span>减少气味与应激</span>
                  </div>
                  <div className="fact">
                    <strong>透明护理</strong>
                    <span>到店确认项目与价格</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="booking-strip" aria-label="快捷预约信息">
            <div className="section-inner">
              <div className="strip-title">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M9.5 10.5 11.4 12l3.1-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                今天可约洗护、修剪、除浮毛
              </div>
              <div className="strip-info">
                <span className="pill">营业 10:00-20:00</span>
                <span className="pill">宜川路街道 · 陕西北路1620号</span>
                <span className="pill">建议提前 1 天预约</span>
                <span className="pill">到店前 4 小时少量进食</span>
              </div>
              <a className="btn btn-primary" href="tel:13800005200">电话咨询</a>
            </div>
          </section>
      
          <section id="services">
            <div className="section-inner">
              <div className="section-head">
                <div>
                  <p className="section-kicker">Services</p>
                  <h2>按性格和毛况定制洗护</h2>
                </div>
                <p className="section-note">每只宠物到店都会先做基础观察，再确认洗剂、吹干方式和是否需要额外护理。</p>
              </div>
      
              <div className="services-grid">
                <article className="service-card">
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 13.5c2.2-1 3.7-3.1 4-5.5h8c.3 2.4 1.8 4.5 4 5.5M6 13v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-4M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>基础洗护</h3>
                  <p>温和清洁、耳眼护理、指甲修整、脚底毛和卫生区打理。</p>
                  <ul className="service-list">
                    <li>低刺激洗剂</li>
                    <li>恒温吹干</li>
                    <li>全身梳通</li>
                  </ul>
                </article>
      
                <article className="service-card">
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="m7 17 9.5-9.5a2.1 2.1 0 0 1 3 3L10 20H6v-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 9 5 4m5 11-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>造型修剪</h3>
                  <p>依据品种、脸型和日常打理习惯，修出自然耐看的线条。</p>
                  <ul className="service-list">
                    <li>泰迪熊头</li>
                    <li>夏季短修</li>
                    <li>局部精修</li>
                  </ul>
                </article>
      
                <article className="service-card">
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M6 13c0-4 3-8 6-10 3 2 6 6 6 10a6 6 0 1 1-12 0Z" stroke="currentColor" strokeWidth="1.8"/>
                      <path d="M9.5 13.5c1.5.9 3.5.9 5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>皮毛护理</h3>
                  <p>针对打结、换毛、干燥和异味，选择深层梳理与滋养护理。</p>
                  <ul className="service-list">
                    <li>除浮毛</li>
                    <li>开结护理</li>
                    <li>保湿柔顺</li>
                  </ul>
                </article>
      
                <article className="service-card">
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M10.2 18.5c-4.2-.2-7.2-2.8-7.2-6.2C3 8.7 6.6 6 12 6s9 2.7 9 6.3c0 3.4-3 6-7.2 6.2L12 21l-1.8-2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                      <path d="M8.5 12h.01M15.5 12h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>幼宠适应</h3>
                  <p>用更短流程和更低噪音，让幼宠逐步熟悉洗澡、吹风和触碰。</p>
                  <ul className="service-list">
                    <li>慢速引导</li>
                    <li>陪伴式吹干</li>
                    <li>护理记录</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>
      
          <section className="price-section" id="pricing">
            <div className="section-inner">
              <div className="section-head">
                <div>
                  <p className="section-kicker">Packages</p>
                  <h2>常用套餐</h2>
                </div>
                <p className="section-note">价格会根据体型、毛量、打结程度和护理难度微调，到店前会先沟通确认。</p>
              </div>
      
              <div className="prices">
                <article className="price-card">
                  <span className="tag">日常清爽</span>
                  <h3>基础洗护</h3>
                  <div className="price"><span>¥128</span><span>起</span></div>
                  <p>适合日常清洁、轻微异味、短毛或规律洗护的宠物。</p>
                  <ul>
                    <li><span className="check">✓</span>洗澡、吹干、梳理</li>
                    <li><span className="check">✓</span>耳眼清洁与指甲修剪</li>
                    <li><span className="check">✓</span>脚底毛和卫生区清理</li>
                  </ul>
                  <a className="btn btn-secondary" href="#booking">选择套餐</a>
                </article>
      
                <article className="price-card featured">
                  <span className="tag">推荐选择</span>
                  <h3>洗护加精修</h3>
                  <div className="price"><span>¥268</span><span>起</span></div>
                  <p>适合需要脸部、身体线条、脚型或尾巴造型的犬猫。</p>
                  <ul>
                    <li><span className="check">✓</span>包含基础洗护全部项目</li>
                    <li><span className="check">✓</span>全身造型或局部精修</li>
                    <li><span className="check">✓</span>护理前后照片记录</li>
                  </ul>
                  <a className="btn btn-primary" href="#booking">预约这个</a>
                </article>
      
                <article className="price-card">
                  <span className="tag">毛量管理</span>
                  <h3>深层护理</h3>
                  <div className="price"><span>¥198</span><span>起</span></div>
                  <p>适合换毛期、毛发干燥、轻中度打结或需要蓬松感的宠物。</p>
                  <ul>
                    <li><span className="check">✓</span>除浮毛与开结护理</li>
                    <li><span className="check">✓</span>保湿滋养护理</li>
                    <li><span className="check">✓</span>皮毛状态建议</li>
                  </ul>
                  <a className="btn btn-secondary" href="#booking">选择套餐</a>
                </article>
              </div>
            </div>
          </section>
      
          <section id="process">
            <div className="section-inner process-layout">
              <PhotoCarousel />
              <div>
                <p className="section-kicker">Visit Flow</p>
                <h2>到店后，我们这样照顾它</h2>
                <div className="steps">
                  <article className="step">
                    <div className="step-num">01</div>
                    <div>
                      <h3>先观察，再确认</h3>
                      <p>了解宠物性格、皮肤状态、毛结位置和主人期望造型。</p>
                    </div>
                  </article>
                  <article className="step">
                    <div className="step-num">02</div>
                    <div>
                      <h3>分段洗护</h3>
                      <p>按宠物耐受度安排清洁、梳理和吹干，中途持续观察情绪。</p>
                    </div>
                  </article>
                  <article className="step">
                    <div className="step-num">03</div>
                    <div>
                      <h3>精修和检查</h3>
                      <p>完成造型细节，检查耳眼、脚底、指甲和毛发蓬松度。</p>
                    </div>
                  </article>
                  <article className="step">
                    <div className="step-num">04</div>
                    <div>
                      <h3>交接护理记录</h3>
                      <p>说明本次护理情况，并给出回家梳毛、洗护间隔建议。</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
      
          <section id="reviews">
            <div className="section-inner">
              <div className="section-head">
                <div>
                  <p className="section-kicker">Reviews</p>
                  <h2>主人们的反馈</h2>
                </div>
                <p className="section-note">我们更在意的是宠物愿不愿意第二次轻松走进来。</p>
              </div>
      
              <ReviewCarousel />
            </div>
          </section>
      
          <section className="booking" id="booking">
            <div className="section-inner booking-layout">
              <div className="booking-details">
                <p className="section-kicker">Booking</p>
                <h2>预约洗护时间</h2>
                <p className="section-note">提交后页面会记录你的选择。实际预约请通过电话或门店消息确认具体时段。</p>
      
                <div className="contact-box">
                  <a className="contact-line" href="tel:13800005200">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6.6 3.8 9 3.2l2.4 5-1.8 1.4a11.4 11.4 0 0 0 4.8 4.8l1.4-1.8 5 2.4-.6 2.4c-.3 1.1-1.3 1.8-2.4 1.7C9.7 18.5 4.5 13.3 3.9 5.2c-.1-1.1.7-2.1 1.7-2.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span><strong>138-0000-5200</strong><span>电话咨询与改约</span></span>
                  </a>
                  <a className="contact-line" href="https://map.baidu.com/search/上海市宜川路街道陕西北路1620号" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8"/>
                      <path d="M9.5 10.5 11.4 12l3.1-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span><strong>晴爪 Pawlish 宠物洗护馆</strong><span>上海市宜川路街道陕西北路1620号</span></span>
                  </a>
                  <div className="contact-line">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span><strong>周一至周日 10:00-20:00</strong><span>节假日建议提前预约</span></span>
                  </div>
                </div>
              </div>
              <a className="store-map" href="https://map.baidu.com/search/上海市宜川路街道陕西北路1620号" target="_blank" rel="noopener" aria-label="晴爪 Pawlish 宠物洗护馆位置图，上海市宜川路街道陕西北路1620号">
                <img src="/assets/pawlish-store-map.png" alt="晴爪 Pawlish 宠物洗护馆周边可爱风格位置示意图" />
                <span className="map-label">
                  <strong>晴爪 Pawlish 在这里</strong>
                  <span>上海市宜川路街道陕西北路1620号</span>
                </span>
              </a>
              <BookingForm />
            </div>
          </section>
        </main>
      
        <footer className="site-footer">
          <div className="footer-inner">
            <span><strong>晴爪 Pawlish</strong> · 宠物洗护与造型</span>
            <span>一宠一巾一消毒 · 猫犬分区 · 温和护理</span>
          </div>
        </footer>
    </>
  );
}
