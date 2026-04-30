import { LitElement as u, html as r } from "lit";
import { property as p } from "lit/decorators.js";
var k = Object.defineProperty, g = (l, t, e, n) => {
  for (var i = void 0, s = l.length - 1, a; s >= 0; s--)
    (a = l[s]) && (i = a(t, e, i) || i);
  return i && k(t, e, i), i;
};
class _ extends u {
  createRenderRoot() {
    return this;
  }
  normalizeItem(t) {
    const e = {};
    return Object.keys(t).forEach((n) => {
      const i = n.includes(".") ? n.split(".").pop() : n;
      e[i] = t[n];
    }), e;
  }
  render() {
    var e, n, i;
    const t = ((e = this.config) == null ? void 0 : e.square_links_reihana) || [];
    return r`
      <style>
        .min-link-square {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .min-link-square {
            margin: 64px 0;
          }
        }

        .min-link-square__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .min-link-square__title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #000;
        }

        .min-link-square__subtitle {
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .min-link-square__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (min-width: 1024px) {
          .min-link-square__grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
          }
        }

        .min-link-square__item {
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 8px;
          text-decoration: none;
          color: inherit;
        }

        .min-link-square__image-wrapper {
          overflow: hidden;
        }

        .min-link-square__image-inner {
          overflow: hidden;
          aspect-ratio: 1 / 1;
        }

        .min-link-square__image-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .min-link-square__content {
          padding: 8px 0;
        }

        .min-link-square__title-text {
          display: block;
          font-size: 12px;
          font-weight: bold;
          color: #000;
        }

        @media (min-width: 1024px) {
          .min-link-square__title-text {
            font-size: 14px;
          }
        }

        .min-link-square__desc {
          display: block;
          font-size: 12px;
          opacity: 0.7;
          color: #555;
        }

        /* ================= DARK MODE ================= */

        [data-theme="dark"] .min-link-square__title {
          color: #fff;
        }

        [data-theme="dark"] .min-link-square__subtitle {
          color: #aaa;
        }

        [data-theme="dark"] .min-link-square__title-text {
          color: #fff;
        }

        [data-theme="dark"] .min-link-square__desc {
          color: #bbb;
        }
      </style>

      <section class="min-link-square">
        <div class="min-link-square__container">

          ${(n = this.config) != null && n.square_links_title ? r`<h2 class="min-link-square__title">
                ${this.config.square_links_title}
              </h2>` : ""}

          ${(i = this.config) != null && i.square_links_subtitle ? r`<p class="min-link-square__subtitle">
                ${this.config.square_links_subtitle}
              </p>` : ""}

          <div class="min-link-square__grid">

            ${t.map((s) => {
      const a = this.normalizeItem(s), c = a.square_image, o = a.square_title, m = a.square_text, d = a.square_url || "#";
      return r`
                <a href="${d}" class="min-link-square__item">

                  <div class="min-link-square__image-wrapper">
                    <div class="min-link-square__image-inner">
                      <img src="${c}" loading="lazy" />
                    </div>
                  </div>

                  ${o || m ? r`
                      <div class="min-link-square__content">
                        ${o ? r`<strong class="min-link-square__title-text">${o}</strong>` : ""}
                        ${m ? r`<span class="min-link-square__desc">${m}</span>` : ""}
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
g([
  p({ type: Object })
], _.prototype, "config");
typeof _ < "u" && _.registerSallaComponent("salla-min-links-square");
export {
  _ as default
};
