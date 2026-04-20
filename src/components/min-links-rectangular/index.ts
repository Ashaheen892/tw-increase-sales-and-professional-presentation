import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class LinksRectangular extends LitElement {
  @property({ type: Object }) config: any;

  // مهم جدا مع سلة
  createRenderRoot() {
    return this;
  }

  // استخراج القيم مباشرة بدون normalize (أدق مع سلة)
  getItems() {
    return this.config?.rectangular_links || [];
  }

  getValue(item: any, key: string) {
    return item[`rectangular_links.${key}`];
  }

  getUrl(item: any) {
    return item['rectangular_links.rectangular_url']?.value || '#';
  }

  render() {
    const items = this.getItems();

    // Debug (لو حبيت)
    console.log('CONFIG:', this.config);
    console.log('ITEMS:', items);

    if (!items.length) {
      return html`<div style="padding:20px">No items</div>`;
    }

    return html`
      <section class="s-block min-link-rectangular my-8 lg:my-16">
        <div class="container">

          ${
            this.config?.rectangular_links_title
              ? html`<h2 class="text-xl font-bold text-center mb-2">
                ${this.config.rectangular_links_title}
              </h2>`
              : ''
          }

          ${
            this.config?.rectangular_links_subtitle
              ? html`<p class="text-sm text-gray-500 text-center mb-6">
                ${this.config.rectangular_links_subtitle}
              </p>`
              : ''
          }

          <!-- ✅ Grid ثابت -->
          <div class="grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6">

            ${items.map((item: any) => {
              const image = item.rectangular_image;
              const title = item.rectangular_title;
              const text = item.rectangular_text;
              const url = item.rectangular_url?.value || '#';

              return html`
                <a href="${url}" class="group flex flex-col text-center gap-2">

                  <div class="overflow-hidden ${this.config?.rectangular_links_rounded ? 'rounded-xl' : ''}">
                    <div class="overflow-hidden" style="aspect-ratio:3/4;">
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
