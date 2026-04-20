import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class LinksCircularRayhana extends LitElement {
  @property({ type: Object })
  config?: any;

  // مهم جداً عشان Tailwind
  createRenderRoot() {
    return this;
  }

  // ✅ حل مشكلة prefix
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
      <section class="s-block min-link-circular my-8 lg:my-16">
        <div class="container">

          ${
            this.config?.circular_links_title
              ? html`
                <h2 class="text-xl font-bold text-center mb-2">
                  ${this.config.circular_links_title}
                </h2>
              `
              : ''
          }

          ${
            this.config?.circular_links_subtitle
              ? html`
                <p class="text-sm text-gray-500 text-center mb-6">
                  ${this.config.circular_links_subtitle}
                </p>
              `
              : ''
          }

          <!-- ✅ Grid -->
          <div class="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">

            ${items.map((raw: any) => {
              const item = this.normalizeItem(raw);

              const image = item.circular_image;
              const title = item.circular_title;
              const text = item.circular_text;
              const url = item.circular_url?.value || '#';

              return html`
                <a href="${url}" class="group flex flex-col items-center text-center gap-2">

                  <!-- ✅ الصورة الدائرية -->
                  <div class="w-full flex justify-center">
                    <div class="overflow-hidden rounded-full" style="aspect-ratio:1/1;">

                      <img
                        src="${image}"
                        loading="lazy"
                        class="w-full h-full object-cover"
                      />

                    </div>
                  </div>

                  <!-- النص -->
                  ${
                    title || text
                      ? html`
                      <div>
                        ${title ? html`<strong class="block text-xs lg:text-sm">${title}</strong>` : ''}
                        ${text ? html`<span class="block text-xs opacity-70">${text}</span>` : ''}
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
