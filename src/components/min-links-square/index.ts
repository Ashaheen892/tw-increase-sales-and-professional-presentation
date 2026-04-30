import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class LinksSquareRayhana extends LitElement {
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
    const items = this.config?.square_links_reihana || [];

    return html`
      <style>
        .min-link-square {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .min-link-square {
            margin: 64px 0;
          }
        }

        .min-link-square__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .min-link-square__title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #000;
        }

        .min-link-square__subtitle {
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .min-link-square__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (min-width: 1024px) {
          .min-link-square__grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
          }
        }

        .min-link-square__item {
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 8px;
          text-decoration: none;
          color: inherit;
        }

        .min-link-square__image-wrapper {
          overflow: hidden;
        }

        .min-link-square__image-inner {
          overflow: hidden;
          aspect-ratio: 1 / 1;
        }

        .min-link-square__image-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .min-link-square__content {
          padding: 8px 0;
        }

        .min-link-square__title-text {
          display: block;
          font-size: 12px;
          font-weight: bold;
          color: #000;
        }

        @media (min-width: 1024px) {
          .min-link-square__title-text {
            font-size: 14px;
          }
        }

        .min-link-square__desc {
          display: block;
          font-size: 12px;
          opacity: 0.7;
          color: #555;
        }

        /* ================= DARK MODE ================= */

        [data-theme="dark"] .min-link-square__title {
          color: #fff;
        }

        [data-theme="dark"] .min-link-square__subtitle {
          color: #aaa;
        }

        [data-theme="dark"] .min-link-square__title-text {
          color: #fff;
        }

        [data-theme="dark"] .min-link-square__desc {
          color: #bbb;
        }
      </style>

      <section class="min-link-square">
        <div class="min-link-square__container">

          ${
            this.config?.square_links_title
              ? html`<h2 class="min-link-square__title">
                ${this.config.square_links_title}
              </h2>`
              : ''
          }

          ${
            this.config?.square_links_subtitle
              ? html`<p class="min-link-square__subtitle">
                ${this.config.square_links_subtitle}
              </p>`
              : ''
          }

          <div class="min-link-square__grid">

            ${items.map((raw: any) => {
              const item = this.normalizeItem(raw);

              const image = item.square_image;
              const title = item.square_title;
              const text = item.square_text;
              const url = item.square_url || '#';

              return html`
                <a href="${url}" class="min-link-square__item">

                  <div class="min-link-square__image-wrapper">
                    <div class="min-link-square__image-inner">
                      <img src="${image}" loading="lazy" />
                    </div>
                  </div>

                  ${
                    title || text
                      ? html`
                      <div class="min-link-square__content">
                        ${title ? html`<strong class="min-link-square__title-text">${title}</strong>` : ''}
                        ${text ? html`<span class="min-link-square__desc">${text}</span>` : ''}
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
