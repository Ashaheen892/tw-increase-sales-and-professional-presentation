import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class BannerTripleSaji extends LitElement {
  @property({ type: Object })
  config?: any;

  // لتفعيل Tailwind CSS داخل الـ Shadow DOM أو استخدامه كـ Light DOM
  createRenderRoot() {
    return this;
  }

  /**
   * دالة لتنظيف مفاتيح البيانات داخل العناصر (Collection Items)
   * لضمان عمل الكود حتى لو تغير الـ prefix الخاص بالمنصة
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
    // الوصول إلى المصفوفة بناءً على ID الحقل "banners_triple"
    const banners = this.config?.banners_triple || [];

    if (!banners.length) return html``;

    return html`
      <section class="triple-banner-saji s-block my-8 lg:my-16">
        <div class="container">
          
          <div class="triple-banner-data gap-4" style="columns: 3;">
            
            ${banners.map((rawItem: any) => {
              const item = this.normalizeItem(rawItem);

              // استخراج القيم
              const image = item.banners_triple_image;
              const url = item.banners_triple_url?.value || '#';

              return html`
                <a href="${url}" class="block overflow-hidden mb-2">
                  <div class="relative overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-[3/4]">
                    <img 
                      src="${image}" 
                      loading="lazy"
                      alt="triple banner"
                      class="triple-banner-image w-full"
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
