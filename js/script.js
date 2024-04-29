const mycv =document.querySelector('#mycv')
const md = fetch("https://github.com/JoseLe77/CV/blob/main/Curriculum%20Jose%20Luis%20Perez%20Ariza.md").then((response) => response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    mycv.innerHTML = html
});
console.log(md)