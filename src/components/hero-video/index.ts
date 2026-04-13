import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class SajiHeroVideo extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  // ✅ helper لتحويل القيم (يدعم object / number)
  getValue(val: any, fallback = 0) {
    if (typeof val === 'object') return val?.value ?? fallback;
    return val ?? fallback;
  }

  // ✅ تجهيز البيانات
  get data() {
    const viewRaw = this.config?.hero_video_view_mob;

    let view = 'hero_video_rectangle';

    if (Array.isArray(viewRaw)) {
      view = viewRaw[0]?.value;
    } else if (typeof viewRaw === 'object') {
      view = viewRaw?.value;
    } else if (typeof viewRaw === 'string') {
      view = viewRaw;
    }

    return {
      video: this.config?.hero_video_url,
      title: this.config?.hero_video_title,
      text: this.config?.hero_video_text,
      btnText: this.config?.hero_video_btnText,
      btnUrl: this.config?.hero_video_btn_url,

      overlay: this.getValue(this.config?.hero_video_overlay, 6),
      overlayColor: this.config?.hero_video_overlay_color || '#000',

      btnTextColor: this.config?.hero_video_textColor || '#000',
      btnBg: this.config?.hero_video_textBgColor || '#fff',

      // ✅ المسافات (تم إصلاحها هنا)
      spaceTop: this.getValue(this.config?.hero_video_higher_distance, 0),
      spaceMobile: this.getValue(this.config?.hero_video_distance_mob, 0),

      view,
    };
  }

  // ✅ نفس منطق Twig
  getRatioClass(view: string) {
    switch (view) {
      case 'hero_video_rectangle_tiktok':
        return 'ratio-9-16';
      case 'hero_video_rectangle_video':
        return 'ratio-wide';
      default:
        return 'ratio-3-4';
    }
  }

  static styles = css`
    :host {
      display: block;
    }

    .wrapper {
      margin-top: var(--mt);
      margin-bottom: var(--mt);
    }

    @media (min-width: 1024px) {
      .wrapper {
        margin-top: var(--mt-lg);
        margin-bottom: var(--mt-lg);
      }
    }

    .hero {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay-bg {
      position: absolute;
      inset: 0;
      z-index: 1;
    }

    .overlay-content {
      position: absolute;
      inset: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      text-align: center;
    }

    .title {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 10px;
      line-height: 1.4;
    }

    .text {
      color: #fff;
      max-width: 500px;
      margin-bottom: 15px;
      line-height: 1.6;
    }

    .btn {
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      border: none;
      transition: 0.3s;
    }

    .btn:hover {
      opacity: 0.9;
    }

    /* ratios */
    .ratio-3-4 {
      aspect-ratio: 3 / 4;
    }

    .ratio-9-16 {
      aspect-ratio: 9 / 16;
    }

    .ratio-wide {
      aspect-ratio: 16 / 9;
    }

    @media (min-width: 1024px) {
      .ratio-3-4,
      .ratio-9-16,
      .ratio-wide {
        aspect-ratio: 16 / 9;
      }
    }
  `;

  render() {
    const d = this.data;

    return html`
      <div
        class="wrapper"
        style="
          --mt: ${d.spaceMobile}px;
          --mt-lg: ${d.spaceTop}px;
        "
      >
        <div class="hero ${this.getRatioClass(d.view)}">
          ${
            d.video
              ? html`
                <video
                  src="${d.video}"
                  autoplay
                  muted
                  loop
                  playsinline
                ></video>
              `
              : ''
          }

          <!-- overlay -->
          <div
            class="overlay-bg"
            style="
              background: ${d.overlayColor};
              opacity: ${d.overlay / 10};
            "
          ></div>

          <!-- content -->
          <div class="overlay-content">
            ${d.title ? html`<div class="title">${d.title}</div>` : ''}

            ${d.text ? html`<div class="text">${d.text}</div>` : ''}

            ${
              d.btnText
                ? html`
                    <a href="${d.btnUrl?.value || '#'}">
                      <button
                        class="btn"
                        style="
                          background:${d.btnBg};
                          color:${d.btnTextColor};
                        "
                      >
                        ${d.btnText}
                      </button>
                    </a>
                  `
                : ''
            }
          </div>
        </div>
      </div>
    `;
  }
}
