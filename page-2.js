import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as c,a as y,S as g}from"./assets/vendor-BIHATn4Y.js";const u="45947760-a7d8d36d32b01afaf5acf1299",f=document.querySelector(".search-form"),i=document.querySelector("#gallery"),l=document.querySelector("#loader"),s=document.createElement("button");s.textContent="Load more";s.classList.add("load-more");document.body.append(s);s.style.display="none";let p="",t=1,m=40,r;async function h(e,n){const a=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${m}`;try{l.style.display="block";const o=await y.get(a);return l.style.display="none",o.data}catch(o){return console.error("Błąd w zapytaniu:",o),l.style.display="none",c.error({title:"Error",message:"Problem with fetching images"}),{hits:[],totalHits:0}}}function b(e){t===1&&(i.innerHTML="",i.classList.remove("hidden"));const n=e.map(a=>`
    <a href="${a.largeImageURL}" class="gallery-item">
      <img src="${a.webformatURL}" alt="${a.tags}" />
      <div class="image-info">
        <p><span class="image-info-label">Likes:</span> <span class="image-info-value">${a.likes}</span></p>
        <p><span class="image-info-label">Views:</span> <span class="image-info-value">${a.views}</span></p>
        <p><span class="image-info-label">Comments:</span> <span class="image-info-value">${a.comments}</span></p>
        <p><span class="image-info-label">Downloads:</span> <span class="image-info-value">${a.downloads}</span></p>
      </div>
    </a>
  `).join("");i.insertAdjacentHTML("beforeend",n),r?r.refresh():r=new g(".gallery-item",{captionsData:"alt",captionDelay:250})}async function d(){const e=await h(p,t);if(e.hits.length===0&&t===1){c.info({iconUrl:"./src/img/no-images-icon.png",message:"Sorry, there are no images matching your search query. Please, try again!",backgroundColor:"#EF4040"}),s.style.display="none";return}if(b(e.hits),e.hits.length<m||t*m>=e.totalHits?(s.style.display="none",c.info({message:"We're sorry, but you've reached the end of search results."})):s.style.display="block",t>1){const{height:n}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}}f.addEventListener("submit",async e=>{e.preventDefault(),p=document.querySelector("#query").value.trim(),p&&(t=1,s.style.display="none",await d())});s.addEventListener("click",async()=>{t+=1,await d()});
//# sourceMappingURL=page-2.js.map
