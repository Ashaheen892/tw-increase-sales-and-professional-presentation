import { LitElement as g, html as a } from "lit";
import { property as k } from "lit/decorators.js";
import { l as m } from "./localizedString-WeqHgpra.js";
var q = Object.defineProperty, f = (_, n, e, t) => {
  for (var i = void 0, r = _.length - 1, l; r >= 0; r--)
    (l = _[r]) && (i = l(n, e, i) || i);
  return i && q(n, e, i), i;
};
class d extends g {
  createRenderRoot() {
    return this;
  }
  normalizeItem(n) {
    const e = {};
    return Object.keys(n || {}).forEach((t) => {
      const i = t.includes(".") ? t.split(".").pop() : t;
      e[i] = n[t];
    }), e;
  }
  render() {
    var i, r, l;
    const n = (((i = this.config) == null ? void 0 : i.square_links_reihana) || []).map(
      (s) => this.normalizeItem(s)
    ), e = m(
      (r = this.config) == null ? void 0 : r.square_links_title,
      ""
    ), t = m(
      (l = this.config) == null ? void 0 : l.square_links_subtitle,
      ""
    );
    return a`
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

        [data-theme='dark'] .min-link-square__title {
          color: #fff;
        }

        [data-theme='dark'] .min-link-square__subtitle {
          color: #aaa;
        }

        [data-theme='dark'] .min-link-square__title-text {
          color: #fff;
        }

        [data-theme='dark'] .min-link-square__desc {
          color: #bbb;
        }
      </style>

      <section class="min-link-square">
        <div class="min-link-square__container">

          ${e.trim() ? a`
                <h2 class="min-link-square__title">
                  ${e}
                </h2>
              ` : ""}

          ${t.trim() ? a`
                <p class="min-link-square__subtitle">
                  ${t}
                </p>
              ` : ""}

          <div class="min-link-square__grid">

            ${n.map((s) => {
      const p = s.square_image, o = m(
        s.square_title,
        ""
      ), c = m(
        s.square_text,
        ""
      ), u = s.square_url || "#";
      return a`
                <a href="${u}" class="min-link-square__item">

                  <div class="min-link-square__image-wrapper">
                    <div class="min-link-square__image-inner">
                      <img
                        src="${p}"
                        loading="lazy"
                        alt="${o}"
                      />
                    </div>
                  </div>

                  ${(o || "").trim() || (c || "").trim() ? a`
                        <div class="min-link-square__content">

                          ${(o || "").trim() ? a`
                                <strong class="min-link-square__title-text">
                                  ${o}
                                </strong>
                              ` : ""}

                          ${(c || "").trim() ? a`
                                <span class="min-link-square__desc">
                                  ${c}
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
f([
  k({ type: Object })
], d.prototype, "config");
typeof d < "u" && d.registerSallaComponent("salla-min-links-square");
export {
  d as default
};
