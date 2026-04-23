import { LitElement as h, css as d, html as i } from "lit";
import { property as p, state as _ } from "lit/decorators.js";
var f = Object.defineProperty, b = (l, r, t, o) => {
  for (var a = void 0, e = l.length - 1, n; e >= 0; e--)
    (n = l[e]) && (a = n(r, t, a) || a);
  return a && f(r, t, a), a;
};
const c = class c extends h {
  constructor() {
    super(...arguments), this.activeTab = 0;
  }
  get branches() {
    var r;
    return ((r = this.config) == null ? void 0 : r.branches) || [];
  }
  getMapUrl(r) {
    var t;
    return r ? r.includes('src="') ? (t = r.split('src="')[1]) == null ? void 0 : t.split('"')[0] : r : "";
  }
  render() {
    var t, o;
    const r = this.branches;
    return i`
      <section class="branches">
        <div class="branches__container">

          ${(t = this.config) != null && t.title ? i`<div class="branches__title">${this.config.title}</div>` : ""}

          ${(o = this.config) != null && o.subtitle ? i`<div class="branches__subtitle">${this.config.subtitle}</div>` : ""}

          <div class="branches__tabs">
            ${r.map(
      (a, e) => i`
                <div
                  class="branches__tab ${this.activeTab === e ? "branches__tab--active" : ""}"
                  @click=${() => this.activeTab = e}
                >
                  📍 ${a.branch_name}
                </div>
              `
    )}
          </div>

          ${r.map((a, e) => {
      const n = this.getMapUrl(a.map_code_url);
      return this.activeTab === e ? i`
                  <div class="branches__map ${a.map__gray ? "branches__map--gray" : ""}">
                    <iframe
                      class="branches__iframe"
                      src="${n}"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                ` : "";
    })}

        </div>
      </section>
    `;
  }
};
c.styles = d`
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

    /* ================= DARK MODE ================= */

    :host-context([data-theme="dark"]) .branches__title {
      color: #fff;
    }

    :host-context([data-theme="dark"]) .branches__subtitle {
      color: #aaa;
    }

    :host-context([data-theme="dark"]) .branches__tab {
      border-color: var(--color-primary);
      color: var(--color-primary);
      background: transparent;
    }

    :host-context([data-theme="dark"]) .branches__tab--active {
      background: var(--color-primary);
      color: #fff;
    }

    :host-context([data-theme="dark"]) .branches__map {
      background: #111;
    }
  `;
let s = c;
b([
  p({ type: Object })
], s.prototype, "config");
b([
  _()
], s.prototype, "activeTab");
typeof s < "u" && s.registerSallaComponent("salla-our-branches");
export {
  s as default
};
