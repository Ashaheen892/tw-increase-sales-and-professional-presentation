import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class BannerTripleSaji extends LitElement {
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
    const banners = this.config?.banners_triple || [];

    if (!banners.length) return html``;

    return html`
      <style>
        .triple-banner {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .triple-banner {
            margin: 64px 0;
          }
        }

        .triple-banner__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* layout */
        .triple-banner__grid {
          column-count: 3;
          column-gap: 16px;
        }

        @media (min-width: 1024px) {
          .triple-banner__grid {
            column-gap: 15px;
          }
        }

        .triple-banner__item {
          display: inline-flex;
          width: 100%;
          margin-bottom: 15px;
          overflow: hidden;
          text-decoration: none;
          break-inside: avoid;
        }
        .triple-banner__media{
          width: 100%;
        }
        

        .triple-banner__image {
          width: 100%;
          display: block;
          height: auto;
        }

        
      </style>

      <section class="triple-banner">
        <div class="triple-banner__container">
          
          <div class="triple-banner__grid">

            ${banners.map((rawItem: any) => {
              const item = this.normalizeItem(rawItem);

              const image = item.banners_triple_image;
              const url = item.banners_triple_url?.value || '#';

              return html`
                <a href="${url}" class="triple-banner__item">

                  <div class="triple-banner__media">
                    <img 
                      src="${image}" 
                      loading="lazy"
                      alt="triple banner"
                      class="triple-banner__image"
                    />
                  </div>

                </a>
              `;
            })}

          </div>

        </div>
      </section>
    `;
  }
}
