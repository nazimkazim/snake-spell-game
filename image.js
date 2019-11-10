import { keys } from "./keys.js";

export function getImage(query) {
  axios
    .get(
      `https://api.unsplash.com/search/photos?client_id=${keys.accessKey}&page=1&query=${query}`
    )
    .then(data => {
      console.log(data.data.results[0]);
      const core = data.data.results[0];
      const desc = core.alt_description;
      const url = core.urls.regular;
      //console.log(desc, url)
      let el = document.querySelector(".image");
      var elemImg = document.createElement("img");
      elemImg.src = url;
      el.appendChild(elemImg);
    });
}
