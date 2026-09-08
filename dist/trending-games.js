import { LitElement, html, css } from 'lit';

export default class TrendingGames extends LitElement {
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
        {
          id: 1,
          name: 'Elden Ring',
          image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
          url: '#',
          price: '249 ر.س',
          likes: '2.5K',
          dislikes: '23'
        },
        {
          id: 2,
          name: 'Halo Infinite',
          image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',
          url: '#',
          price: '199 ر.س',
          likes: '5K',
          dislikes: '123'
        },
        {
          id: 3,
          name: 'Life is Strange',
          image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
          url: '#',
          price: '149 ر.س',
          likes: '1.2K',
          dislikes: '223'
        },
        {
          id: 4,
          name: 'Far Cry New Dawn',
          image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80',
          url: '#',
          price: '180 ر.س',
          likes: '10K',
          dislikes: '323'
        }
      ]
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      box-sizing: border-box;
      font-family: inherit;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    .wrapper {
      padding: 1rem 0.5rem;
      width: 100%;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.85rem;
      padding: 0 0.25rem;
    }

    .title-area {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .title {
      font-size: 1.15rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
      letter-spacing: -0.01em;
    }

    .categories-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #a1a1aa;
      font-size: 0.75rem;
      padding: 0.35rem 0.75rem;
      border-radius: 0.5rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .categories-btn:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #ffffff;
    }

    .scroll-row {
      display: flex;
      flex-wrap: nowrap;
      gap: 0.85rem;
      overflow-x: auto;
      overflow-y: hidden;
      padding-bottom: 0.5rem;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    .scroll-row::-webkit-scrollbar {
      display: none;
    }

    .card-item {
      flex: 0 0 160px;
      scroll-snap-align: start;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    @media (min-width: 640px) {
      .card-item {
        flex: 0 0 185px;
      }
    }

    @media (min-width: 1024px) {
      .card-item {
        flex: 0 0 205px;
      }
    }

    .poster {
      position: relative;
      width: 100%;
      aspect-ratio: 4 / 5;
      border-radius: 1rem;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background-color: var(--card-bg, #141416);
      transition: transform 0.25s ease, border-color 0.25s ease;
    }

    .card-item:hover .poster {
      transform: translateY(-2px);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .poster img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      user-select: none;
    }

    .poster-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.95) 100%);
    }

    .play-badge {
      position: absolute;
      inset: 0;
      margin: auto;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 9999px;
      background: rgba(18, 18, 20, 0.65);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      pointer-events: none;
      transition: transform 0.2s ease;
    }

    .card-item:hover .play-badge {
      transform: scale(1.1);
    }

    .card-details {
      position: absolute;
      bottom: 0.5rem;
      left: 0.5rem;
      right: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .game-name {
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }

    .action-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 0.6rem;
      padding: 0.35rem 0.55rem;
      color: #ffffff;
      font-size: 0.68rem;
      font-weight: 500;
      text-decoration: none;
      transition: background 0.2s ease;
    }

    .action-btn:hover {
      background: rgba(255, 255, 255, 0.18);
    }

    .actions-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.15rem 0.35rem;
      font-size: 0.7rem;
      color: #71717a;
    }

    .stats-btn {
      background: transparent;
      border: none;
      color: #a1a1aa;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0;
      cursor: pointer;
      font-size: 0.7rem;
    }

    .stats-btn svg {
      width: 0.8rem;
      height: 0.8rem;
      fill: currentColor;
    }
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
            <svg style="width: 14px; height: 14px; fill: #71717a;" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          ${this.config?.all_url ? html`
            <a href="${this.config.all_url}" class="categories-btn">
              <svg style="width: 12px; height: 12px; fill: currentColor;" viewBox="0 0 24 24">
                <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/>
              </svg>
              <span>${this.config.all_text || 'Categories'}</span>
            </a>
          ` : ''}
        </div>

        <div class="scroll-row">
          ${items.map(
            (item) => html`
              <div class="card-item">
                <div class="poster">
                  <img src="${item.image}" alt="${item.name}" loading="lazy" />
                  <div class="poster-overlay"></div>
                  
                  <div class="play-badge">
                    <svg viewBox="0 0 24 24" style="width: 10px; height: 10px; fill: #ffffff;">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>

                  <div class="card-details">
                    <p class="game-name">${item.name}</p>
                    <a href="${item.url}" class="action-btn">
                      <span>${item.price || 'View details'}</span>
                      <svg style="width: 11px; height: 11px; fill: currentColor;" viewBox="0 0 24 24">
                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.5l-1.4-1.4 3.1-3.1H6v-2h8.7l-3.1-3.1L13 5.5l5.5 5.5z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="actions-bar">
                  <button class="stats-btn" style="color: ${accent}">
                    <svg viewBox="0 0 24 24">
                      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                    </svg>
                    <span>${item.likes || '1K'}</span>
                  </button>
                  <button class="stats-btn">
                    <svg viewBox="0 0 24 24">
                      <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/>
                    </svg>
                    <span>${item.dislikes || '10'}</span>
                  </button>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
