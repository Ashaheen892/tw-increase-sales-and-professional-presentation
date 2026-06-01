import { LitElement as h, html as s, css as _ } from "lit";
import { property as m, state as f } from "lit/decorators.js";
import { l } from "./localizedString-WeqHgpra.js";
var v = Object.defineProperty, b = (p, e, a, n) => {
  for (var r = void 0, o = p.length - 1, t; o >= 0; o--)
    (t = p[o]) && (r = t(e, a, r) || r);
  return r && v(e, a, r), r;
};
const d = class d extends h {
  constructor() {
    super(...arguments), this.activeTab = 0;
  }
  normalizeItem(e) {
    return Object.entries(e || {}).reduce(
      (a, [n, r]) => {
        const o = n.includes(".") ? n.split(".").pop() : n;
        return a[o] = r, a;
      },
      {}
    );
  }
  get branches() {
    var e;
    return (((e = this.config) == null ? void 0 : e.branches) || []).map(
      (a) => this.normalizeItem(a)
    );
  }
  renderMapContent(e) {
    var o;
    const a = (o = document.documentElement.lang) != null && o.startsWith("en") ? "en" : "ar", n = {
      ar: {
        noMap: "لا يوجد رابط خريطة",
        invalidMap: "رابط الخريطة غير صالح"
      },
      en: {
        noMap: "No map URL provided",
        invalidMap: "Invalid map URL"
      }
    };
    if (!e)
      return s`
        <div class="branches__error">
          ⚠️ ${n[a].noMap}
        </div>
      `;
    let r = "";
    if (e.includes("<iframe")) {
      const t = e.match(/src=["']([^"']+)["']/);
      t != null && t[1] && (r = t[1]);
    } else
      r = e;
    if (!r)
      return s`
        <div class="branches__error">
          ⚠️ ${n[a].invalidMap}
        </div>
      `;
    try {
      const t = new URL(r).hostname;
      return [
        "www.google.com",
        "google.com",
        "maps.google.com"
      ].includes(t) ? s`
        <iframe
          class="branches__iframe"
          src="${r}"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ` : s`
          <div class="branches__error">
            ⚠️ ${n[a].invalidMap}
          </div>
        `;
    } catch {
      return s`
        <div class="branches__error">
          ⚠️ ${n[a].invalidMap}
        </div>
      `;
    }
  }
  render() {
    var r, o;
    const e = this.branches, a = l((r = this.config) == null ? void 0 : r.title, ""), n = l((o = this.config) == null ? void 0 : o.subtitle, "");
    return s`
      <section class="branches">
        <div class="branches__container">
          ${a ? s`
                <div class="branches__title">
                  ${a}
                </div>
              ` : ""}

          ${n ? s`
                <div class="branches__subtitle">
                  ${n}
                </div>
              ` : ""}

          <div class="branches__tabs">
            ${e.map(
      (t, c) => s`
                <div
                  class="branches__tab ${this.activeTab === c ? "branches__tab--active" : ""}"
                  @click=${() => this.activeTab = c}
                >
                  📍 ${l(t.branch_name, "")}
                </div>
              `
    )}
          </div>

          ${e.map((t, c) => this.activeTab !== c ? "" : s`
              <div
                class="branches__map ${t.map__gray ? "branches__map--gray" : ""}"
              >
                ${this.renderMapContent(t.map_code_url)}
              </div>
            `)}
        </div>
      </section>
    `;
  }
};
d.styles = _`
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

    :host-context([data-theme='dark']) .branches__title {
      color: #fff;
    }

    :host-context([data-theme='dark']) .branches__subtitle {
      color: #aaa;
    }

    :host-context([data-theme='dark']) .branches__tab {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }

    :host-context([data-theme='dark']) .branches__tab--active {
      background: var(--color-primary);
      color: #fff;
    }

    :host-context([data-theme='dark']) .branches__error {
      background: #222;
      color: #ff6b6b;
    }
  `;
let i = d;
b([
  m({ type: Object })
], i.prototype, "config");
b([
  f()
], i.prototype, "activeTab");
typeof i < "u" && i.registerSallaComponent("salla-our-branches");
export {
  i as default
};
