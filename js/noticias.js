//const RSS_URL_NOTICIAS = 'http://www.sos-contador.com/feed/';
const RSS_URL_NOTICIAS = './noticias.xml';
fetch(RSS_URL_NOTICIAS)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    let i =0;
    items.forEach(el => {
       if (i < 3) {
        let link = el.querySelector("link").innerHTML;
        link= '<a href="'+link+'" target="_blank" rel="noopener">[&#8230;]</a>';
        let noti = el.querySelector("description").innerHTML;
        noti = noti.replace("<![CDATA[", "");
        noti = noti.replace( "]]>", "" );
        noti = noti.replace( "[&#8230;]", link );
        
        let fecha = el.querySelector("pubDate").innerHTML;
        let date1 = new Date(fecha);
        const formatoAR = new Intl.DateTimeFormat('es-AR',{});
        let fechaAR = formatoAR.format(date1);


      html += `
    <div class="entry col-sm-6 col-md-4">
        <div class="grid-inner">
                <div class="entry-title title-xs nott">
                    <h3>
                        <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
                        ${el.querySelector("title").innerHTML}
                        </a>
                    </h3>
                </div>
                <div class="entry-meta">
                        <ul>
                        <li><i class="icon-calendar3"></i> ${fechaAR}</li>
                        </ul>
                </div>
                    <div class="entry-content">
                        <p class="mb-0">
                        ${noti}          
                        </p>
                    </div>
        </div>
    </div>
      `;
       }
       
  i++;
    });
   // document.body.insertAdjacentHTML("beforeend", html);
    $( "#novedades_in" ).html(html);

  });
