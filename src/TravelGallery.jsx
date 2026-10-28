import { useEffect, useState } from 'react';
import './travel-album.css';

const photographs = [
  ['01', 'Cycling', 'Jinqiu Guo with a bicycle on a city street'],
  ['02', 'By the sea', 'Jinqiu Guo beside turquoise water and small boats'],
  ['03', 'Coastal scenes', 'A beach, waterfront buildings, and the sea'],
  ['04', 'Art encounters', 'Jinqiu Guo visiting an exhibition of sculptures'],
  ['05', 'City walks', 'Jinqiu Guo beside a stone building and street signs'],
  ['06', 'Mountain landscapes', 'Jinqiu Guo in a snowy mountain landscape'],
  ['07', 'Looking at painting', 'Jinqiu Guo viewing a large painting in an art museum'],
  ['08', 'Urban details', 'Jinqiu Guo beside a historic stone building'],
  ['09', 'Street perspectives', 'Jinqiu Guo on a sloping street with a distant waterfront'],
  ['10', 'Everyday journeys', 'Jinqiu Guo beside a minibus marked Mong Kok'],
  ['11', 'Waterfront moments', 'Jinqiu Guo beside a waterfront with boats'],
  ['12', 'Above the city', 'Jinqiu Guo at an observation point overlooking a city'],
  ['13', 'Architecture & space', 'Jinqiu Guo among ornate Gothic architectural details'],
  ['14', 'Open horizons', 'Jinqiu Guo beside a vivid blue sea'],
  ['15', 'Academic exchange', 'Jinqiu Guo speaking at a lectern during an academic visit'],
  ['16', 'An evening pause', 'Jinqiu Guo standing beside a lit outdoor lamp'],
];

export default function TravelGallery() {
  const [current, setCurrent] = useState(0);
  const move = direction => setCurrent(value => (value + direction + photographs.length) % photographs.length);
  const [, title] = photographs[current];
  useEffect(() => {
    for (const offset of [1, 2, 3]) {
      const image = new Image();
      image.src = `/travel/travel-${photographs[(current + offset) % photographs.length][0]}.jpg`;
    }
  }, [current]);
  return (
    <div className="travel-album" id="travel-journal" role="region" aria-label="Travel and study visit photo album" aria-roledescription="carousel" tabIndex={0} onKeyDown={event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    }}>
      <p className="travel-album-label">A PERSONAL VISUAL JOURNAL / EUROPE & ASIA</p>
      <div className="travel-album-stack">
        {[3, 2, 1, 0].map(depth => {
          const [number, photoTitle, alt] = photographs[(current + depth) % photographs.length];
          const image = <img src={`/travel/travel-${number}.jpg`} alt={depth === 0 ? alt : ''} decoding="async" />;
          return depth === 0
            ? <a className="travel-album-layer travel-album-front" key={number} href={`/travel/travel-${number}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`View larger photo: ${photoTitle}`}>{image}</a>
            : <div className={`travel-album-layer travel-album-back-${depth}`} key={number} aria-hidden="true">{image}</div>;
        })}
      </div>
      <div className="travel-album-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous travel photograph">←</button>
        <div className="travel-album-status" aria-live="polite" aria-atomic="true"><span>{String(current + 1).padStart(2, '0')} <i>/ {photographs.length}</i></span><p>{title}</p></div>
        <button type="button" onClick={() => move(1)} aria-label="Next travel photograph">→</button>
      </div>
      <p className="travel-album-hint">Turn through the moments · Click the front photograph to enlarge</p>
    </div>
  );
}
