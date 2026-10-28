import './vr-practice.css';

const photos = [
  { file: '01', title: 'VR project showcase', caption: 'Presenting immersive course content alongside the VR demonstration setup.', alt: 'Jinqiu Guo beside a VR project exhibition stand and headset display', layout: 'showcase' },
  { file: '02', title: 'Digital-human practice', caption: 'Working with a digital-human scene as part of immersive-media practice.', alt: 'Jinqiu Guo at a workstation displaying a digital-human scene', layout: 'workstation' },
  { file: '03', title: 'Engaging with visitors', caption: 'Introducing the headset and discussing the VR experience with exhibition visitors.', alt: 'Jinqiu Guo holding a VR headset while speaking with visitors at an exhibition', layout: 'visitors' },
  { file: '04', title: 'Experiencing spatial media', caption: 'Exploring immersive interfaces through hands-on headset use.', alt: 'Jinqiu Guo wearing a spatial-computing headset in a media workspace', layout: 'headset' },
];

export default function VrPractice() {
  return (
    <section className="vr-fieldwork" id="vr-fieldwork" aria-labelledby="vr-fieldwork-heading">
      <header className="vr-fieldwork-intro">
        <div><p className="project-type">Practice in context · VR & immersive media</p><h2 id="vr-fieldwork-heading">From the lab to<br /><em>public engagement.</em></h2></div>
        <div>
          <p>My VR practice brings together immersive-media exploration, digital-human content, and public-facing demonstrations.</p>
          <p>These on-site photographs document my involvement in workstation-based practice, headset experiences, and conversations with exhibition visitors. They connect my research in visual culture and art education with the practical work of presenting immersive experiences to audiences.</p>
          <small>Click a photograph to view it at a larger size ↗</small>
        </div>
      </header>
      <div className="vr-fieldwork-gallery">
        {photos.map(photo => <figure className={`vr-photo vr-photo-${photo.layout}`} key={photo.file}>
          <a href={`/vr-practice/vr-practice-${photo.file}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`View larger photo: ${photo.title}`}>
            <img src={`/vr-practice/vr-practice-${photo.file}.jpg`} alt={photo.alt} loading="lazy" decoding="async" width={photo.file === '01' || photo.file === '03' ? 1500 : 2000} height={photo.file === '01' || photo.file === '03' ? 2000 : 1500} />
            <span aria-hidden="true">↗</span>
          </a>
          <figcaption><b>{photo.title}</b><p>{photo.caption}</p></figcaption>
        </figure>)}
      </div>
    </section>
  );
}
