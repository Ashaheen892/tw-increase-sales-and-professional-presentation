import { LitElement as f, html as r } from "lit";
import { property as p } from "lit/decorators.js";
var x = Object.defineProperty, m = (a, t, l, i) => {
  for (var e = void 0, s = a.length - 1, n; s >= 0; s--)
    (n = a[s]) && (e = n(t, l, e) || e);
  return e && x(t, l, e), e;
};
class o extends f {
  // مهم جدا مع سلة
  createRenderRoot() {
    return this;
  }
  // استخراج القيم مباشرة بدون normalize (أدق مع سلة)
  getItems() {
    var t;
    return ((t = this.config) == null ? void 0 : t.rectangular_links) || [];
  }
  getValue(t, l) {
    return t[`rectangular_links.${l}`];
  }
  getUrl(t) {
    var l;
    return ((l = t["rectangular_links.rectangular_url"]) == null ? void 0 : l.value) || "#";
  }
  render() {
    var l, i;
    const t = this.getItems();
    return console.log("CONFIG:", this.config), console.log("ITEMS:", t), t.length ? r`
      <section class="s-block min-link-rectangular my-8 lg:my-16">
        <div class="container mx-auto max-w-[1440px] px-4">

          ${(l = this.config) != null && l.rectangular_links_title ? r`<h2 class="text-xl font-bold text-center mb-2">
                ${this.config.rectangular_links_title}
              </h2>` : ""}

          ${(i = this.config) != null && i.rectangular_links_subtitle ? r`<p class="text-sm text-gray-500 text-center mb-6">
                ${this.config.rectangular_links_subtitle}
              </p>` : ""}

          <!-- ✅ Grid ثابت -->
          <div class="grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6">

            ${t.map((e) => {
      var g, u;
      const s = e.rectangular_image, n = e.rectangular_title, c = e.rectangular_text, d = ((g = e.rectangular_url) == null ? void 0 : g.value) || "#";
      return r`
                <a href="${d}" class="group flex flex-col text-center gap-2">

                  <div class="overflow-hidden ${(u = this.config) != null && u.rectangular_links_rounded ? "rounded-xl" : ""}">
                    <div class="overflow-hidden" style="aspect-ratio:3/4;">
                      <img
                        src="${s}"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  ${n || c ? r`
                    <div class="py-2">
                      ${n ? r`<strong class="block text-xs lg:text-sm">${n}</strong>` : ""}
                      ${c ? r`<span class="block text-xs opacity-70">${c}</span>` : ""}
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
m([
  p({ type: Object })
], o.prototype, "config");
typeof o < "u" && o.registerSallaComponent("salla-min-links-rectangular");
export {
  o as default
};
