import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class BannerWideSaji extends LitElement {
  @property({ type: Object })
  config?: any;

  // مهم جداً لعمل Tailwind CSS داخل المكون
  createRenderRoot() {
    return this;
  }

  // دالة لتنظيف المفاتيح من أي prefix (مثل salla_...)
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
    // استخراج البيانات وتطبيعها
    const data = this.normalizeData(this.config || {});

    // استخراج القيم بناءً على الـ IDs الموجودة في الـ JSON الخاص بك
    const imageUrl = data.banner_wide_image || '';
    const targetUrl = data.banner_wide_url?.value || '#';

    // إذا لم تكن هناك صورة، لا نعرض شيئاً أو نعرض صورة افتراضية
    if (!imageUrl) return html``;

    return html`
      <section class="wide-banner-saji s-block my-8 lg:my-16">
        <div class="container">
          <a href="${targetUrl}" class="block text-center group overflow-hidden rounded-lg">
            <img 
              src="${imageUrl}" 
              alt="Banner"
              loading="lazy"
              class="w-full h-auto m-auto transition-transform duration-500 group-hover:scale-105"
              style="max-width: 1200px; object-fit: cover;"
            />
          </a>
        </div>
      </section>
    `;
  }
}
