import { LitElement as d, html as t } from "lit";
import { property as u } from "lit/decorators.js";
var p = Object.defineProperty, k = (l, i, a, c) => {
  for (var n = void 0, r = l.length - 1, e; r >= 0; r--)
    (e = l[r]) && (n = e(i, a, n) || n);
  return n && p(i, a, n), n;
};
class o extends d {
  createRenderRoot() {
    return this;
  }
  getItems() {
    var i;
    return ((i = this.config) == null ? void 0 : i.rectangular_links) || [];
  }
  render() {
    var a, c;
    const i = this.getItems();
    return i.length ? t`
      <style>
        .min-link-rectangular {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .min-link-rectangular {
            margin: 64px 0;
          }
        }

        .min-link-rectangular__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .min-link-rectangular__title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #000;
        }

        .min-link-rectangular__subtitle {
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .min-link-rectangular__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (min-width: 1024px) {
          .min-link-rectangular__grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
          }
        }

        .min-link-rectangular__item {
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 8px;
          text-decoration: none;
          color: inherit;
        }

        .min-link-rectangular__image-wrapper {
          overflow: hidden;
        }

        .min-link-rectangular__image-wrapper--rounded {
          border-radius: 12px;
        }

        .min-link-rectangular__image-inner {
          overflow: hidden;
          aspect-ratio: 3 / 4;
        }

        .min-link-rectangular__image-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .min-link-rectangular__content {
          padding: 8px 0;
        }

        .min-link-rectangular__title-text {
          display: block;
          font-size: 12px;
          font-weight: bold;
          color: #000;
        }

        @media (min-width: 1024px) {
          .min-link-rectangular__title-text {
            font-size: 14px;
          }
        }

        .min-link-rectangular__desc {
          display: block;
          font-size: 12px;
          opacity: 0.7;
          color: #555;
        }

        /* ================= DARK MODE ================= */

        [data-theme="dark"] .min-link-rectangular__title {
          color: #fff;
        }

        [data-theme="dark"] .min-link-rectangular__subtitle {
          color: #aaa;
        }

        [data-theme="dark"] .min-link-rectangular__title-text {
          color: #fff;
        }

        [data-theme="dark"] .min-link-rectangular__desc {
          color: #bbb;
        }
      </style>

      <section class="min-link-rectangular">
        <div class="min-link-rectangular__container">

          ${(a = this.config) != null && a.rectangular_links_title ? t`<h2 class="min-link-rectangular__title">
                ${this.config.rectangular_links_title}
              </h2>` : ""}

          ${(c = this.config) != null && c.rectangular_links_subtitle ? t`<p class="min-link-rectangular__subtitle">
                ${this.config.rectangular_links_subtitle}
              </p>` : ""}

          <div class="min-link-rectangular__grid">

            ${i.map((n) => {
      var s, m;
      const r = n.rectangular_image, e = n.rectangular_title, g = n.rectangular_text, _ = ((s = n.rectangular_url) == null ? void 0 : s.value) || "#";
      return t`
                <a href="${_}" class="min-link-rectangular__item">

                  <div class="min-link-rectangular__image-wrapper 
                    ${(m = this.config) != null && m.rectangular_links_rounded ? "min-link-rectangular__image-wrapper--rounded" : ""}">
                    
                    <div class="min-link-rectangular__image-inner">
                      <img src="${r}" loading="lazy" />
                    </div>
                  </div>

                  ${e || g ? t`
                      <div class="min-link-rectangular__content">
                        ${e ? t`<strong class="min-link-rectangular__title-text">${e}</strong>` : ""}
                        ${g ? t`<span class="min-link-rectangular__desc">${g}</span>` : ""}
                      </div>
                    ` : ""}

                </a>
              `;
    })}

          </div>

        </div>
      </section>
    ` : t`<div style="padding:20px">No items</div>`;
  }
}
k([
  u({ type: Object })
], o.prototype, "config");
typeof o < "u" && o.registerSallaComponent("salla-min-links-rectangular");
export {
  o as default
};
