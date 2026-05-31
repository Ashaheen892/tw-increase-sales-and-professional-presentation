import { LitElement as b, html as a, css as h } from "lit";
import { property as f, state as _ } from "lit/decorators.js";
import { unsafeHTML as p } from "lit/directives/unsafe-html.js";
var m = Object.defineProperty, d = (o, r, t, i) => {
  for (var e = void 0, s = o.length - 1, l; s >= 0; s--)
    (l = o[s]) && (e = l(r, t, e) || e);
  return e && m(r, t, e), e;
};
const c = class c extends b {
  constructor() {
    super(...arguments), this.activeTab = 0;
  }
  get branches() {
    var r;
    return ((r = this.config) == null ? void 0 : r.branches) || [];
  }
  // دالة ذكية: إذا كان الإدخال iframe كامل، اعرضه مباشرة (مع إضافة class للتنسيق)
  // إذا كان رابطاً، اعرضه في iframe جديد
  renderMapContent(r) {
    if (!r) return a`<div class="branches__error">⚠️ لا يوجد رابط خريطة</div>`;
    if (r.includes("<iframe")) {
      let i = r;
      return r.includes('class="branches__iframe"') || (i = r.replace(/<iframe/, '<iframe class="branches__iframe"')), a`${p(i)}`;
    }
    if (r.includes("google.com/maps"))
      return a`<iframe class="branches__iframe" src="${r}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    const t = r.match(/src=["']([^"']+)["']/);
    return t && t[1] ? a`<iframe class="branches__iframe" src="${t[1]}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` : a`<div class="branches__error">⚠️ رابط الخريطة غير صالح</div>`;
  }
  render() {
    var t, i;
    const r = this.branches;
    return a`
      <section class="branches">
        <div class="branches__container">
          ${(t = this.config) != null && t.title ? a`<div class="branches__title">${this.config.title}</div>` : ""}
          ${(i = this.config) != null && i.subtitle ? a`<div class="branches__subtitle">${this.config.subtitle}</div>` : ""}

          <div class="branches__tabs">
            ${r.map(
      (e, s) => a`
                <div
                  class="branches__tab ${this.activeTab === s ? "branches__tab--active" : ""}"
                  @click=${() => this.activeTab = s}
                >
                  📍 ${e.branch_name}
                </div>
              `
    )}
          </div>

          ${r.map((e, s) => this.activeTab !== s ? "" : a`
              <div class="branches__map ${e.map__gray ? "branches__map--gray" : ""}">
                ${this.renderMapContent(e.map_code_url)}
              </div>
            `)}
        </div>
      </section>
    `;
  }
};
c.styles = h`
    :host {
      display: block;
    }
    .branches {
      margin: 40px 0;
    }
    .branches__container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 16px;
    }
    .branches__title {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #000;
    }
    .branches__subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 20px;
    }
    .branches__tabs {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 20px;
    }
    .branches__tab {
      padding: 8px 16px;
      border: 1px solid var(--color-primary);
      cursor: pointer;
      background: transparent;
      color: var(--color-primary);
      border-radius: 6px;
      font-size: 14px;
      transition: all 0.2s ease;
    }
    .branches__tab--active {
      background: var(--color-primary);
      color: #fff;
    }
    .branches__map {
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
    }
    .branches__iframe {
      width: 100%;
      height: 400px;
      border: none;
      display: block;
    }
    .branches__map--gray .branches__iframe {
      filter: grayscale(1);
    }
    .branches__error {
      text-align: center;
      padding: 40px 20px;
      background: #f5f5f5;
      color: #d32f2f;
      border-radius: 10px;
      font-size: 14px;
    }
    :host-context([data-theme="dark"]) .branches__title {
      color: #fff;
    }
    :host-context([data-theme="dark"]) .branches__subtitle {
      color: #aaa;
    }
    :host-context([data-theme="dark"]) .branches__tab {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
    :host-context([data-theme="dark"]) .branches__tab--active {
      background: var(--color-primary);
      color: #fff;
    }
    :host-context([data-theme="dark"]) .branches__error {
      background: #222;
      color: #ff6b6b;
    }
  `;
let n = c;
d([
  f({ type: Object })
], n.prototype, "config");
d([
  _()
], n.prototype, "activeTab");
typeof n < "u" && n.registerSallaComponent("salla-our-branches");
export {
  n as default
};
