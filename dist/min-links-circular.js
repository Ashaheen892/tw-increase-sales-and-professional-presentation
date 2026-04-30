import { LitElement as u, html as c } from "lit";
import { property as p } from "lit/decorators.js";
var g = Object.defineProperty, k = (a, n, r, t) => {
  for (var i = void 0, e = a.length - 1, l; e >= 0; e--)
    (l = a[e]) && (i = l(n, r, i) || i);
  return i && g(n, r, i), i;
};
class m extends u {
  createRenderRoot() {
    return this;
  }
  normalizeItem(n) {
    const r = {};
    return Object.keys(n).forEach((t) => {
      const i = t.includes(".") ? t.split(".").pop() : t;
      r[i] = n[t];
    }), r;
  }
  render() {
    var r, t, i;
    const n = ((r = this.config) == null ? void 0 : r.circular_links_reihana) || [];
    return c`
      <style>
        .min-link-circular {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .min-link-circular {
            margin: 64px 0;
          }
        }

        .min-link-circular__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .min-link-circular__title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #000;
        }

        .min-link-circular__subtitle {
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .min-link-circular__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (min-width: 1024px) {
          .min-link-circular__grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
          }
        }

        .min-link-circular__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          text-decoration: none;
          color: inherit;
        }

        .min-link-circular__image-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .min-link-circular__image-inner {
          overflow: hidden;
          border-radius: 50%;
          aspect-ratio: 1 / 1;
          width: 100%;
        }

        .min-link-circular__image-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .min-link-circular__content {
          padding: 4px 0;
        }

        .min-link-circular__title-text {
          display: block;
          font-size: 12px;
          font-weight: bold;
          color: #000;
        }

        @media (min-width: 1024px) {
          .min-link-circular__title-text {
            font-size: 14px;
          }
        }

        .min-link-circular__desc {
          display: block;
          font-size: 12px;
          opacity: 0.7;
          color: #555;
        }

        /* ================= DARK MODE ================= */

        [data-theme="dark"] .min-link-circular__title {
          color: #fff;
        }

        [data-theme="dark"] .min-link-circular__subtitle {
          color: #aaa;
        }

        [data-theme="dark"] .min-link-circular__title-text {
          color: #fff;
        }

        [data-theme="dark"] .min-link-circular__desc {
          color: #bbb;
        }
      </style>

      <section class="min-link-circular">
        <div class="min-link-circular__container">

          ${(t = this.config) != null && t.circular_links_title ? c`
                <h2 class="min-link-circular__title">
                  ${this.config.circular_links_title}
                </h2>
              ` : ""}

          ${(i = this.config) != null && i.circular_links_subtitle ? c`
                <p class="min-link-circular__subtitle">
                  ${this.config.circular_links_subtitle}
                </p>
              ` : ""}

          <div class="min-link-circular__grid">

            ${n.map((e) => {
      const l = this.normalizeItem(e), _ = l.circular_image, o = l.circular_title, s = l.circular_text, d = l.circular_url || "#";
      return c`
                <a href="${d}" class="min-link-circular__item">

                  <div class="min-link-circular__image-wrapper">
                    <div class="min-link-circular__image-inner">
                      <img src="${_}" loading="lazy" />
                    </div>
                  </div>

                  ${o || s ? c`
                        <div class="min-link-circular__content">
                          ${o ? c`<strong class="min-link-circular__title-text">${o}</strong>` : ""}
                          ${s ? c`<span class="min-link-circular__desc">${s}</span>` : ""}
                        </div>
                      ` : ""}

                </a>
              `;
    })}

          </div>

        </div>
      </section>
    `;
  }
}
k([
  p({ type: Object })
], m.prototype, "config");
typeof m < "u" && m.registerSallaComponent("salla-min-links-circular");
export {
  m as default
};
