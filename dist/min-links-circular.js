import { LitElement as m, html as s } from "lit";
import { property as g } from "lit/decorators.js";
var x = Object.defineProperty, v = (n, l, e, i) => {
  for (var t = void 0, c = n.length - 1, r; c >= 0; c--)
    (r = n[c]) && (t = r(l, e, t) || t);
  return t && x(l, e, t), t;
};
class u extends m {
  // مهم جداً عشان Tailwind
  createRenderRoot() {
    return this;
  }
  // ✅ حل مشكلة prefix
  normalizeItem(l) {
    const e = {};
    return Object.keys(l).forEach((i) => {
      const t = i.includes(".") ? i.split(".").pop() : i;
      e[t] = l[i];
    }), e;
  }
  render() {
    var e, i, t;
    const l = ((e = this.config) == null ? void 0 : e.circular_links_reihana) || [];
    return s`
      <section class="s-block min-link-circular my-8 lg:my-16">
        <div class="container mx-auto px-4">

          ${(i = this.config) != null && i.circular_links_title ? s`
                <h2 class="text-xl font-bold text-center mb-2">
                  ${this.config.circular_links_title}
                </h2>
              ` : ""}

          ${(t = this.config) != null && t.circular_links_subtitle ? s`
                <p class="text-sm text-gray-500 text-center mb-6">
                  ${this.config.circular_links_subtitle}
                </p>
              ` : ""}

          <!-- ✅ Grid -->
          <div class="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">

            ${l.map((c) => {
      var d;
      const r = this.normalizeItem(c), f = r.circular_image, a = r.circular_title, o = r.circular_text, p = ((d = r.circular_url) == null ? void 0 : d.value) || "#";
      return s`
                <a href="${p}" class="group flex flex-col items-center text-center gap-2">

                  <!-- ✅ الصورة الدائرية -->
                  <div class="w-full flex justify-center">
                    <div class="overflow-hidden rounded-full" style="aspect-ratio:1/1;">

                      <img
                        src="${f}"
                        loading="lazy"
                        class="w-full h-full object-cover"
                      />

                    </div>
                  </div>

                  <!-- النص -->
                  ${a || o ? s`
                      <div>
                        ${a ? s`<strong class="block text-xs lg:text-sm">${a}</strong>` : ""}
                        ${o ? s`<span class="block text-xs opacity-70">${o}</span>` : ""}
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
v([
  g({ type: Object })
], u.prototype, "config");
typeof u < "u" && u.registerSallaComponent("salla-min-links-circular");
export {
  u as default
};
