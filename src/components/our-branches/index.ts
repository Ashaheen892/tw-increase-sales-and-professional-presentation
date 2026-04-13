import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

export default class OurBranches extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  @state()
  activeTab = 0;

  // ✅ تحويل القيم
  get branches() {
    return this.config?.branches || [];
  }

  // ✅ استخراج رابط iframe الصحيح (نفس Twig)
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

  render() {
    const branches = this.branches;

    return html`
      <div class="wrapper">
        <!-- title -->
        ${this.config?.title ? html`<div class="title">${this.config.title}</div>` : ''}

        ${this.config?.subtitle ? html`<div class="subtitle">${this.config.subtitle}</div>` : ''}

        <!-- tabs -->
        <div class="tabs">
          ${branches.map(
            (b: any, i: number) => html`
              <div
                class="tab ${this.activeTab === i ? 'active' : ''}"
                @click=${() => (this.activeTab = i)}
              >
                📍 ${b.branch_name}
              </div>
            `
          )}
        </div>

        <!-- content -->
        ${branches.map((b: any, i: number) => {
          const url = this.getMapUrl(b.map_code_url);

          return this.activeTab === i
            ? html`
                <div class="map ${b.map__gray ? 'gray' : ''}">
                  <iframe
                    src="${url}"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              `
            : '';
        })}
      </div>
    `;
  }
}
