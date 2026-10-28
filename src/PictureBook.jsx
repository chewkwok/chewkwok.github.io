import { useEffect, useRef, useState } from 'react';
import './picture-book.css';

const PAGE_COUNT = 62;
const pageUrl = page => `/picture-book/pages/page-${String(page).padStart(2, '0')}.jpg`;

export default function PictureBook() {
  const [page, setPage] = useState(1);
  const [loadedPage, setLoadedPage] = useState(null);
  const reader = useRef(null);
  const previous = () => setPage(value => Math.max(1, value - 1));
  const next = () => setPage(value => Math.min(PAGE_COUNT, value + 1));

  useEffect(() => {
    if (page < PAGE_COUNT) {
      const preload = new Image();
      preload.src = pageUrl(page + 1);
    }
  }, [page]);

  const expand = async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (reader.current?.requestFullscreen) await reader.current.requestFullscreen();
    else window.open(pageUrl(page), '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="picture-book-project" id="picture-book">
      <div className="picture-book-intro">
        <div>
          <p className="project-type">04 / Original picture book · STEM & art education</p>
          <h2>Engineering Wonders<br /><em>Through a Paintbrush</em></h2>
        </div>
        <div className="picture-book-copy">
          <p>An original Chinese-language science picture book created by Jinqiu Guo, bringing engineering discovery into dialogue with artistic imagination.</p>
          <p>Following a young artist and his robotic companion, the story invites children to explore China’s engineering heritage. Its Three Gorges Dam chapter introduces gravity-dam structures, flood regulation, hydropower, ship locks, and ship lifts through illustrated storytelling. Drawing becomes a way to observe, question, and understand the science behind large-scale engineering.</p>
          <p className="picture-book-credit"><b>Created by Jinqiu Guo</b><span>STEM learning · Visual storytelling · Art education</span></p>
        </div>
      </div>

      <div className="picture-book-reader" ref={reader} role="region" aria-label="Interactive picture book reader" tabIndex={0} onKeyDown={event => {
        if (event.key === 'ArrowRight' && event.target.tagName !== 'SELECT') { event.preventDefault(); next(); }
        if (event.key === 'ArrowLeft' && event.target.tagName !== 'SELECT') { event.preventDefault(); previous(); }
      }}>
        <div className="picture-book-toolbar">
          <span>THE READING ROOM <i>Chinese-language original</i></span>
          <div>
            <button onClick={() => setPage(1)}>Cover</button>
            <button onClick={() => setPage(33)}>Three Gorges chapter ↗</button>
            <button onClick={expand} aria-label="Expand picture book reader">Expand ⤢</button>
          </div>
        </div>
        <div className="picture-book-stage" aria-busy={loadedPage !== page}>
          <img key={page} src={pageUrl(page)} width="2000" height="1000" alt={`Engineering Wonders Through a Paintbrush — original PDF page ${page} of ${PAGE_COUNT}`} onLoad={() => setLoadedPage(page)} />
        </div>
        <div className="picture-book-controls">
          <button onClick={previous} disabled={page === 1} aria-label="Previous picture book page">← <span>Previous</span></button>
          <label>Page <select aria-label="Select picture book page" value={page} onChange={event => setPage(Number(event.target.value))}>{Array.from({length: PAGE_COUNT}, (_, i) => <option key={i} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>)}</select><span aria-live="polite"> / {PAGE_COUNT}</span></label>
          <button onClick={next} disabled={page === PAGE_COUNT} aria-label="Next picture book page"><span>Next</span> →</button>
        </div>
        <div className="picture-book-progress" aria-hidden="true"><span style={{width: `${page / PAGE_COUNT * 100}%`}} /></div>
      </div>
      <p className="picture-book-note">Explore all 62 pages using the arrows or page selector. <a href="/picture-book/engineering-wonders.pdf" target="_blank" rel="noopener noreferrer">Open original PDF ↗</a></p>
    </article>
  );
}
