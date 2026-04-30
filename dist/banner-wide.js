import { LitElement as l, html as s } from "lit";
import { property as c } from "lit/decorators.js";
var p = Object.defineProperty, m = (a, e, n, i) => {
  for (var r = void 0, t = a.length - 1, d; t >= 0; t--)
    (d = a[t]) && (r = d(e, n, r) || r);
  return r && p(e, n, r), r;
};
class o extends l {
  // مهم مع سلة (بدون Shadow DOM)
  createRenderRoot() {
    return this;
  }
  // تنظيف المفاتيح
  normalizeData(e) {
    const n = {};
    return e && Object.keys(e).forEach((i) => {
      const r = i.includes(".") ? i.split(".").pop() : i;
      n[r] = e[i];
    }), n;
  }
  render() {
    const e = this.normalizeData(this.config || {}), n = e.banner_wide_image || "", i = e.banner_wide_url || "#";
    return n ? s`
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
              src="${n}" 
              alt="Banner"
              loading="lazy"
              class="wide-banner__image"
            />
          </a>
        </div>
      </section>
    ` : s``;
  }
}
m([
  c({ type: Object })
], o.prototype, "config");
typeof o < "u" && o.registerSallaComponent("salla-banner-wide");
export {
  o as default
};
