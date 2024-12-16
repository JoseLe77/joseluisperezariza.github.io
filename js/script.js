const mycv =document.querySelector('#mycv')
const mdcv = fetch("md/Curriculum Jose Luis Perez Ariza.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    mycv.innerHTML = html
});

const mycv_EN =document.querySelector('#mycv_EN')
const mdcv_EN = fetch("md/EN/Curriculum Jose Luis Perez Ariza EN.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    mycv_EN.innerHTML = html
});

const mycv2print =document.querySelector('#mycv2print')
const mdcv2print = fetch("md/Jose Luis Perez Ariza Curriculum to print.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    mycv2print.innerHTML = html
});

const mycv2print_EN =document.querySelector('#mycv2print_EN')
const mdcv2print_EN = fetch("md/EN/Jose Luis Perez Ariza Curriculum to print EN.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    mycv2print_EN.innerHTML = html
});

const about =document.querySelector('#aboutme')
const mdabout = fetch("md/About Me.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    about.innerHTML = html
});

const about_EN =document.querySelector('#aboutme_EN')
const mdabout_EN = fetch("md/EN/About Me EN.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    about_EN.innerHTML = html
});

const portfolio =document.querySelector('#mytechnologies')
const mdportfolio = fetch("md/technologies.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    portfolio.innerHTML = html
});

const portfolio_EN =document.querySelector('#mytechnologies_EN')
const mdportfolio_EN = fetch("md/EN/technologies EN.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    portfolio_EN.innerHTML = html
});

const aside =document.querySelector('#aside')
const mdaside = fetch("md/aside.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    aside.innerHTML = html
});

const aside_EN =document.querySelector('#aside_EN')
const mdaside_EN = fetch("md/EN/aside EN.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    aside_EN.innerHTML = html
});

const contact_by_mail = document.getElementById('MailME');

contact_by_mail.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Aquí puedes personalizar la dirección de correo electrónico y el cuerpo del mensaje
    const mailtoLink = `mailto:joseluisperezariza@gmail.com`;

    // Crea un enlace y simúla un clic para abrir el cliente de correo
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.click();
});

const contact_by_mail_EN = document.getElementById('MailME_EN');

contact_by_mail_EN.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Aquí puedes personalizar la dirección de correo electrónico y el cuerpo del mensaje
    const mailtoLink_EN = `mailto:joseluisperezariza@gmail.com`;

    // Crea un enlace y simúla un clic para abrir el cliente de correo
    const link = document.createElement('a');
    link.href = mailtoLink_EN;
    link.click();
});

const languageToggle = document.getElementById('language-toggle');
const languageImage = document.getElementById('language-image');
const contentES = document.querySelectorAll('.contenido_ES');
const contentEN = document.querySelectorAll('.contenido_EN');

let currentLanguage = 'es';

languageToggle.addEventListener('click', () => {
  if (currentLanguage === 'es') {
    contentES.forEach(section => section.style.display = 'none');
    contentEN.forEach(section => {
        if (section.tagName.toLowerCase() === 'nav') {
            section.style.display = 'flex'; // Siempre aplicamos display: flex a los nav
          } else {
            section.style.display = currentLanguage === 'es' ? 'block' : 'none'; // Mostramos u ocultamos según el idioma
          }
    });
    // languageToggle.textContent = 'Cambiar a Español';
    languageImage.src = 'img/languages/es.webp'; 
    currentLanguage = 'en';
  } else {
    contentES.forEach(section => {
        if (section.tagName.toLowerCase() === 'nav') {
            section.style.display = 'flex'; // Siempre aplicamos display: flex a los nav
          } else {
            section.style.display = currentLanguage === 'en' ? 'block' : 'none'; // Mostramos u ocultamos según el idioma
          }
    });
    contentEN.forEach(section => section.style.display = 'none');
    // languageToggle.textContent = 'Split to English';
    languageImage.src = 'img/languages/gb.webp'; 
    currentLanguage = 'es';
  }
});