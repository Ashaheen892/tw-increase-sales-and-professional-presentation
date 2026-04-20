import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class LinksSquareRayhana extends LitElement {
  @property({ type: Object })
  config?: any;

  // ❗ مهم عشان Tailwind يشتغل
  createRenderRoot() {
    return this;
  }

  // ✅ تفكيك keys
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
      <section class="min-link-square s-block my-8 lg:my-16">
        <div class="container">

          ${
            this.config?.square_links_title
              ? html`<h2 class="text-xl font-bold text-center mb-2">
                ${this.config.square_links_title}
              </h2>`
              : ''
          }

          ${
            this.config?.square_links_subtitle
              ? html`<p class="text-sm text-gray-500 text-center mb-6">
                ${this.config.square_links_subtitle}
              </p>`
              : ''
          }

          <!-- ✅ Grid -->
          <div class="grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6">

            ${items.map((raw: any) => {
              const item = this.normalizeItem(raw);

              const image = item.square_image;
              const title = item.square_title;
              const text = item.square_text;
              const url = item.square_url?.value || '#';

              return html`
                <a href="${url}" class="group flex flex-col text-center gap-2">

                  <div class="overflow-hidden">
                    <div class="overflow-hidden" style="aspect-ratio:1/1;">
                      <img
                        src="${image}"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  ${
                    title || text
                      ? html`
                      <div class="py-2">
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
