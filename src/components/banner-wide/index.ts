import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class BannerWideSaji extends LitElement {
  @property({ type: Object })
  config?: any;

  // مهم مع سلة (بدون Shadow DOM)
  createRenderRoot() {
    return this;
  }

  // تنظيف المفاتيح
  private normalizeData(data: any) {
    const obj: any = {};
    if (!data) return obj;

    Object.keys(data).forEach(key => {
      const newKey = key.includes('.') ? key.split('.').pop() : key;
      obj[newKey] = data[key];
    });

    return obj;
  }

  render() {
    const data = this.normalizeData(this.config || {});
    const imageUrl = data.banner_wide_image || '';
    const targetUrl = data.banner_wide_url?.value || '#';

    if (!imageUrl) return html``;

    return html`
      <style>
        .wide-banner {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .wide-banner {
            margin: 64px 0;
          }
        }

        .wide-banner__container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
          text-align: center;
        }

        .wide-banner__link {
          display: block;
          overflow: hidden;
          border-radius: 12px;
          text-decoration: none;
        }
      </style>

      <section class="wide-banner">
        <div class="wide-banner__container">
          <a href="${targetUrl}" class="wide-banner__link">
            <img 
              src="${imageUrl}" 
              alt="Banner"
              loading="lazy"
              class="wide-banner__image"
            />
          </a>
        </div>
      </section>
    `;
  }
}
