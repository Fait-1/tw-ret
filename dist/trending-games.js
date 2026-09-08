import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class TrendingGames extends LitElement {
  static properties = {
    config: { type: Object }
  };

  constructor() {
    super();
    this.config = {
      title: 'Trending games',
      all_text: 'Categories',
      all_url: '/categories',
      accent_color: '#3b82f6',
      card_bg: '#141416',
      items: [
        { id: 1, name: 'Elden Ring', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80', url: '#', price: '249 ر.س', likes: '2.5K', dislikes: '23' },
        { id: 2, name: 'Halo Infinite', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80', url: '#', price: '199 ر.س', likes: '5K', dislikes: '123' },
        { id: 3, name: 'Life is Strange', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80', url: '#', price: '149 ر.س', likes: '1.2K', dislikes: '223' },
        { id: 4, name: 'Far Cry New Dawn', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80', url: '#', price: '180 ر.س', likes: '10K', dislikes: '323' }
      ]
    };
  }

  static styles = css`
    :host { display: block; width: 100%; box-sizing: border-box; }
    *, *::before, *::after { box-sizing: border-box; }
    .wrapper { padding: 1rem 0.5rem; width: 100%; }
    .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem; padding: 0 0.25rem; }
    .title-area { display: flex; align-items: center; gap: 0.5rem; }
    .title { font-size: 1.15rem; font-weight: 700; color: #fff; margin: 0; }
    .categories-btn { display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #a1a1aa; font-size: 0.75rem; padding: 0.35rem 0.75rem; border-radius: 0.5rem; text-decoration: none; }
    .scroll-row { display: flex; flex-wrap: nowrap; gap: 0.85rem; overflow-x: auto; padding-bottom: 0.5rem; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
    .scroll-row::-webkit-scrollbar { display: none; }
    .card-item { flex: 0 0 160px; scroll-snap-align: start; display: flex; flex-direction: column; gap: 0.4rem; }
    @media (min-width: 640px) { .card-item { flex: 0 0 185px; } }
    @media (min-width: 1024px) { .card-item { flex: 0 0 205px; } }
    .poster { position: relative; width: 100%; aspect-ratio: 4 / 5; border-radius: 1rem; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background-color: var(--card-bg, #141416); }
    .poster img { width: 100%; height: 100%; object-fit: cover; }
    .poster-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.95) 100%); }
    .card-details { position: absolute; bottom: 0.5rem; left: 0.5rem; right: 0.5rem; display: flex; flex-direction: column; gap: 0.35rem; }
    .game-name { color: #fff; font-size: 0.8rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0; }
    .action-btn { display: flex; align-items: center; justify-content: space-between; width: 100%; background: rgba(0,0,0,0.65); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.12); border-radius: 0.6rem; padding: 0.35rem 0.55rem; color: #fff; font-size: 0.68rem; text-decoration: none; }
    .actions-bar { display: flex; align-items: center; justify-content: space-between; padding: 0.15rem 0.35rem; font-size: 0.7rem; color: #71717a; }
    .stats-btn { background: transparent; border: none; color: #a1a1aa; display: inline-flex; align-items: center; gap: 0.25rem; cursor: pointer; }
    .stats-btn svg { width: 0.8rem; height: 0.8rem; fill: currentColor; }
  `;

  render() {
    const items = this.config?.items || [];
    const accent = this.config?.accent_color || '#3b82f6';
    const cardBg = this.config?.card_bg || '#141416';

    return html`
      <div class="wrapper" style="--card-bg: ${cardBg};">
        <div class="header">
          <div class="title-area">
            <h2 class="title">${this.config?.title || 'Trending games'}</h2>
          </div>
          ${this.config?.all_url ? html`
            <a href="${this.config.all_url}" class="categories-btn">
              <span>${this.config.all_text || 'Categories'}</span>
            </a>
          ` : ''}
        </div>

        <div class="scroll-row">
          ${items.map(item => html`
            <div class="card-item">
              <div class="poster">
                <img src="${item.image}" alt="${item.name}" loading="lazy" />
                <div class="poster-overlay"></div>
                <div class="card-details">
                  <p class="game-name">${item.name}</p>
                  <a href="${item.url}" class="action-btn">
                    <span>${item.price || 'View details'}</span>
                  </a>
                </div>
              </div>
              <div class="actions-bar">
                <button class="stats-btn" style="color: ${accent}">
                  <span>👍 ${item.likes || '1K'}</span>
                </button>
                <button class="stats-btn">
                  <span>👎 ${item.dislikes || '10'}</span>
                </button>
              </div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('trending-games', TrendingGames);
export default TrendingGames;
