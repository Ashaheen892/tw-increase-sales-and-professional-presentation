import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class BannerDoubleSaji extends LitElement {
  @property({ type: Object })
  config?: any;

  // مهم مع سلة (بدون Shadow DOM)
  createRenderRoot() {
    return this;
  }

  // تنظيف المفاتيح
  private normalizeItem(item: any) {
    const obj: any = {};
    if (!item) return obj;

    Object.keys(item).forEach(key => {
      const newKey = key.includes('.') ? key.split('.').pop() : key;
      obj[newKey] = item[key];
    });

    return obj;
  }

  render() {
    const banners = this.config?.banners_double || [];

    if (!banners.length) return html``;

    return html`
      <style>
        .double-banner {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .double-banner {
            margin: 64px 0;
          }
        }

        .double-banner__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* Layout columns (Pinterest style) */
        .double-banner__grid {
          column-count: 2;
          column-gap: 16px;
        }

        @media (min-width: 1024px) {
          .double-banner__grid {
            column-gap: 15px;
          }
        }

        .double-banner__item {
          display: inline-flex;
          width: 100%;
          margin-bottom: 15px;
          overflow: hidden;
          break-inside: avoid;
          text-decoration: none;
        }

        .double-banner__image {
          width: 100%;
          display: block;
          height: auto;
        }
      </style>

      <section class="double-banner">
        <div class="double-banner__container">
          
          <div class="double-banner__grid">

            ${banners.map((rawItem: any) => {
              const item = this.normalizeItem(rawItem);

              const image = item.banners_double_image;
              const url = item.banners_double_url?.value || '#';
              return html`
                <a href="${url}" class="double-banner__item">
                  <img 
                    src="${image}" 
                    loading="lazy"
                    class="double-banner__image"
                    alt="banner"
                  />
                </a>
              `;
            })}

          </div>

        </div>
      </section>
    `;
  }
}
