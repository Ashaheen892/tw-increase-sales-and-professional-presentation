import { LitElement as c, html as l } from "lit";
import { property as d } from "lit/decorators.js";
var f = Object.defineProperty, u = (a, r, t, n) => {
  for (var e = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (e = s(r, t, e) || e);
  return e && f(r, t, e), e;
};
class i extends c {
  // مهم جداً لعمل Tailwind CSS داخل المكون
  createRenderRoot() {
    return this;
  }
  // دالة لتنظيف المفاتيح من أي prefix (مثل salla_...)
  normalizeData(r) {
    const t = {};
    return r && Object.keys(r).forEach((n) => {
      const e = n.includes(".") ? n.split(".").pop() : n;
      t[e] = r[n];
    }), t;
  }
  render() {
    var e;
    const r = this.normalizeData(this.config || {}), t = r.banner_wide_image || "", n = ((e = r.banner_wide_url) == null ? void 0 : e.value) || "#";
    return t ? l`
      <section class="wide-banner-saji s-block my-8 lg:my-16">
        <div class="container mx-auto px-4">
          <a href="${n}" class="block text-center group overflow-hidden rounded-lg">
            <img 
              src="${t}" 
              alt="Banner"
              loading="lazy"
              class="w-full h-auto m-auto transition-transform duration-500 group-hover:scale-105"
              style="max-width: 1200px; object-fit: cover;"
            />
          </a>
        </div>
      </section>
    ` : l``;
  }
}
u([
  d({ type: Object })
], i.prototype, "config");
typeof i < "u" && i.registerSallaComponent("salla-banner-wide");
export {
  i as default
};
