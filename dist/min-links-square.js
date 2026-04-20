import { LitElement as m, html as l } from "lit";
import { property as g } from "lit/decorators.js";
var x = Object.defineProperty, v = (n, i, e, s) => {
  for (var t = void 0, a = n.length - 1, r; a >= 0; a--)
    (r = n[a]) && (t = r(i, e, t) || t);
  return t && x(i, e, t), t;
};
class u extends m {
  // ❗ مهم عشان Tailwind يشتغل
  createRenderRoot() {
    return this;
  }
  // ✅ تفكيك keys
  normalizeItem(i) {
    const e = {};
    return Object.keys(i).forEach((s) => {
      const t = s.includes(".") ? s.split(".").pop() : s;
      e[t] = i[s];
    }), e;
  }
  render() {
    var e, s, t;
    const i = ((e = this.config) == null ? void 0 : e.square_links_reihana) || [];
    return l`
      <section class="min-link-square s-block my-8 lg:my-16">
        <div class="container mx-auto max-w-[1440px] px-4">

          ${(s = this.config) != null && s.square_links_title ? l`<h2 class="text-xl font-bold text-center mb-2">
                ${this.config.square_links_title}
              </h2>` : ""}

          ${(t = this.config) != null && t.square_links_subtitle ? l`<p class="text-sm text-gray-500 text-center mb-6">
                ${this.config.square_links_subtitle}
              </p>` : ""}

          <!-- ✅ Grid -->
          <div class="grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6">

            ${i.map((a) => {
      var d;
      const r = this.normalizeItem(a), p = r.square_image, o = r.square_title, c = r.square_text, f = ((d = r.square_url) == null ? void 0 : d.value) || "#";
      return l`
                <a href="${f}" class="group flex flex-col text-center gap-2">

                  <div class="overflow-hidden">
                    <div class="overflow-hidden" style="aspect-ratio:1/1;">
                      <img
                        src="${p}"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  ${o || c ? l`
                      <div class="py-2">
                        ${o ? l`<strong class="block text-xs lg:text-sm">${o}</strong>` : ""}
                        ${c ? l`<span class="block text-xs opacity-70">${c}</span>` : ""}
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
typeof u < "u" && u.registerSallaComponent("salla-min-links-square");
export {
  u as default
};
