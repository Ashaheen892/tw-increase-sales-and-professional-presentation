import { LitElement as s, html as l } from "lit";
import { property as c } from "lit/decorators.js";
var p = Object.defineProperty, m = (a, n, r, i) => {
  for (var e = void 0, t = a.length - 1, d; t >= 0; t--)
    (d = a[t]) && (e = d(n, r, e) || e);
  return e && p(n, r, e), e;
};
class o extends s {
  // مهم مع سلة (بدون Shadow DOM)
  createRenderRoot() {
    return this;
  }
  // تنظيف المفاتيح
  normalizeData(n) {
    const r = {};
    return n && Object.keys(n).forEach((i) => {
      const e = i.includes(".") ? i.split(".").pop() : i;
      r[e] = n[i];
    }), r;
  }
  render() {
    var e;
    const n = this.normalizeData(this.config || {}), r = n.banner_wide_image || "", i = ((e = n.banner_wide_url) == null ? void 0 : e.value) || "#";
    return r ? l`
      <style>
        .wide-banner {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .wide-banner {
            margin: 64px 0;
          }
        }

        .wide-banner__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
          text-align: center;
        }

        .wide-banner__link {
          display: block;
          overflow: hidden;
          border-radius: 12px;
          text-decoration: none;
        }
      </style>

      <section class="wide-banner">
        <div class="wide-banner__container">
          <a href="${i}" class="wide-banner__link">
            <img 
              src="${r}" 
              alt="Banner"
              loading="lazy"
              class="wide-banner__image"
            />
          </a>
        </div>
      </section>
    ` : l``;
  }
}
m([
  c({ type: Object })
], o.prototype, "config");
typeof o < "u" && o.registerSallaComponent("salla-banner-wide");
export {
  o as default
};
