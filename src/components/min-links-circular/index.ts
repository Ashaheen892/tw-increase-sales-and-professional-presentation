import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class LinksCircularRayhana extends LitElement {
  @property({ type: Object })
  config?: any;

  createRenderRoot() {
    return this;
  }

  private normalizeItem(item: any) {
    const obj: any = {};

    Object.keys(item).forEach(key => {
      const newKey = key.includes('.') ? key.split('.').pop() : key;
      obj[newKey] = item[key];
    });

    return obj;
  }

  render() {
    const items = this.config?.circular_links_reihana || [];

    return html`
      <style>
        .min-link-circular {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .min-link-circular {
            margin: 64px 0;
          }
        }

        .min-link-circular__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .min-link-circular__title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #000;
        }

        .min-link-circular__subtitle {
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .min-link-circular__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (min-width: 1024px) {
          .min-link-circular__grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
          }
        }

        .min-link-circular__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          text-decoration: none;
          color: inherit;
        }

        .min-link-circular__image-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .min-link-circular__image-inner {
          overflow: hidden;
          border-radius: 50%;
          aspect-ratio: 1 / 1;
          width: 100%;
        }

        .min-link-circular__image-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .min-link-circular__content {
          padding: 4px 0;
        }

        .min-link-circular__title-text {
          display: block;
          font-size: 12px;
          font-weight: bold;
          color: #000;
        }

        @media (min-width: 1024px) {
          .min-link-circular__title-text {
            font-size: 14px;
          }
        }

        .min-link-circular__desc {
          display: block;
          font-size: 12px;
          opacity: 0.7;
          color: #555;
        }

        /* ================= DARK MODE ================= */

        [data-theme="dark"] .min-link-circular__title {
          color: #fff;
        }

        [data-theme="dark"] .min-link-circular__subtitle {
          color: #aaa;
        }

        [data-theme="dark"] .min-link-circular__title-text {
          color: #fff;
        }

        [data-theme="dark"] .min-link-circular__desc {
          color: #bbb;
        }
      </style>

      <section class="min-link-circular">
        <div class="min-link-circular__container">

          ${
            this.config?.circular_links_title
              ? html`
                <h2 class="min-link-circular__title">
                  ${this.config.circular_links_title}
                </h2>
              `
              : ''
          }

          ${
            this.config?.circular_links_subtitle
              ? html`
                <p class="min-link-circular__subtitle">
                  ${this.config.circular_links_subtitle}
                </p>
              `
              : ''
          }

          <div class="min-link-circular__grid">

            ${items.map((raw: any) => {
              const item = this.normalizeItem(raw);

              const image = item.circular_image;
              const title = item.circular_title;
              const text = item.circular_text;
              const url = item.circular_url || '#';

              return html`
                <a href="${url}" class="min-link-circular__item">

                  <div class="min-link-circular__image-wrapper">
                    <div class="min-link-circular__image-inner">
                      <img src="${image}" loading="lazy" />
                    </div>
                  </div>

                  ${
                    title || text
                      ? html`
                        <div class="min-link-circular__content">
                          ${title ? html`<strong class="min-link-circular__title-text">${title}</strong>` : ''}
                          ${text ? html`<span class="min-link-circular__desc">${text}</span>` : ''}
                        </div>
                      `
                      : ''
                  }

                </a>
              `;
            })}

          </div>

        </div>
      </section>
    `;
  }
}
