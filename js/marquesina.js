//const RSS_URL = 'http://www.sos-contador.com/feed/';
const RSS_URL = "./noticias.xml";
fetch(RSS_URL)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    let i = 0;
    items.forEach((el) => {
      if (i === 1) {
        html += `
      <div class="carousel-item active"><p><a href="${
        el.querySelector("link").innerHTML
      }" target="_blank" rel="noopener" class="noticia-marquesina">
                ${el.querySelector("title").innerHTML}</a></p></div>
              
        `;
      }
      if (i < 5 && i > 1) {
        html += `
    <div class="carousel-item"><p><a href="${
      el.querySelector("link").innerHTML
    }" target="_blank" rel="noopener" class="noticia-marquesina">
              ${el.querySelector("title").innerHTML}</a></p></div>
            
      `;
      }

      i++;
    });
    //    document.body.insertAdjacentHTML("beforeend", html);
    $("#noticia").html(html);
  });
