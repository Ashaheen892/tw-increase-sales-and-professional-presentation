import { LitElement as p, html as r } from "lit";
import { property as k } from "lit/decorators.js";
import { l as o } from "./localizedString-WeqHgpra.js";
var f = Object.defineProperty, x = (m, n, i, a) => {
  for (var t = void 0, e = m.length - 1, l; e >= 0; e--)
    (l = m[e]) && (t = l(n, i, t) || t);
  return t && f(n, i, t), t;
};
class g extends p {
  createRenderRoot() {
    return this;
  }
  normalizeItem(n) {
    return Object.entries(n || {}).reduce(
      (i, [a, t]) => {
        const e = a.includes(".") ? a.split(".").pop() : a;
        return i[e] = t, i;
      },
      {}
    );
  }
  getItems() {
    var n;
    return (((n = this.config) == null ? void 0 : n.rectangular_links) || []).map(
      (i) => this.normalizeItem(i)
    );
  }
  render() {
    var t, e;
    const n = this.getItems(), i = o(
      (t = this.config) == null ? void 0 : t.rectangular_links_title,
      ""
    ), a = o(
      (e = this.config) == null ? void 0 : e.rectangular_links_subtitle,
      ""
    );
    return n.length ? r`
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

        [data-theme='dark'] .min-link-rectangular__title {
          color: #fff;
        }

        [data-theme='dark'] .min-link-rectangular__subtitle {
          color: #aaa;
        }

        [data-theme='dark'] .min-link-rectangular__title-text {
          color: #fff;
        }

        [data-theme='dark'] .min-link-rectangular__desc {
          color: #bbb;
        }
      </style>

      <section class="min-link-rectangular">
        <div class="min-link-rectangular__container">

          ${i.trim() ? r`
                <h2 class="min-link-rectangular__title">
                  ${i}
                </h2>
              ` : ""}

          ${a.trim() ? r`
                <p class="min-link-rectangular__subtitle">
                  ${a}
                </p>
              ` : ""}

          <div class="min-link-rectangular__grid">

            ${n.map((l) => {
      var d;
      const _ = l.rectangular_image, c = o(
        l.rectangular_title,
        ""
      ), s = o(
        l.rectangular_text,
        ""
      ), u = l.rectangular_url || "#";
      return r`
                <a href="${u}" class="min-link-rectangular__item">

                  <div
                    class="min-link-rectangular__image-wrapper
                    ${(d = this.config) != null && d.rectangular_links_rounded ? "min-link-rectangular__image-wrapper--rounded" : ""}"
                  >
                    <div class="min-link-rectangular__image-inner">
                      <img
                        src="${_}"
                        loading="lazy"
                        alt="${c}"
                      />
                    </div>
                  </div>

                  ${c.trim() || s.trim() ? r`
                        <div class="min-link-rectangular__content">
                          ${c.trim() ? r`
                                <strong class="min-link-rectangular__title-text">
                                  ${c}
                                </strong>
                              ` : ""}

                          ${s.trim() ? r`
                                <span class="min-link-rectangular__desc">
                                  ${s}
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
    ` : r`<div style="padding:20px">No items</div>`;
  }
}
x([
  k({ type: Object })
], g.prototype, "config");
typeof g < "u" && g.registerSallaComponent("salla-min-links-rectangular");
export {
  g as default
};
