import { useEffect, useMemo, useRef, useState } from 'react';
import awardData from './award-data.json';
import './awards-gallery.css';

const { records, honours } = awardData;
const filters = ['All', 'Research', 'Creative practice'];

export default function AwardsGallery() {
  const [filter, setFilter] = useState('All');
  const [selectedId, setSelectedId] = useState(records[0].id);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const visible = useMemo(() => records.filter(record => filter === 'All' || record.category === filter), [filter]);
  const index = Math.max(0, visible.findIndex(record => record.id === selectedId));
  const selected = visible[index];
  const move = direction => setSelectedId(visible[(index + direction + visible.length) % visible.length].id);

  useEffect(() => {
    if (window.location.hash !== '#honours') return;
    let followingAnchor = true;
    const target = document.getElementById('honours');
    const align = () => { if (followingAnchor) target.scrollIntoView({ block: 'start' }); };
    const stop = () => { followingAnchor = false; };
    const intentEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
    intentEvents.forEach(name => window.addEventListener(name, stop, { once: true, passive: true }));
    const earlierMedia = [...document.querySelectorAll('img, video')].filter(element =>
      element.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING);
    earlierMedia.forEach(element => {
      element.addEventListener('load', align);
      element.addEventListener('loadedmetadata', align);
    });
    const frame = requestAnimationFrame(align);
    return () => {
      cancelAnimationFrame(frame);
      intentEvents.forEach(name => window.removeEventListener(name, stop));
      earlierMedia.forEach(element => {
        element.removeEventListener('load', align);
        element.removeEventListener('loadedmetadata', align);
      });
    };
  }, []);

  useEffect(() => {
    const image = new Image();
    image.src = visible[(index + 1) % visible.length].image;
  }, [index, visible]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) { if (dialog.open) dialog.close(); return; }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function chooseFilter(value) {
    setFilter(value);
    setSelectedId(records.find(record => value === 'All' || record.category === value).id);
  }

  function handleKeys(event) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  }

  return (
    <section className="award-folio" id="honours" aria-labelledby="award-heading">
      <header className="award-folio-head">
        <p className="eyebrow"><span>Selected</span> Awards & honours</p>
        <p>15 selected award records<br />Research · Art · Design</p>
      </header>
      <div className="award-folio-grid">
        <div className="award-copy">
          <h2 id="award-heading">Recognition,<br /><em>in practice.</em></h2>
          <p className="award-intro">Academic writing, immersive learning and visual experimentation—recognition across research and creative practice.</p>
          <div className="award-filters" role="group" aria-label="Filter award records">
            {filters.map(value => <button key={value} type="button" aria-pressed={filter === value} onClick={() => chooseFilter(value)}>{value}<span>{value === 'All' ? records.length : records.filter(record => record.category === value).length}</span></button>)}
          </div>
          <article className="award-active-copy" aria-live="polite" aria-atomic="true">
            <p className="award-date">{selected.year} <span>/ {selected.category}</span></p>
            <h3>{selected.rank}</h3>
            <p className="award-event">{selected.event}</p>
            <p className="award-work">{selected.project}</p>
            {selected.note && <p className="award-note">{selected.note}</p>}
            <span className="award-evidence-type">{selected.evidence}</span>
          </article>
          <a className="award-cv-link" href="/Jinqiu-Guo-CV.pdf?v=awards-20261027" download>Download updated CV <span aria-hidden="true">↘</span></a>
        </div>

        <div className="award-album" role="region" aria-label="Award certificates and records" aria-roledescription="carousel" tabIndex={0} onKeyDown={handleKeys}>
          <div className="award-paper-stack">
            {[2, 1].map(depth => {
              const record = visible[(index + depth) % visible.length];
              return <img className={`award-paper-back award-paper-back-${depth}`} key={depth} src={record.image} alt="" aria-hidden="true" decoding="async" />;
            })}
            <button className="award-paper-front" type="button" onClick={() => setIsOpen(true)} aria-label={`Enlarge ${selected.evidence.toLowerCase()}: ${selected.rank}, ${selected.event}`}>
              <img key={selected.id} src={selected.image} alt={`${selected.evidence} for ${selected.rank}, ${selected.event}, ${selected.project}`} width={selected.width} height={selected.height} decoding="async" />
              <span className="award-enlarge-label">View document <span aria-hidden="true">↗</span></span>
            </button>
          </div>
          <div className="award-album-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Previous award record">←</button>
            <p aria-live="polite" aria-atomic="true"><b>{String(index + 1).padStart(2, '0')}</b><span> / {String(visible.length).padStart(2, '0')}</span></p>
            <button type="button" onClick={() => move(1)} aria-label="Next award record">→</button>
          </div>
          <div className="award-thumbnails" aria-label="Choose an award record">
            {visible.map((record, position) => <button key={record.id} type="button" aria-label={`Show award ${position + 1}: ${record.rank}, ${record.event}, ${record.project}`} aria-pressed={record.id === selected.id} onClick={() => setSelectedId(record.id)}>
              <img src={record.thumbnail} alt="" loading="lazy" decoding="async" />
              <span>{String(position + 1).padStart(2, '0')}</span>
            </button>)}
          </div>
          <p className="award-album-hint">Turn through the records · Click a document to read it in full</p>
        </div>
      </div>

      <details className="award-full-list">
        <summary>Complete honours list <span>{honours.length} entries <i aria-hidden="true">+</i></span></summary>
        <ol>{honours.map(award => <li key={award}>{award}</li>)}</ol>
      </details>

      <dialog ref={dialogRef} className="award-lightbox" aria-labelledby="award-dialog-title" onCancel={() => setIsOpen(false)} onClose={() => setIsOpen(false)} onKeyDown={handleKeys} onClick={event => { if (event.target === event.currentTarget) setIsOpen(false); }}>
        <div className="award-lightbox-inner">
          <header><div><p>{selected.evidence} / {selected.year}</p><h3 id="award-dialog-title">{selected.rank}</h3></div><button type="button" onClick={() => setIsOpen(false)} aria-label="Close enlarged award record">×</button></header>
          <div className="award-lightbox-image"><img src={selected.image} alt={`${selected.evidence}: ${selected.rank} — ${selected.event} — ${selected.project}`} /></div>
          <footer><button type="button" onClick={() => move(-1)} aria-label="Previous enlarged award record">←</button><a href={selected.original} target="_blank" rel="noopener noreferrer">Open full document ↗</a><button type="button" onClick={() => move(1)} aria-label="Next enlarged award record">→</button></footer>
        </div>
      </dialog>
    </section>
  );
}
