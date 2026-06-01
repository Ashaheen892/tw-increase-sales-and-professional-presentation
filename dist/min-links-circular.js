import { LitElement as g, html as l } from "lit";
import { property as k } from "lit/decorators.js";
import { l as s } from "./localizedString-WeqHgpra.js";
var f = Object.defineProperty, x = (m, n, r, t) => {
  for (var i = void 0, c = m.length - 1, a; c >= 0; c--)
    (a = m[c]) && (i = a(n, r, i) || i);
  return i && f(n, r, i), i;
};
class d extends g {
  createRenderRoot() {
    return this;
  }
  normalizeItem(n) {
    const r = {};
    return Object.keys(n || {}).forEach((t) => {
      const i = t.includes(".") ? t.split(".").pop() : t;
      r[i] = n[t];
    }), r;
  }
  render() {
    var i, c, a;
    const n = (((i = this.config) == null ? void 0 : i.circular_links_reihana) || []).map(
      (e) => this.normalizeItem(e)
    ), r = s(
      (c = this.config) == null ? void 0 : c.circular_links_title,
      ""
    ), t = s(
      (a = this.config) == null ? void 0 : a.circular_links_subtitle,
      ""
    );
    return l`
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

        [data-theme='dark'] .min-link-circular__title {
          color: #fff;
        }

        [data-theme='dark'] .min-link-circular__subtitle {
          color: #aaa;
        }

        [data-theme='dark'] .min-link-circular__title-text {
          color: #fff;
        }

        [data-theme='dark'] .min-link-circular__desc {
          color: #bbb;
        }
      </style>

      <section class="min-link-circular">
        <div class="min-link-circular__container">

          ${r.trim() ? l`
                <h2 class="min-link-circular__title">
                  ${r}
                </h2>
              ` : ""}

          ${t.trim() ? l`
                <p class="min-link-circular__subtitle">
                  ${t}
                </p>
              ` : ""}

          <div class="min-link-circular__grid">

            ${n.map((e) => {
      const p = e.circular_image, o = s(
        e.circular_title,
        ""
      ), _ = s(
        e.circular_text,
        ""
      ), u = e.circular_url || "#";
      return l`
                <a href="${u}" class="min-link-circular__item">

                  <div class="min-link-circular__image-wrapper">
                    <div class="min-link-circular__image-inner">
                      <img
                        src="${p}"
                        loading="lazy"
                        alt="${o}"
                      />
                    </div>
                  </div>

                  ${o.trim() || _.trim() ? l`
                        <div class="min-link-circular__content">

                          ${o.trim() ? l`
                                <strong class="min-link-circular__title-text">
                                  ${o}
                                </strong>
                              ` : ""}

                          ${_.trim() ? l`
                                <span class="min-link-circular__desc">
                                  ${_}
                                </span>
                              ` : ""}

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
x([
  k({ type: Object })
], d.prototype, "config");
typeof d < "u" && d.registerSallaComponent("salla-min-links-circular");
export {
  d as default
};
