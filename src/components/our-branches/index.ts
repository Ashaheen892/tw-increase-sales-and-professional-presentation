import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

export default class OurBranches extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  @state()
  activeTab = 0;

  get branches() {
    return this.config?.branches || [];
  }

  getMapUrl(url: string) {
    if (!url) return '';

    if (url.includes('src="')) {
      return url.split('src="')[1]?.split('"')[0];
    }

    return url;
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
            const url = this.getMapUrl(b.map_code_url);

            return this.activeTab === i
              ? html`
                  <div class="branches__map ${b.map__gray ? 'branches__map--gray' : ''}">
                    <iframe
                      class="branches__iframe"
                      src="${url}"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                `
              : '';
          })}

        </div>
      </section>
    `;
  }
}
