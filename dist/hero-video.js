import { LitElement as x, css as y, html as a } from "lit";
import { property as w } from "lit/decorators.js";
import { l } from "./localizedString-WeqHgpra.js";
var C = Object.defineProperty, $ = (c, e, t, s) => {
  for (var o = void 0, i = c.length - 1, r; i >= 0; i--)
    (r = c[i]) && (o = r(e, t, o) || o);
  return o && C(e, t, o), o;
};
const d = class d extends x {
  constructor() {
    super(...arguments), this.handleLanguageChange = () => {
      this.requestUpdate();
    };
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener(
      "language-changed",
      this.handleLanguageChange
    );
  }
  disconnectedCallback() {
    window.removeEventListener(
      "language-changed",
      this.handleLanguageChange
    ), super.disconnectedCallback();
  }
  getValue(e, t = 0) {
    return typeof e == "object" ? (e == null ? void 0 : e.value) ?? t : e ?? t;
  }
  get data() {
    var s, o, i, r, h, g, p, v, f, u, b, _, m;
    const e = (s = this.config) == null ? void 0 : s.hero_video_view_mob;
    let t = "hero_video_rectangle";
    return Array.isArray(e) ? t = (o = e[0]) == null ? void 0 : o.value : typeof e == "object" ? t = e == null ? void 0 : e.value : typeof e == "string" && (t = e), {
      video: (i = this.config) == null ? void 0 : i.hero_video_url,
      title: l(
        (r = this.config) == null ? void 0 : r.hero_video_title,
        ""
      ),
      text: l(
        (h = this.config) == null ? void 0 : h.hero_video_text,
        ""
      ),
      btnText: l(
        (g = this.config) == null ? void 0 : g.hero_video_btnText,
        ""
      ),
      btnUrl: (p = this.config) == null ? void 0 : p.hero_video_btn_url,
      overlay: this.getValue(
        (v = this.config) == null ? void 0 : v.hero_video_overlay,
        6
      ),
      overlayColor: ((f = this.config) == null ? void 0 : f.hero_video_overlay_color) || "#000",
      btnTextColor: ((u = this.config) == null ? void 0 : u.hero_video_textColor) || "#000",
      btnBg: ((b = this.config) == null ? void 0 : b.hero_video_textBgColor) || "#fff",
      spaceTop: this.getValue(
        (_ = this.config) == null ? void 0 : _.hero_video_higher_distance,
        0
      ),
      spaceMobile: this.getValue(
        (m = this.config) == null ? void 0 : m.hero_video_distance_mob,
        0
      ),
      view: t
    };
  }
  getRatioClass(e) {
    switch (e) {
      case "hero_video_rectangle_tiktok":
        return "ratio-9-16";
      case "hero_video_rectangle_video":
        return "ratio-wide";
      default:
        return "ratio-3-4";
    }
  }
  render() {
    var t;
    const e = this.data;
    return a`
    <div
      class="wrapper"
      style="
        --mt:${e.spaceMobile}px;
        --mt-lg:${e.spaceTop}px;
      "
    >
      <div class="hero ${this.getRatioClass(e.view)}">
        ${e.video ? a`
              <video
                src="${e.video}"
                autoplay
                muted
                loop
                playsinline
              ></video>
            ` : ""}

        <div
          class="overlay-bg"
          style="
            background:${e.overlayColor};
            opacity:${e.overlay / 10};
          "
        ></div>

        <div class="overlay-content">
          ${e.title ? a`
                <div class="title">
                  ${e.title}
                </div>
              ` : ""}

          ${e.text ? a`
                <div class="text">
                  ${e.text}
                </div>
              ` : ""}

          ${e.btnText ? a`
                <a href="${((t = e.btnUrl) == null ? void 0 : t.value) || "#"}">
                  <button
                    class="btn"
                    style="
                      background:${e.btnBg};
                      color:${e.btnTextColor};
                    "
                  >
                    ${e.btnText}
                  </button>
                </a>
              ` : ""}
        </div>
      </div>
    </div>
  `;
  }
};
d.styles = y`
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
let n = d;
$([
  w({ type: Object })
], n.prototype, "config");
typeof n < "u" && n.registerSallaComponent("salla-hero-video");
export {
  n as default
};
