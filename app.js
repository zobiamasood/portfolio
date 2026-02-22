// SMOOTH SCROLL
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// NAVBAR ACTIVE LINK ON SCROLL
const sections=document.querySelectorAll('section');
const navLinks=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(section=>{
    const sectionTop=section.offsetTop-100;
    if(pageYOffset>=sectionTop) current=section.getAttribute('id');
  });
  navLinks.forEach(link=>{
    link.classList.remove('active');
    if(link.getAttribute('href')=='#'+current) link.classList.add('active');
  });
});

// HAMBURGER TOGGLE
const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.nav-links');
hamburger.addEventListener('click',()=>{
  navMenu.classList.toggle('active');
});
