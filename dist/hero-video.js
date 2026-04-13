import { LitElement as x, css as m, html as a } from "lit";
import { property as y } from "lit/decorators.js";
var $ = Object.defineProperty, w = (d, t, e, s) => {
  for (var o = void 0, i = d.length - 1, r; i >= 0; i--)
    (r = d[i]) && (o = r(t, e, o) || o);
  return o && $(t, e, o), o;
};
const l = class l extends x {
  // ✅ helper لتحويل القيم (يدعم object / number)
  getValue(t, e = 0) {
    return typeof t == "object" ? (t == null ? void 0 : t.value) ?? e : t ?? e;
  }
  // ✅ تجهيز البيانات
  get data() {
    var s, o, i, r, c, p, v, h, g, f, b, _, u;
    const t = (s = this.config) == null ? void 0 : s.hero_video_view_mob;
    let e = "hero_video_rectangle";
    return Array.isArray(t) ? e = (o = t[0]) == null ? void 0 : o.value : typeof t == "object" ? e = t == null ? void 0 : t.value : typeof t == "string" && (e = t), {
      video: (i = this.config) == null ? void 0 : i.hero_video_url,
      title: (r = this.config) == null ? void 0 : r.hero_video_title,
      text: (c = this.config) == null ? void 0 : c.hero_video_text,
      btnText: (p = this.config) == null ? void 0 : p.hero_video_btnText,
      btnUrl: (v = this.config) == null ? void 0 : v.hero_video_btn_url,
      overlay: this.getValue((h = this.config) == null ? void 0 : h.hero_video_overlay, 6),
      overlayColor: ((g = this.config) == null ? void 0 : g.hero_video_overlay_color) || "#000",
      btnTextColor: ((f = this.config) == null ? void 0 : f.hero_video_textColor) || "#000",
      btnBg: ((b = this.config) == null ? void 0 : b.hero_video_textBgColor) || "#fff",
      // ✅ المسافات (تم إصلاحها هنا)
      spaceTop: this.getValue((_ = this.config) == null ? void 0 : _.hero_video_higher_distance, 0),
      spaceMobile: this.getValue((u = this.config) == null ? void 0 : u.hero_video_distance_mob, 0),
      view: e
    };
  }
  // ✅ نفس منطق Twig
  getRatioClass(t) {
    switch (t) {
      case "hero_video_rectangle_tiktok":
        return "ratio-9-16";
      case "hero_video_rectangle_video":
        return "ratio-wide";
      default:
        return "ratio-3-4";
    }
  }
  render() {
    var e;
    const t = this.data;
    return a`
      <div
        class="wrapper"
        style="
          --mt: ${t.spaceMobile}px;
          --mt-lg: ${t.spaceTop}px;
        "
      >
        <div class="hero ${this.getRatioClass(t.view)}">
          ${t.video ? a`
                <video
                  src="${t.video}"
                  autoplay
                  muted
                  loop
                  playsinline
                ></video>
              ` : ""}

          <!-- overlay -->
          <div
            class="overlay-bg"
            style="
              background: ${t.overlayColor};
              opacity: ${t.overlay / 10};
            "
          ></div>

          <!-- content -->
          <div class="overlay-content">
            ${t.title ? a`<div class="title">${t.title}</div>` : ""}

            ${t.text ? a`<div class="text">${t.text}</div>` : ""}

            ${t.btnText ? a`
                    <a href="${((e = t.btnUrl) == null ? void 0 : e.value) || "#"}">
                      <button
                        class="btn"
                        style="
                          background:${t.btnBg};
                          color:${t.btnTextColor};
                        "
                      >
                        ${t.btnText}
                      </button>
                    </a>
                  ` : ""}
          </div>
        </div>
      </div>
    `;
  }
};
l.styles = m`
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
let n = l;
w([
  y({ type: Object })
], n.prototype, "config");
typeof n < "u" && n.registerSallaComponent("salla-hero-video");
export {
  n as default
};
