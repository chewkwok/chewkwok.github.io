import './beyond-pages.css';

export const beyondPages = {
  travel: {
    title: 'Travel & encounters', number: '01',
    intro: 'Learning through places, people, and cultural exchange.',
    text: 'Travel is one of my interests beyond academic work. My experiences of exchange and educational outreach connect me with different cultural and learning environments.',
    items: [
      { title: 'Oxford University Outlook Programme', label: 'Academic exchange', text: 'Participated in the Literature, Language and Digital Art programme as a visiting scholar.' },
      { title: 'Xi’an, Xining & Delingha', label: 'Educational outreach', text: 'Volunteer educational outreach experience in three Chinese cities.' },
      { title: 'Lancang, Yunnan', label: 'July 2026 · Volunteer teaching', text: 'Organised and delivered an AI Creative Workshop through Beijing Normal University’s Digital Education Academy and received recognition for outstanding performance.' },
    ],
    links: [{ text: 'Experience & engagement', href: '#experience' }, { text: 'Download academic CV', href: '/Jinqiu-Guo-CV.pdf', download: true }],
  },
  cycling: {
    title: 'Cycling', number: '02',
    intro: 'Another way to explore the world beyond the studio.',
    text: 'Cycling is one of my personal interests, alongside travel, digital painting, and visiting exhibitions.',
    note: 'A cycling journal and photographs will be added to this space.',
    items: [], links: [{ text: 'Explore my creative practice', href: '#practice' }],
  },
  drawing: {
    title: 'Digital drawing & visual stories', number: '03',
    intro: 'Connecting visual imagination with research and creative education.',
    text: 'My creative practice includes illustration, digital painting, visual design, and multimedia production. These selected works offer a closer look at the relationship between making images and sharing ideas.',
    items: [
      { title: 'Engineering Wonders Through a Paintbrush', label: 'Original science picture book', text: 'Created by Jinqiu Guo, this illustrated story connects engineering knowledge with art education. Read all 62 pages in the interactive reader.', image: '/picture-book/pages/page-01.jpg', href: '#picture-book', action: 'Read the picture book' },
      { title: 'Illustration & visual design', label: 'Selected portfolio', text: 'Explore original illustration, graphic design, and creative projects in my portfolio.', image: '/portfolio/p12-img07.jpg', href: '/Jinqiu-Guo-Portfolio.pdf', action: 'Open portfolio PDF', external: true },
    ], links: [{ text: 'All practice projects', href: '#practice' }],
  },
  exhibitions: {
    title: 'Exhibitions & art practice', number: '04',
    intro: 'An interest in exhibitions, alongside my own artistic and educational practice.',
    text: 'Visiting exhibitions is one of my interests outside the studio. The links below bring together my creative projects, portfolio, and selected honours.',
    items: [
      { title: 'Selected artistic honours', label: '2024–2026', text: 'Including a First-Class Honoured Artwork at the 2026 College Students’ AI Art Season and Third Prize in the 2025 Hong Kong Digital Art and Design Competition.', href: '#honours', action: 'View selected honours' },
      { title: 'Immersive art & public learning', label: 'Creative practice', text: 'Explore virtual art education, museum learning, and the ongoing Dwelling in the Fuchun Mountains project through project descriptions and video recordings.', href: '#practice', action: 'Explore projects' },
    ], links: [{ text: 'Open portfolio PDF', href: '/Jinqiu-Guo-Portfolio.pdf', external: true }],
  },
};

export default function BeyondPage({ page }) {
  return (
    <main className="beyond-detail">
      <nav aria-label="Beyond the studio navigation"><a href="#beyond">← Beyond the studio</a><a href="#top">Jinqiu Guo</a></nav>
      <header>
        <p className="detail-eyebrow">Beyond the studio / {page.number}</p>
        <h1>{page.title}</h1>
        <p className="detail-intro">{page.intro}</p>
        <p className="detail-description">{page.text}</p>
      </header>
      <div className="beyond-detail-items">
        {page.items.map(item => <article key={item.title}>
          {item.image && <img src={item.image} alt={item.title} loading="lazy" />}
          <small>{item.label}</small><h2>{item.title}</h2><p>{item.text}</p>
          {item.href && <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}>{item.action} ↗</a>}
        </article>)}
      </div>
      {page.note && <p className="beyond-detail-note">{page.note}</p>}
      <div className="beyond-detail-links">{page.links.map(link => <a key={link.href} href={link.href} download={link.download} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}>{link.text} {link.download ? '↓' : '↗'}</a>)}</div>
      <footer><a href="#beyond">← Back to Beyond the studio</a></footer>
    </main>
  );
}
