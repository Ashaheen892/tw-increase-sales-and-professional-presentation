import { LitElement as d, html as i } from "lit";
import { property as p } from "lit/decorators.js";
var u = Object.defineProperty, f = (s, r, n, t) => {
  for (var e = void 0, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (e = o(r, n, e) || e);
  return e && u(r, n, e), e;
};
class l extends d {
  // لتفعيل Tailwind CSS داخل الـ Shadow DOM أو استخدامه كـ Light DOM
  createRenderRoot() {
    return this;
  }
  /**
   * دالة لتنظيف مفاتيح البيانات داخل العناصر (Collection Items)
   * لضمان عمل الكود حتى لو تغير الـ prefix الخاص بالمنصة
   */
  normalizeItem(r) {
    const n = {};
    return r && Object.keys(r).forEach((t) => {
      const e = t.includes(".") ? t.split(".").pop() : t;
      n[e] = r[t];
    }), n;
  }
  render() {
    var n;
    const r = ((n = this.config) == null ? void 0 : n.banners_triple) || [];
    return r.length ? i`
      <section class="triple-banner-saji s-block my-8 lg:my-16">
        <div class="container mx-auto px-4">
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            
            ${r.map((t) => {
      var c;
      const e = this.normalizeItem(t), a = e.banners_triple_image, o = ((c = e.banners_triple_url) == null ? void 0 : c.value) || "#";
      return i`
                <a 
                  href="${o}" 
                  class="group block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div class="relative overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-[3/4]">
                    <img 
                      src="${a}" 
                      loading="lazy"
                      alt="triple banner"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </a>
              `;
    })}

          </div>
        </div>
      </section>
    ` : i``;
  }
}
f([
  p({ type: Object })
], l.prototype, "config");
typeof l < "u" && l.registerSallaComponent("salla-banner-triple");
export {
  l as default
};
