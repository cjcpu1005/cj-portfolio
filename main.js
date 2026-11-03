// CUSTOMIZE YOUR SITE HERE: update the name, email, social links, and project details.
const profile = {
  name: 'YOUR NAME',
  role: 'Videographer & Visual Designer',
  email: 'hello@example.com',
  instagram: 'https://instagram.com/',
  behance: 'https://behance.net/',
  intro: 'I make visuals that feel like something.',
  about: 'I’m a visual storyteller working across film, motion, and graphic design. I believe the best work makes people pause, feel, and remember.'
};
// For video projects, add a video URL (MP4) or YouTube embed URL in the `video` field.
// Replace image URLs with your own hosted project thumbnails.
const projects = [
  {id:'01', title:'AFTER HOURS',category:'Film / Visual Storytelling',type:'video',year:'2026',image:'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&q=85',description:'A cinematic exploration of the moments that happen after the world slows down.',video:''},
  {id:'02', title:'FORM & FEELING',category:'Graphic Design / Editorial',type:'design',year:'2026',image:'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1400&q=85',description:'A visual study of expressive typography, composition, and form.'},
  {id:'03', title:'IN MOTION',category:'Film / Documentary',type:'video',year:'2025',image:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1400&q=85',description:'Finding movement, meaning, and texture in everyday life.',video:''},
  {id:'04', title:'THE NEW ISSUE',category:'Graphic Design / Publication',type:'design',year:'2025',image:'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1400&q=85',description:'An editorial concept balancing bold layouts and considered visual hierarchy.'},
  {id:'05', title:'STILL / MOVING',category:'Film / Creative Direction',type:'video',year:'2025',image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1400&q=85',description:'A visual experiment in rhythm, light, and storytelling.',video:''},
  {id:'06', title:'COLOR STUDIES',category:'Graphic Design / Identity',type:'design',year:'2025',image:'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1400&q=85',description:'A playful identity exploration driven by color and geometric composition.'}
];
const escapeHTML = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const app = document.querySelector('#app');
app.innerHTML = `
<header class="site-header"><a class="brand" href="#top">FRAME<span class="brand-dot">●</span></a><nav aria-label="Main navigation"><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#contact">CONTACT ↗</a></nav></header>
<main id="top">
<section class="hero"><div class="hero-top"><span>INDEPENDENT CREATIVE PORTFOLIO</span><span>AVAILABLE FOR COLLABORATIONS <i class="status-dot"></i></span></div><div class="hero-content"><p class="eyebrow">FILM. DESIGN. EVERYTHING IN BETWEEN.</p><h1>MADE TO<br><em>BE FELT.</em></h1><div class="hero-bottom"><p>${escapeHTML(profile.intro)}<br><span>${escapeHTML(profile.role)}</span></p><a href="#work" class="round-arrow" aria-label="View selected work">↘</a></div></div><div class="hero-image" role="img" aria-label="Cinematic abstract backdrop"></div><div class="hero-index">SCROLL TO EXPLORE <span>↓</span></div></section>
<section class="work section" id="work"><div class="section-head"><div><p class="eyebrow">01 / PORTFOLIO</p><h2>SELECTED <em>WORK.</em></h2></div><p class="section-aside">A COLLECTION OF MOVING IMAGES<br>AND VISUAL IDEAS.</p></div><div class="filters" role="group" aria-label="Filter projects"><button class="filter active" data-filter="all">ALL WORK <sup>06</sup></button><button class="filter" data-filter="video">VIDEOGRAPHY</button><button class="filter" data-filter="design">GRAPHIC DESIGN</button></div><div class="projects" id="projects"></div></section>
<section class="statement"><p class="eyebrow">THE WAY I SEE IT</p><p>GOOD VISUALS CATCH YOUR EYE.<br><em>GREAT ONES STAY WITH YOU.</em></p><span>↗ ALWAYS LOOKING FOR THE NEXT STORY</span></section>
<section class="about section" id="about"><div class="section-head"><div><p class="eyebrow">02 / THE PERSON BEHIND THE WORK</p><h2>ABOUT <em>ME.</em></h2></div></div><div class="about-grid"><div class="about-photo"><span>YOUR PHOTO HERE ↗</span></div><div class="about-copy"><p class="big-copy">HELLO, I'M <em>${escapeHTML(profile.name)}.</em></p><p>${escapeHTML(profile.about)}</p><div class="services"><span>WHAT I DO</span><div>VIDEOGRAPHY <b>↗</b></div><div>VIDEO EDITING <b>↗</b></div><div>GRAPHIC DESIGN <b>↗</b></div><div>CREATIVE DIRECTION <b>↗</b></div></div></div></div></section>
<section class="contact section" id="contact"><p class="eyebrow">03 / LET'S MAKE SOMETHING</p><h2>HAVE AN<br><em>IDEA?</em></h2><div class="contact-row"><p>LET'S TURN IT INTO SOMETHING WORTH REMEMBERING.</p><a class="contact-button" href="mailto:${encodeURIComponent(profile.email)}">LET'S TALK <span>↗</span></a></div></section>
</main><footer><a class="brand" href="#top">FRAME<span class="brand-dot">●</span></a><p>© <span id="year"></span> ${escapeHTML(profile.name)}. ALL RIGHTS RESERVED.</p><div><a href="${escapeHTML(profile.instagram)}" target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a><a href="${escapeHTML(profile.behance)}" target="_blank" rel="noopener noreferrer">BEHANCE ↗</a></div></footer>
<dialog id="projectDialog" aria-label="Project details"><button class="close" aria-label="Close project">✕</button><div id="dialogContent"></div></dialog>`;
document.querySelector('#year').textContent = new Date().getFullYear();
const grid = document.querySelector('#projects');
function renderProjects(filter='all') {
 const selected=projects.filter(p=>filter==='all'||p.type===filter);
 grid.innerHTML=selected.map(p=>`<button class="project-card" data-id="${p.id}" aria-label="View ${escapeHTML(p.title)}"><div class="project-image"><img loading="lazy" src="${escapeHTML(p.image)}" alt="Placeholder visual for ${escapeHTML(p.title)}"/><span class="project-open">↗</span></div><div class="project-meta"><div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.category)}</p></div><span>${escapeHTML(p.year)} / ${p.id}</span></div></button>`).join('');
 grid.querySelectorAll('.project-card').forEach(el=>el.addEventListener('click',()=>openProject(projects.find(p=>p.id===el.dataset.id))));
}
renderProjects();
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));button.classList.add('active');renderProjects(button.dataset.filter)}));
const dialog=document.querySelector('#projectDialog');
function openProject(p){const video = p.video && /^https:\/\//.test(p.video) ? `<a class="video-link" href="${escapeHTML(p.video)}" target="_blank" rel="noopener noreferrer">WATCH PROJECT ↗</a>` : (p.type==='video' ? '<p class="video-note">Add your video URL in main.js to link the finished film.</p>' : '');document.querySelector('#dialogContent').innerHTML=`<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)}"/><p class="eyebrow">${escapeHTML(p.category)} / ${escapeHTML(p.year)}</p><h2>${escapeHTML(p.title)}</h2><p>${escapeHTML(p.description)}</p>${video}`;dialog.showModal()}
document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
