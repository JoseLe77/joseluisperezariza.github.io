const mycv =document.querySelector('#mycv')
const mdcv = fetch("md/Curriculum Jose Luis Perez Ariza.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    mycv.innerHTML = html
});

const about =document.querySelector('#aboutme')
const mdabout = fetch("md/About Me.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    about.innerHTML = html
});s