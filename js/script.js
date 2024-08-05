const mycv =document.querySelector('#mycv')
const mdcv = fetch("md/Curriculum Jose Luis Perez Ariza.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    mycv.innerHTML = html
});

const mycv2print =document.querySelector('#mycv2print')
const mdcv2print = fetch("md/Jose Luis Perez Ariza Curriculum to print.md").then((response) => response.text()).then(text=>{
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

const aside = document.querySelector('#aside');

<<<<<<< HEAD
fetch('json/aside_sentences.json') // Ajusta la ruta si es necesario
.then(response => {
    if (!response.ok) {
        throw new Error('Error al obtener el archivo JSON');
    }
    return response.json();
})
.then(data => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const frase = data.frases[today] || "No hay frase para este día.";

    const converter = new showdown.Converter();
    const html = converter.makeHtml(frase);
    aside.innerHTML = html;
})
.catch(error => {
    console.error('Error:', error);
    aside.textContent = 'No se pudo cargar la frase. Por favor, verifica la consola para más detalles.';
=======
const aside =document.querySelector('#aside')
const mdaside = fetch("md/aside.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    aside.innerHTML = html
>>>>>>> parent of 5b0dd9a (Json Sentences)
>>>>>>> parent of 23f416b (Update script.js)
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