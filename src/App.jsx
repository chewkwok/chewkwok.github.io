import { useState } from 'react';
import './index.css';
import './cv-update.css';
import PictureBook from './PictureBook';
import VrPractice from './VrPractice';
import AcademicExchange from './AcademicExchange';
import TeachingPractice from './TeachingPractice';
import TravelGallery from './TravelGallery';
import ProjectVideo from './ProjectVideo';
import AwardsGallery from './AwardsGallery';

const researchNodes = [
  ['AI-Generated Moving Images', 'AIGC · narrative', 'node node-a'],
  ['Film & Screen Studies', 'media theory · post-cinema', 'node node-b'],
  ['Chinese Sci-Fi Cinema', 'space · cultural identity', 'node node-c'],
  ['Digital Visual Culture', 'technology · philosophy', 'node node-d'],
  ['VR & Art Education', 'immersive learning · digitisation', 'node node-e'],
];

const researchProjects = [
  ['2025', 'Five-Dimensional Evaluation System for Art Appreciation Courses', 'National Social Science Fund of China · Major Project in Art Studies'],
  ['2024', 'Innovation in Chinese Digital and New Media Arts', 'National Social Science Fund of China · Digital New Media Visual Arts sub-project'],
  ['2022', 'Public Cultural Service Facilities and Equipment for People with Disabilities', 'National Key R&D Programme · Film accessibility and implementation support'],
  ['2022', 'Virtual Simulation Teaching for Appreciation of Visual Art', 'Curriculum System Reform Programme · Course design and practical teaching'],
];

const projects = [
  {
    no: '01', year: '2025—ongoing', type: 'Immersive Art Education · AI',
    title: 'Stepping into Dwelling in the Fuchun Mountains',
    copy: 'An immersive learning environment that turns a canonical handscroll into a space for seeing, learning, creating, and reflecting. This project remains in production, integrating virtual reality and volumetric-video digital human technologies. I lead course content, visual and interaction design, and the AI image-generation component.',
    role: 'Course design · Visual direction · Interaction · Model development',
    image: '/portfolio/p07-img01.jpg', video: '/fuchun-mountains-work-in-progress.mp4', alt: 'Immersive digital installation inspired by Dwelling in the Fuchun Mountains',
  },
  {
    no: '02', year: '2022—2023', type: 'Virtual Simulation · Museum Learning',
    title: 'Roaming Learning in Art Museums',
    copy: 'A virtual museum course integrating film, music, dance, and visual art. The linear, exploratory experience uses digital environments to develop aesthetic perception through situated learning.',
    role: 'Content design · Production · Implementation',
    image: '/portfolio/p05-img01.jpg', video: '/roaming-learning-art-museums-web.mp4', alt: 'Virtual simulation of the Shanghai Film Museum',
  },
  {
    no: '03', year: '2023—2024', type: 'VR · Public Engagement',
    title: 'Tiananmen Aesthetic Education Course',
    copy: 'A Pico-based VR course built around a 1:1 digital twin, guided interpretation, spatial exploration, and game-based interaction. I led content, script, instructional, and gamification design and supported its national outreach.',
    role: 'Lead content · Script · Gamification · Teaching design',
    image: '/portfolio/p06-img01.jpg', video: '/tiananmen-aesthetic-course-web.mp4', alt: 'Scenes and interfaces from a VR aesthetic education course',
  },
];

const publications = [
  { year:'2026', kind:'Journal article', title:'From the Anthropocene to AIGW: The Narrative Autonomy of Generative Imagery', meta:'Film Review, 1, 47–58', tags:['Generative images','Narrative autonomy','AIGW'], pdf:'/papers/anthropocene-to-aigw.pdf', englishPdf:'/papers/anthropocene-to-aigw-english.pdf' },
  { year:'2025', kind:'Journal article · Co-authored', title:'On the “Plasmaticness” of Animation in the Context of AIGC', meta:'Film Art, 3', tags:['Animation','AIGC','Plasmaticness'], pdf:'/papers/aigc-animation-plasmaticness.pdf', englishPdf:'/papers/aigc-animation-plasmaticness-english.pdf' },
  { year:'2025', kind:'Journal article · Co-authored', title:'AIGC Technology and the Digital “Rebirth” of China\'s Fine Traditional Culture', meta:'Movie Review, 23', tags:['Cultural heritage','Digital rebirth','AIGC'], pdf:'/papers/aigc-traditional-culture.pdf', englishPdf:'/papers/aigc-traditional-culture-english.pdf' },
  { year:'2022', kind:'Journal article · Co-authored', title:'Technological Development, Evolving Themes, and Cultural Expression in Chinese Science Fiction Cinema, 2011-2021', meta:'Forum of Arts, 6', tags:['Science fiction','Chinese cinema','Technology'], pdf:'/papers/chinese-science-fiction-cinema-2011-2021.pdf', englishPdf:'/papers/chinese-science-fiction-cinema-2011-2021-english.pdf' },
  { year:'2022', kind:'Journal article · Co-authored', title:'Intersections, Integration, and Diversity: Multidimensional Perspectives on Film Studies', subtitle:'A Review of the International Young Scholars Forum at the Beijing International Film Festival\'s 29th Beijing College Student Film Festival', meta:'Movie Review, 11', tags:['Film studies','Academic forum','Review'], pdf:'/papers/film-studies-multidimensional-perspectives.pdf', englishPdf:'/papers/film-studies-multidimensional-perspectives-english.pdf' },
  { year:'2022', kind:'Journal article · Co-authored', title:'The “Bipolar Disorder” of Social Discourse: The Fan Phenomenon and Its Cultural Symptoms under Digital Capitalism', meta:'Movie Review, 7', tags:['Fandom','Digital capitalism','Discourse'], pdf:'/papers/fandom-digital-capitalism.pdf', englishPdf:'/papers/fandom-digital-capitalism-english.pdf' },
  { year:'2024', kind:'Master’s thesis', title:'Spatial Images in Chinese Science Fiction Films since the New Century, 2000–2024', meta:'Beijing Normal University', tags:['Cinematic space','Science fiction','Visual culture'], pdf:'/papers/masters-thesis-cinematic-space.pdf' },
];

const timeline = [
  ['2024—Present','Northeastern University','PhD Candidate in Art Studies · First-Class Academic Scholarship, 2024 & 2025'],
  ['2021—2024','Beijing Normal University','Master of Broadcasting and Television · Second-Class Scholarship, 2022–2023'],
  ['2017—2021','Shandong Normal University','BA in Economics · A foundation in media economies and cultural systems'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="bn-hero" id="top">
        <div className="bn-glow" aria-hidden="true" />
        <div className="bn-grid" aria-hidden="true"><i /><i /><i /></div>

        <nav className="bn-nav bn-fade-down" aria-label="Primary navigation">
          <div className="bn-nav-group bn-desktop"><a href="#about">About</a><a href="#research">Research</a><a href="#practice">Projects</a></div>
          <a className="bn-mobile-logo" href="#top">Jinqiu<br />Guo</a>
          <div className="bn-nav-group bn-desktop"><a href="#publications">Writing</a><a href="/Jinqiu-Guo-CV.pdf?v=awards-20261027" download>CV</a><a href="#contact">Contact <b>↗</b></a></div>
          <button className="bn-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? '×' : '☰'}</button>
        </nav>

        <div className={`bn-mobile-menu ${menuOpen ? 'is-open' : ''}`}>
          {['About','Research','Practice','Publications','Contact'].map((item) => <a key={item} href={`#${item === 'Publications' ? 'publications' : item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </div>

        <div className="bn-name bn-fade">Jinqiu Guo</div>

        <a className="bn-portrait bn-scale" href="#about" aria-label="About Jinqiu Guo">
          <div className="bn-portrait-halo" />
          <img src="/hero-portrait-original-v1.jpg" alt="Jinqiu Guo seated beside a wooden table" />
          <strong className="bn-portrait-hover">About Me <i>↘</i></strong>
          <span>ARTIST · RESEARCHER · EDUCATOR</span>
        </a>

        <div className="bn-bottom-index bn-fade-up" aria-hidden="true">
          <small>RESEARCH CONSTELLATION / 2026</small>
          <div>
            <span><b>01</b> VISUAL CULTURE</span>
            <i>✦</i>
            <span><b>02</b> GENERATIVE MEDIA</span>
            <i>✦</i>
            <span><b>03</b> ART EDUCATION</span>
          </div>
        </div>

        <a className="bn-portal bn-research bn-fade-up" href="#research">
          <h2>Research atlas</h2>
          <p>Researching how intelligent media reshapes visual culture, creation, and learning.</p>
          <span aria-hidden="true">↗</span>
        </a>

        <a className="bn-portal bn-practice bn-fade-up" href="#practice">
          <h2>Explore Practice</h2>
          <p>Selected creative projects connecting research, moving images, and public learning.</p>
          <span aria-hidden="true">↗</span>
        </a>

        <div className="bn-cv-mark bn-fade-up" aria-hidden="true">
          <strong>CV</strong>
          <p>CURRICULUM VITAE<br />ACADEMIC PROFILE · 2026</p>
        </div>

        <a className="bn-awards bn-fade-up" href="#honours" aria-label="View 21 honours and 15 selected award records"><strong>[21]</strong><p>SELECTED<br />AWARDS<br />& HONORS</p></a>
        <div className="bn-academic bn-fade-up" aria-label="Academic background">
          <div className="bn-academic-current">
            <p className="bn-academic-label">CURRENT DOCTORAL STUDY · 2024–PRESENT</p>
            <a className="bn-academic-degree" href="#about">PhD in Art Studies<br /><span>In progress</span> ↗</a>
            <a className="bn-academic-university" href="https://www.neu.edu.cn/xygk/xxjj.htm" target="_blank" rel="noopener noreferrer">Northeastern University, China</a>
            <p className="bn-academic-context">A national key university in China<br />Project 985 · Double First-Class Initiative</p>
          </div>
          <div className="bn-academic-previous">
            <p className="bn-academic-label">MASTER’S DEGREE · 2021–2024</p>
            <a className="bn-academic-masters" href="#about">Master of Broadcasting<br />and Television ↗</a>
            <a className="bn-academic-university" href="https://english.bnu.edu.cn/" target="_blank" rel="noopener noreferrer">Beijing Normal University</a>
            <p className="bn-academic-context">A comprehensive research university in China<br />Project 985 · Double First-Class Initiative</p>
          </div>
        </div>

        <a className="bn-portal bn-writing bn-fade-up" href="#publications">
          <h2>Selected Writing</h2>
          <p>Selected articles on generative images, visual culture, and art education.</p>
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="about section-pad" id="about">
        <header className="section-head"><p className="eyebrow"><span>02</span> About</p><p className="section-kicker">Research as a way of making.<br />Making as a way of thinking.</p></header>
        <div className="about-grid">
          <h2>Reading images across <em>film, technology, and culture.</em></h2>
          <div className="about-copy">
            <p>I am a PhD candidate in Art Studies whose work brings film and screen studies into conversation with media theory, cultural studies, and the philosophy of technology.</p>
            <p>My research examines AI-generated moving images, Chinese science-fiction cinema, post-cinema, digital visual culture, virtual reality, digital art education, and traditional culture digitisation. Alongside academic research, I contribute to funded projects, virtual-simulation teaching, and public-facing creative education.</p>
            <div className="about-links"><a href="/Jinqiu-Guo-CV.pdf?v=awards-20261027" download>Download CV ↓</a><a href="/Jinqiu-Guo-Portfolio.pdf" target="_blank">View portfolio ↗</a></div>
          </div>
        </div>
        <div className="education-list">
          {timeline.map(([date,place,detail]) => <article key={place}><time>{date}</time><h3>{place}</h3><p>{detail}</p></article>)}
        </div>
      </section>

      <section className="atlas section-pad dark-section" id="research">
        <header className="section-head"><p className="eyebrow"><span>03</span> Research atlas</p><p className="section-kicker">Five connected inquiries.<br />One evolving practice.</p></header>
        <div className="atlas-layout">
          <div className="atlas-intro"><h2>Screen culture in the age of<br /><em>intelligent media</em>.</h2><p>I examine how moving images generate, circulate, teach, and respond—reshaping authorship, narrative, perception, cultural identity, and learning.</p></div>
          <div className="atlas-map" aria-label="Map of five research themes">
            <div className="atlas-lines" aria-hidden="true" />
            <div className="atlas-center"><small>CORE INQUIRY</small><strong>ART ×<br />INTELLIGENCE</strong></div>
            {researchNodes.map(([title,detail,className],index) => <article className={`atlas-node atlas-${index+1}`} key={title}><b>0{index+1}</b><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
        </div>
        <div className="research-project-list" aria-label="Selected funded research projects">
          {researchProjects.map(([year,title,detail]) => <article key={title}><time>{year}</time><h3>{title}</h3><p>{detail}</p></article>)}
        </div>
      </section>

      <section className="projects section-pad" id="practice">
        <header className="section-head"><p className="eyebrow"><span>04</span> Research through practice</p><p className="section-kicker">Selected projects<br />2022—2026</p></header>
        <div className="project-list">
          {projects.map((project,index) => <article className={`project project-${index+1}`} key={project.title}>
            <div className="project-image">
              {project.video
                ? <ProjectVideo src={`/project-video/${['fuchun', 'museum', 'tiananmen'][index]}/index.m3u8`} poster={project.image} title={project.title} />
                : <img src={project.image} alt={project.alt} />}
              <span>{project.no} / {project.year}</span>
            </div>
            <div className="project-content"><p className="project-type">{project.type}</p><h2>{project.title}</h2><p className="project-copy">{project.copy}</p><p className="project-role"><b>My role</b>{project.role}</p></div>
          </article>)}
        </div>
        <VrPractice />
        <PictureBook />
        <div className="image-ribbon" id="visual-design" aria-label="Additional creative work">
          <figure><img src="/portfolio/p08-img03.jpg" alt="AI-generated Chinese silk ink painting" /><figcaption>Fine-tuned image model · 2025</figcaption></figure>
          <figure><img src="/portfolio/p10-img06.jpg" alt="Student AI artwork combining Van Gogh and virtual reality" /><figcaption>AI Creator training camp · 2025</figcaption></figure>
          <figure><img src="/portfolio/p12-img07.jpg" alt="Original illustrated artwork with the text Girls Can Do Anything" /><figcaption>Original illustration</figcaption></figure>
          <figure><img src="/portfolio/p13-img05.jpg" alt="Cultural product and IP design" /><figcaption>Graphic & product design</figcaption></figure>
        </div>
      </section>

      <section className="publications section-pad" id="publications">
        <header className="section-head"><p className="eyebrow"><span>05</span> Selected writing</p><p className="section-kicker">Journal articles,<br />interviews & theses</p></header>
        <div className="publication-intro"><h2>Writing about images as <em>living systems</em>.</h2><p>My academic work traces how images move between technology, narrative, culture, and social life—from Chinese science fiction cinema to generative visual media.</p></div>
        <div className="publication-list">
          {publications.map((pub,index) => <article key={pub.title}>
            <div className="pub-index">{String(index+1).padStart(2,'0')}</div><div className="pub-year">{pub.year}</div>
            <div className="pub-main">
              <p>{pub.kind}</p><h3>{pub.title}</h3>
              {pub.subtitle && <p className="pub-subtitle">{pub.subtitle}</p>}
              <span>{pub.meta}</span><div className="tags">{pub.tags.map(tag=><i key={tag}>{tag}</i>)}</div>
              <div className="pub-language-actions">
                <div><a className="pub-status" href={pub.pdf} download aria-label={`Download Chinese original PDF: ${pub.title}`}>Chinese original · PDF ↓</a><a className="pub-read" href={pub.pdf} target="_blank" rel="noopener noreferrer" aria-label={`Read Chinese original: ${pub.title}`}>Read ↗</a></div>
                {pub.englishPdf && <div><a className="pub-status" href={pub.englishPdf} download aria-label={`Download English translation PDF: ${pub.title}`}>English translation · PDF ↓</a><a className="pub-read" href={pub.englishPdf} target="_blank" rel="noopener noreferrer" aria-label={`Read English translation: ${pub.title}`}>Read ↗</a></div>}
              </div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="experience section-pad dark-section" id="experience">
        <header className="section-head"><p className="eyebrow"><span>06</span> Experience & engagement</p><p className="section-kicker">From the research lab<br />to the public sphere</p></header>
        <AcademicExchange />
        <TeachingPractice />
        <div className="experience-grid">
          <article><time>Apr—Jul 2026</time><h3>Sohu.com Inc.</h3><p className="role">Content Marketing Specialist</p><p>Planned academic and arts-media interviews, coordinated invited guests, directed large-scale event coverage, hosted and edited film-themed videos, and produced AI-generated animation for official channels.</p></article>
          <article><time>Apr—Jul 2023</time><h3>ByteDance · Doubao</h3><p className="role">AI Content Editor</p><p>Contributed to dialogue-corpus development and content-quality evaluation for Doubao, reviewing model outputs for accuracy, logical consistency, compliance, and persona coherence.</p></article>
          <article><time>Nov 2021—Nov 2022</time><h3>Beijing International Film Festival</h3><p className="role">Academic Department · 29th College Student Film Festival</p><p>Supported screenings, forums, academic materials, poster and stage coordination, guest interviews, reception, and on-site management for young scholar and filmmaker events.</p></article>
          <article><time>Jul—Aug 2025</time><h3>BNU Art Discipline Community</h3><p className="role">Instructor · Excellent Instructor Honour</p><p>Guided the AI Creator Art Creativity Training Camp, supporting creative learning and multimodal artistic practice for school-age participants.</p></article>
        </div>
        <div className="engagement-marquee"><span>Oxford University Outlook Programme · Visiting Scholar</span><span>Educational outreach · Xi’an, Xining & Delingha</span><span>AI Creative Workshop · Lancang, Yunnan · 2026</span><span>Film festival production</span></div>
        <AwardsGallery />
      </section>

      <section className="capabilities section-pad" id="capabilities">
        <header className="section-head"><p className="eyebrow"><span>07</span> Capabilities</p><p className="section-kicker">Thinking, making,<br />teaching, connecting</p></header>
        <div className="capability-grid">
          <article><span>01</span><h3>Research</h3><p>Academic writing · Film and visual analysis · Interdisciplinary inquiry · Research communication</p><a className="capability-link" href="#publications" aria-label="Research: view publications and full-text papers">View selected writing <b aria-hidden="true">↗</b></a></article>
          <article><span>02</span><h3>Fine Arts & Multimedia</h3><p>Fine arts practice · Multimedia production · Photography · Videography · Editing · Visual storytelling</p><a className="capability-link" href="#practice" aria-label="Fine Arts and Multimedia: view creative projects and videos">Explore creative projects <b aria-hidden="true">↗</b></a></article>
          <article><span>03</span><h3>Visual Design</h3><p>Visual design · Digital image creation · AI-assisted creative practice · Virtual-simulation course design</p><a className="capability-link" href="#visual-design" aria-label="Visual Design: view illustrations and design works">View visual works <b aria-hidden="true">↗</b></a></article>
          <article><span>04</span><h3>Teaching & Planning</h3><p>Academic, artistic and cultural project planning · Art, media and creative-practice teaching · Public engagement</p><a className="capability-link" href="#teaching" aria-label="Teaching and Planning: view classroom teaching and educational outreach">View teaching & experience <b aria-hidden="true">↗</b></a></article>
        </div>
        <div className="language-line"><p><b>Languages</b> Mandarin Chinese / Native · English / IELTS Academic 6.5</p><p><b>Personality</b> ENFJ · Collaborative · Curious · People-centred</p></div>
      </section>

      <section className="beyond section-pad" id="beyond">
        <div className="beyond-copy">
          <p className="eyebrow"><span>08</span> Beyond the studio</p><h2>I collect ways of <em>seeing</em>.</h2>
          <p className="beyond-travel-summary">I have travelled to more than ten countries across Europe and Asia. Alongside my academic exchange experience, these journeys have introduced me to different cultures, landscapes, museums, and ways of everyday life.</p>
          <p className="beyond-interests">Beyond research, I enjoy cycling, digital painting, visiting exhibitions, and discovering new places. From looking closely at a painting to exploring a city by bicycle, these interests keep me curious about images, spaces, and the people who inhabit them. As an ENFJ, I value conversation, collaboration, and meeting people with different perspectives.</p>
          <span className="beyond-travel-stat">10+ COUNTRIES · EUROPE & ASIA · ALWAYS CURIOUS</span>
        </div>
        <TravelGallery />
      </section>

      <footer id="contact">
        <p className="eyebrow"><span>09</span> Contact</p>
        <h2>Let’s begin a<br /><em>conversation.</em></h2>
        <a className="email" href="mailto:chewkwok@163.com">chewkwok@163.com <span>↗</span></a>
        <div className="contact-wechat"><span>WeChat</span><strong>Chew_Kwok</strong></div>
        <div className="footer-bottom"><p>Open to visiting research, academic exchange, and creative collaboration.</p><div><a href="/Jinqiu-Guo-CV.pdf?v=awards-20261027" download>CV ↓</a><a href="/Jinqiu-Guo-Portfolio.pdf" target="_blank">Portfolio ↗</a><a href="#top">Back to top ↑</a></div></div>
      </footer>
    </main>
  );
}
