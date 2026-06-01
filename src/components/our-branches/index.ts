import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { localizedString } from '../../utils/localizedString';

export default class OurBranches extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  @state()
  activeTab = 0;

  private normalizeItem(item: Record<string, any>) {
    return Object.entries(item || {}).reduce(
      (acc, [key, value]) => {
        const normalizedKey = key.includes('.')
          ? key.split('.').pop()!
          : key;

        acc[normalizedKey] = value;
        return acc;
      },
      {} as Record<string, any>
    );
  }

  get branches() {
    return (this.config?.branches || []).map((branch: any) =>
      this.normalizeItem(branch)
    );
  }

  renderMapContent(raw: string) {
    const locale =
      document.documentElement.lang?.startsWith('en')
        ? 'en'
        : 'ar';

    const messages = {
      ar: {
        noMap: 'لا يوجد رابط خريطة',
        invalidMap: 'رابط الخريطة غير صالح',
      },
      en: {
        noMap: 'No map URL provided',
        invalidMap: 'Invalid map URL',
      },
    };

    if (!raw) {
      return html`
        <div class="branches__error">
          ⚠️ ${messages[locale].noMap}
        </div>
      `;
    }

    let src = '';

    if (raw.includes('<iframe')) {
      const match = raw.match(/src=["']([^"']+)["']/);

      if (match?.[1]) {
        src = match[1];
      }
    } else {
      src = raw;
    }

    if (!src) {
      return html`
        <div class="branches__error">
          ⚠️ ${messages[locale].invalidMap}
        </div>
      `;
    }

    try {
      const hostname = new URL(src).hostname;

      const allowedDomains = [
        'www.google.com',
        'google.com',
        'maps.google.com',
      ];

      if (!allowedDomains.includes(hostname)) {
        return html`
          <div class="branches__error">
            ⚠️ ${messages[locale].invalidMap}
          </div>
        `;
      }

      return html`
        <iframe
          class="branches__iframe"
          src="${src}"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      `;
    } catch {
      return html`
        <div class="branches__error">
          ⚠️ ${messages[locale].invalidMap}
        </div>
      `;
    }
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

  render() {
    const branches = this.branches;

    const title = localizedString(this.config?.title, '');
    const subtitle = localizedString(this.config?.subtitle, '');

    return html`
      <section class="branches">
        <div class="branches__container">
          ${title
            ? html`
                <div class="branches__title">
                  ${title}
                </div>
              `
            : ''}

          ${subtitle
            ? html`
                <div class="branches__subtitle">
                  ${subtitle}
                </div>
              `
            : ''}

          <div class="branches__tabs">
            ${branches.map(
              (b: any, i: number) => html`
                <div
                  class="branches__tab ${this.activeTab === i
                    ? 'branches__tab--active'
                    : ''}"
                  @click=${() => (this.activeTab = i)}
                >
                  📍 ${localizedString(b.branch_name, '')}
                </div>
              `
            )}
          </div>

          ${branches.map((b: any, i: number) => {
            if (this.activeTab !== i) return '';

            return html`
              <div
                class="branches__map ${b.map__gray
                  ? 'branches__map--gray'
                  : ''}"
              >
                ${this.renderMapContent(b.map_code_url)}
              </div>
            `;
          })}
        </div>
      </section>
    `;
  }
}