import './teaching-practice.css';

const photos = [
  ['01', 'Teaching in the classroom', 'Leading a session with school students in a computer classroom.', 'Jinqiu Guo teaching at the front of a school computer classroom', 1500, 2000],
  ['02', 'Learning through digital environments', 'Students exploring digital exhibition spaces as part of classroom learning.', 'Students working with virtual gallery environments on desktop computers', 2000, 1500],
  ['03', 'Art appreciation in practice', 'Bringing visual observation and digital exploration into the classroom.', 'A computer classroom with students viewing artworks in a virtual museum environment', 1500, 2000],
  ['04', 'Individual guidance', 'Supporting a learner through a hands-on digital activity.', 'Jinqiu Guo leaning beside a student to provide guidance during a computer-based activity', 2000, 1499],
  ['05', 'Explaining & encouraging', 'Sharing ideas and guiding discussion with learners.', 'Jinqiu Guo speaking and gesturing during a group teaching session', 2000, 1499],
  ['06', 'Collaborative learning', 'A classroom setting for shared exploration and digital practice.', 'Learners working together at laptops in a classroom', 2000, 1500],
];

export default function TeachingPractice() {
  return (
    <section className="teaching-practice" id="teaching" aria-labelledby="teaching-title">
      <header>
        <div><p className="teaching-label">Teaching & educational outreach</p><h2 id="teaching-title">Across classrooms<br /><em>& communities.</em></h2></div>
        <div className="teaching-intro">
          <p>My teaching spans volunteer outreach in Yunnan and Qinghai, general education courses at Beijing Normal University, and classes at schools affiliated with the university.</p>
          <p>Across these settings, I bring art, digital media, and creative practice into learning. The photographs show classroom teaching, individual guidance, and group activities, connecting my interest in digital art education with direct engagement with learners.</p>
        </div>
      </header>
      <div className="teaching-contexts">
        <article><small>01 / Educational outreach</small><h3>Yunnan & Qinghai</h3><p>Volunteer teaching in local communities, including the AI Creative Workshop delivered in Lancang, Yunnan, in July 2026.</p></article>
        <article><small>02 / Higher education</small><h3>Beijing Normal University</h3><p>Teaching in general education courses, connecting art appreciation with digital-media learning experiences.</p></article>
        <article><small>03 / School education</small><h3>BNU-affiliated schools</h3><p>Classroom teaching and guided creative activities for school students.</p></article>
      </div>
      <div className="teaching-gallery">
        {photos.map(([number, title, caption, alt, width, height]) => <figure key={number}>
          <a href={`/teaching/teaching-${number}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`View larger teaching photograph: ${title}`}>
            <img src={`/teaching/teaching-${number}.jpg`} width={width} height={height} alt={alt} loading="lazy" decoding="async" />
            <span aria-hidden="true">↗</span>
          </a>
          <figcaption><b>{title}</b><p>{caption}</p></figcaption>
        </figure>)}
      </div>
      <div className="teaching-links"><a href="#picture-book">Explore my educational picture book ↗</a><a href="#vr-fieldwork">View immersive-media practice ↗</a></div>
    </section>
  );
}
