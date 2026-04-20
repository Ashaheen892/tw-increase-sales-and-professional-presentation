import { LitElement as d, css as b, html as s } from "lit";
import { property as f, state as g } from "lit/decorators.js";
var m = Object.defineProperty, l = (p, t, e, n) => {
  for (var r = void 0, i = p.length - 1, o; i >= 0; i--)
    (o = p[i]) && (r = o(t, e, r) || r);
  return r && m(t, e, r), r;
};
const c = class c extends d {
  constructor() {
    super(...arguments), this.activeTab = 0;
  }
  // ✅ تحويل القيم
  get branches() {
    var t;
    return ((t = this.config) == null ? void 0 : t.branches) || [];
  }
  // ✅ استخراج رابط iframe الصحيح (نفس Twig)
  getMapUrl(t) {
    var e;
    return t ? t.includes('src="') ? (e = t.split('src="')[1]) == null ? void 0 : e.split('"')[0] : t : "";
  }
  render() {
    var e, n;
    const t = this.branches;
    return s`
      <div class="wrapper container">
        <!-- title -->
        ${(e = this.config) != null && e.title ? s`<div class="title">${this.config.title}</div>` : ""}

        ${(n = this.config) != null && n.subtitle ? s`<div class="subtitle">${this.config.subtitle}</div>` : ""}

        <!-- tabs -->
        <div class="tabs">
          ${t.map(
      (r, i) => s`
              <div
                class="tab ${this.activeTab === i ? "active" : ""}"
                @click=${() => this.activeTab = i}
              >
                📍 ${r.branch_name}
              </div>
            `
    )}
        </div>

        <!-- content -->
        ${t.map((r, i) => {
      const o = this.getMapUrl(r.map_code_url);
      return this.activeTab === i ? s`
                <div class="map ${r.map__gray ? "gray" : ""}">
                  <iframe
                    src="${o}"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              ` : "";
    })}
      </div>
    `;
  }
};
c.styles = b`
  
    :host {
      display: block;
    }

    .wrapper {
      margin: 40px 0;
    }
    .title {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 20px;
    }

    .tabs {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 20px;
    }

    .tab {
      padding: 8px 16px;
      border: 1px solid var(--color-primary);
      cursor: pointer;
      background: transparent;
      color: var(--color-primary);
      border-radius: 6px;
      font-size: 14px;
    }

    .tab.active {
      background: var(--color-primary);
      color: white;
    }

    .map {
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
    }

    iframe {
      width: 100%;
      height: 400px;
      border: none;
    }

    .gray iframe {
      filter: grayscale(1);
    }
  `;
let a = c;
l([
  f({ type: Object })
], a.prototype, "config");
l([
  g()
], a.prototype, "activeTab");
typeof a < "u" && a.registerSallaComponent("salla-our-branches");
export {
  a as default
};
