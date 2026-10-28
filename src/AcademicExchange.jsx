import './academic-exchange.css';

const photos = [
  ['01', 'Presenting & discussing', 'Sharing research through presentations and conference discussion.', 'A two-photo montage of Jinqiu Guo participating in academic discussions and giving a presentation', 1503, 2000],
  ['02', 'Questions of AI imagery', 'Discussing generative imagery, perception, and embodied experience.', 'A conference montage showing Jinqiu Guo’s name card and a presentation slide about perception and AI imagery', 1501, 2000],
  ['03', 'Scholarly exchange', 'Speaking and listening in dialogue with fellow participants.', 'A two-photo montage of Jinqiu Guo speaking into a conference microphone and listening to a discussion', 1500, 2000],
  ['04', 'Developing an argument', 'Explaining ideas in an academic meeting setting.', 'Jinqiu Guo gesturing while speaking behind a laptop at a conference table', 2000, 1333],
  ['05', 'Listening & reflecting', 'Taking notes and engaging with the ideas of other researchers.', 'Jinqiu Guo listening and taking notes alongside other conference participants', 2000, 1333],
  ['06', 'AI imagery & animation', 'Presenting research on AI imagery and animation.', 'Jinqiu Guo presenting beside a screen displaying a talk about AI imagery and animation', 2000, 1333],
];

export default function AcademicExchange() {
  return (
    <section className="academic-exchange" id="academic-exchange" aria-labelledby="academic-exchange-title">
      <header>
        <div><p className="academic-exchange-label">Conferences & academic exchange</p><h2 id="academic-exchange-title">Research<br /><em>in dialogue.</em></h2></div>
        <div className="academic-exchange-intro">
          <p>Conferences are an important part of how I share research, test ideas, and learn from other scholars.</p>
          <p>These photographs document my participation in academic presentations and discussions, including work on AI-generated imagery and animation. They reflect the exchange between individual research, critical dialogue, and collaborative inquiry.</p>
          <a href="#publications">Explore my publications ↗</a>
        </div>
      </header>
      <div className="academic-exchange-gallery">
        {photos.map(([number, title, caption, alt, width, height]) => <figure key={number}>
          <a href={`/conferences/conference-${number}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`View larger conference photograph: ${title}`}>
            <img src={`/conferences/conference-${number}.jpg`} width={width} height={height} alt={alt} loading="lazy" decoding="async" />
            <span aria-hidden="true">↗</span>
          </a>
          <figcaption><b>{title}</b><p>{caption}</p></figcaption>
        </figure>)}
      </div>
      <p className="academic-exchange-note">Selected moments from academic meetings. Click a photograph to view it at a larger size.</p>
    </section>
  );
}
