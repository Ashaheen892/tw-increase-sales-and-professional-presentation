import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js'; // لإظهار iframe الخام إذا لزم

export default class OurBranches extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  @state()
  activeTab = 0;

  get branches() {
    return this.config?.branches || [];
  }

  // دالة ذكية: إذا كان الإدخال iframe كامل، اعرضه مباشرة (مع إضافة class للتنسيق)
  // إذا كان رابطاً، اعرضه في iframe جديد
  renderMapContent(raw: string) {
    if (!raw) return html`<div class="branches__error">⚠️ لا يوجد رابط خريطة</div>`;

    // إذا كان النص يحتوي على iframe، نستخدم unsafeHTML لعرضه مباشرة
    if (raw.includes('<iframe')) {
      // نضيف class="branches__iframe" إلى iframe الموجود إذا لم يكن موجوداً
      let iframeHtml = raw;
      if (!raw.includes('class="branches__iframe"')) {
        iframeHtml = raw.replace(/<iframe/, '<iframe class="branches__iframe"');
      }
      return html`${unsafeHTML(iframeHtml)}`;
    }

    // إذا كان رابطاً مباشراً (يحتوي على google.com/maps)
    if (raw.includes('google.com/maps')) {
      return html`<iframe class="branches__iframe" src="${raw}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }

    // محاولة استخراج src من نص عادي (كحل أخير)
    const srcMatch = raw.match(/src=["']([^"']+)["']/);
    if (srcMatch && srcMatch[1]) {
      return html`<iframe class="branches__iframe" src="${srcMatch[1]}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }

    return html`<div class="branches__error">⚠️ رابط الخريطة غير صالح</div>`;
  }

  static styles = css`
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

  render() {
    const branches = this.branches;

    return html`
      <section class="branches">
        <div class="branches__container">
          ${this.config?.title ? html`<div class="branches__title">${this.config.title}</div>` : ''}
          ${this.config?.subtitle ? html`<div class="branches__subtitle">${this.config.subtitle}</div>` : ''}

          <div class="branches__tabs">
            ${branches.map(
              (b: any, i: number) => html`
                <div
                  class="branches__tab ${this.activeTab === i ? 'branches__tab--active' : ''}"
                  @click=${() => (this.activeTab = i)}
                >
                  📍 ${b.branch_name}
                </div>
              `
            )}
          </div>

          ${branches.map((b: any, i: number) => {
            if (this.activeTab !== i) return '';
            return html`
              <div class="branches__map ${b.map__gray ? 'branches__map--gray' : ''}">
                ${this.renderMapContent(b.map_code_url)}
              </div>
            `;
          })}
        </div>
      </section>
    `;
  }
}