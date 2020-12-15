//const RSS_URL = 'http://www.sos-contador.com/feed/';
const RSS_URL = './noticias.xml';
fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    let i =0;
    html+= `<span> - </span> `;
    items.forEach(el => {
       if (i < 3) {
      html += `
  
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener" class="noticia-marquesina">
              ${el.querySelector("title").innerHTML}
            </a><span> - </span>
            
      `;
      }
  i++;
    });
//    document.body.insertAdjacentHTML("beforeend", html);
    $( "#noticia" ).html(html);
  });

