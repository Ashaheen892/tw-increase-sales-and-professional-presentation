import { LitElement as s, html as p } from "lit";
import { property as d } from "lit/decorators.js";
var m = Object.defineProperty, c = (l, n, r, i) => {
  for (var e = void 0, t = l.length - 1, a; t >= 0; t--)
    (a = l[t]) && (e = a(n, r, e) || e);
  return e && m(n, r, e), e;
};
class o extends s {
  // مهم مع سلة (بدون Shadow DOM)
  createRenderRoot() {
    return this;
  }
  // تنظيف المفاتيح
  normalizeItem(n) {
    const r = {};
    return n && Object.keys(n).forEach((i) => {
      const e = i.includes(".") ? i.split(".").pop() : i;
      r[e] = n[i];
    }), r;
  }
  render() {
    var r;
    const n = ((r = this.config) == null ? void 0 : r.banners_triple) || [];
    return n.length ? p`
      <style>
        .triple-banner {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .triple-banner {
            margin: 64px 0;
          }
        }

        .triple-banner__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* layout */
        .triple-banner__grid {
          column-count: 3;
          column-gap: 16px;
        }

        @media (min-width: 1024px) {
          .triple-banner__grid {
            column-gap: 15px;
          }
        }

        .triple-banner__item {
          display: inline-flex;
          width: 100%;
          margin-bottom: 15px;
          overflow: hidden;
          text-decoration: none;
          break-inside: avoid;
        }
        .triple-banner__media{
          width: 100%;
        }
        

        .triple-banner__image {
          width: 100%;
          display: block;
          height: auto;
        }

        
      </style>

      <section class="triple-banner">
        <div class="triple-banner__container">
          
          <div class="triple-banner__grid">

            ${n.map((i) => {
      const e = this.normalizeItem(i), t = e.banners_triple_image, a = e.banners_triple_url || "#";
      return p`
                <a href="${a}" class="triple-banner__item">

                  <div class="triple-banner__media">
                    <img 
                      src="${t}" 
                      loading="lazy"
                      alt="triple banner"
                      class="triple-banner__image"
                    />
                  </div>

                </a>
              `;
    })}

          </div>

        </div>
      </section>
    ` : p``;
  }
}
c([
  d({ type: Object })
], o.prototype, "config");
typeof o < "u" && o.registerSallaComponent("salla-banner-triple");
export {
  o as default
};
