import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class LinksRectangular extends LitElement {
  @property({ type: Object }) config: any;

  createRenderRoot() {
    return this;
  }

  getItems() {
    return this.config?.rectangular_links || [];
  }

  render() {
    const items = this.getItems();

    if (!items.length) {
      return html`<div style="padding:20px">No items</div>`;
    }

    return html`
      <style>
        .min-link-rectangular {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .min-link-rectangular {
            margin: 64px 0;
          }
        }

        .min-link-rectangular__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .min-link-rectangular__title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #000;
        }

        .min-link-rectangular__subtitle {
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .min-link-rectangular__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (min-width: 1024px) {
          .min-link-rectangular__grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
          }
        }

        .min-link-rectangular__item {
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 8px;
          text-decoration: none;
          color: inherit;
        }

        .min-link-rectangular__image-wrapper {
          overflow: hidden;
        }

        .min-link-rectangular__image-wrapper--rounded {
          border-radius: 12px;
        }

        .min-link-rectangular__image-inner {
          overflow: hidden;
          aspect-ratio: 3 / 4;
        }

        .min-link-rectangular__image-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .min-link-rectangular__content {
          padding: 8px 0;
        }

        .min-link-rectangular__title-text {
          display: block;
          font-size: 12px;
          font-weight: bold;
          color: #000;
        }

        @media (min-width: 1024px) {
          .min-link-rectangular__title-text {
            font-size: 14px;
          }
        }

        .min-link-rectangular__desc {
          display: block;
          font-size: 12px;
          opacity: 0.7;
          color: #555;
        }

        /* ================= DARK MODE ================= */

        [data-theme="dark"] .min-link-rectangular__title {
          color: #fff;
        }

        [data-theme="dark"] .min-link-rectangular__subtitle {
          color: #aaa;
        }

        [data-theme="dark"] .min-link-rectangular__title-text {
          color: #fff;
        }

        [data-theme="dark"] .min-link-rectangular__desc {
          color: #bbb;
        }
      </style>

      <section class="min-link-rectangular">
        <div class="min-link-rectangular__container">

          ${
            this.config?.rectangular_links_title
              ? html`<h2 class="min-link-rectangular__title">
                ${this.config.rectangular_links_title}
              </h2>`
              : ''
          }

          ${
            this.config?.rectangular_links_subtitle
              ? html`<p class="min-link-rectangular__subtitle">
                ${this.config.rectangular_links_subtitle}
              </p>`
              : ''
          }

          <div class="min-link-rectangular__grid">

            ${items.map((item: any) => {
              const image = item.rectangular_image;
              const title = item.rectangular_title;
              const text = item.rectangular_text;
              const url = item.rectangular_url?.value || '#';

              return html`
                <a href="${url}" class="min-link-rectangular__item">

                  <div class="min-link-rectangular__image-wrapper 
                    ${this.config?.rectangular_links_rounded ? 'min-link-rectangular__image-wrapper--rounded' : ''}">
                    
                    <div class="min-link-rectangular__image-inner">
                      <img src="${image}" loading="lazy" />
                    </div>
                  </div>

                  ${
                    title || text
                      ? html`
                      <div class="min-link-rectangular__content">
                        ${title ? html`<strong class="min-link-rectangular__title-text">${title}</strong>` : ''}
                        ${text ? html`<span class="min-link-rectangular__desc">${text}</span>` : ''}
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
