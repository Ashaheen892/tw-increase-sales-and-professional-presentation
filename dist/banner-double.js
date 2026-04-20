import { LitElement as c, html as l } from "lit";
import { property as u } from "lit/decorators.js";
var f = Object.defineProperty, p = (s, r, n, o) => {
  for (var e = void 0, t = s.length - 1, a; t >= 0; t--)
    (a = s[t]) && (e = a(r, n, e) || e);
  return e && f(r, n, e), e;
};
class i extends c {
  // السماح لـ Tailwind CSS بالعمل داخل المكون
  createRenderRoot() {
    return this;
  }
  /**
   * دالة لتنظيف مفاتيح البيانات داخل العناصر (Collection Items)
   * للتخلص من الـ prefixes المحتملة
   */
  normalizeItem(r) {
    const n = {};
    return r && Object.keys(r).forEach((o) => {
      const e = o.includes(".") ? o.split(".").pop() : o;
      n[e] = r[o];
    }), n;
  }
  render() {
    var n;
    const r = ((n = this.config) == null ? void 0 : n.banners_double) || [];
    return r.length ? l`
      <section class="double-banner-saji s-block my-8 lg:my-16">
        <div class="container mx-auto px-4">
          
          <div class="grid grid-cols-2 gap-2 md:gap-4">
            
            ${r.map((o) => {
      var d;
      const e = this.normalizeItem(o), t = e.banners_double_image, a = ((d = e.banners_double_url) == null ? void 0 : d.value) || "#";
      return l`
                <a 
                  href="${a}" 
                  class="group block overflow-hidden rounded-lg transition-shadow hover:shadow-lg"
                >
                  <img 
                    src="${t}" 
                    loading="lazy"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
p([
  u({ type: Object })
], i.prototype, "config");
typeof i < "u" && i.registerSallaComponent("salla-banner-double");
export {
  i as default
};
