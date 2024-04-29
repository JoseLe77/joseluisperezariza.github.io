const mycv =document.querySelector('#mycv')
const md = fetch("../data/Curriculum Jose Luis Perez Ariza.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    mycv.innerHTML = html
});
console.log(md)