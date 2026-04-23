import { LitElement as b, html as l } from "lit";
import { property as u } from "lit/decorators.js";
var m = Object.defineProperty, c = (i, n, r, a) => {
  for (var e = void 0, o = i.length - 1, t; o >= 0; o--)
    (t = i[o]) && (e = t(n, r, e) || e);
  return e && m(n, r, e), e;
};
class d extends b {
  // مهم مع سلة (بدون Shadow DOM)
  createRenderRoot() {
    return this;
  }
  // تنظيف المفاتيح
  normalizeItem(n) {
    const r = {};
    return n && Object.keys(n).forEach((a) => {
      const e = a.includes(".") ? a.split(".").pop() : a;
      r[e] = n[a];
    }), r;
  }
  render() {
    var r;
    const n = ((r = this.config) == null ? void 0 : r.banners_double) || [];
    return n.length ? l`
      <style>
        .double-banner {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .double-banner {
            margin: 64px 0;
          }
        }

        .double-banner__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* Layout columns (Pinterest style) */
        .double-banner__grid {
          column-count: 2;
          column-gap: 16px;
        }

        @media (min-width: 1024px) {
          .double-banner__grid {
            column-gap: 15px;
          }
        }

        .double-banner__item {
          display: inline-flex;
          width: 100%;
          margin-bottom: 15px;
          overflow: hidden;
          break-inside: avoid;
          text-decoration: none;
        }

        .double-banner__image {
          width: 100%;
          display: block;
          height: auto;
        }
      </style>

      <section class="double-banner">
        <div class="double-banner__container">
          
          <div class="double-banner__grid">

            ${n.map((a) => {
      var s;
      const e = this.normalizeItem(a), o = e.banners_double_image, t = ((s = e.banners_double_url) == null ? void 0 : s.value) || "#";
      return l`
                <a href="${t}" class="double-banner__item">
                  <img 
                    src="${o}" 
                    loading="lazy"
                    class="double-banner__image"
                    alt="banner"
                  />
                </a>
              `;
    })}

          </div>

        </div>
      </section>
    ` : l``;
  }
}
c([
  u({ type: Object })
], d.prototype, "config");
typeof d < "u" && d.registerSallaComponent("salla-banner-double");
export {
  d as default
};
