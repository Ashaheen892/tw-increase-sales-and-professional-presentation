import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class BannerDoubleSaji extends LitElement {
  @property({ type: Object })
  config?: any;

  // السماح لـ Tailwind CSS بالعمل داخل المكون
  createRenderRoot() {
    return this;
  }

  /**
   * دالة لتنظيف مفاتيح البيانات داخل العناصر (Collection Items)
   * للتخلص من الـ prefixes المحتملة
   */
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
    // الوصول إلى المصفوفة بناءً على ID الحقل في الـ JSON
    // استخدمت الاسم banners_double حسب تعريف الـ fields في طلبك
    const banners = this.config?.banners_double || [];

    if (!banners.length) return html``;

    return html`
      <section class="double-banner s-block my-8 lg:my-16">
        <div class="container">
          
          <div class="double-banner-data gap-4" style="columns: 2;">
            
            ${banners.map((rawItem: any) => {
              const item = this.normalizeItem(rawItem);

              // استخراج الصورة والرابط
              const image = item.banners_double_image;
              const url = item.banners_double_url?.value || '#';

              return html`
                <a href="${url}" class="block overflow-hidden mb-2"
                >
                  <img 
                    src="${image}" 
                    loading="lazy"
                    class="double-banner-image w-full"
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
