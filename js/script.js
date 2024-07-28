const mycv =document.querySelector('#mycv')
const mdcv = fetch("md/Curriculum Jose Luis Perez Ariza.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    mycv.innerHTML = html
});

const mycv2print =document.querySelector('#mycv2print')
const mdcv2print = fetch("md/Curriculum Jose Luis Perez Ariza to print.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    mycv2print.innerHTML = html
});

const about =document.querySelector('#aboutme')
const mdabout = fetch("md/About Me.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    about.innerHTML = html
});

const portfolio =document.querySelector('#mytechnologies')
const mdportfolio = fetch("md/technologies.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    portfolio.innerHTML = html
});

const aside =document.querySelector('#aside')
const mdaside = fetch("md/aside.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    aside.innerHTML = html
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