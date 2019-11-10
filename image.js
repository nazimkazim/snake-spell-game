import { keys } from "./keys.js";

export function getImage(query) {
  axios
    .get(
      `https://api.unsplash.com/search/photos?client_id=${keys.accessKey}&page=1&query=${query}`
    )
    .then(data => {
      console.log(data.data.results[0]);
      const core = data.data.results[0];
      let el = document.querySelector(".image");
      if (!core) {
        var a = document.createElement("a");
        var linkText = document.createTextNode("view image");
        a.appendChild(linkText);
        a.title = "view image";
        a.href = `https://www.google.com/search?q=${query}&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjivrWorODlAhWhxMQBHV8-DvEQ_AUIEigB&biw=1366&bih=625`;
        el.appendChild(a);
      } else {
        const desc = core.alt_description;
        const url = core.urls.regular;
        //console.log(desc, url)
        var elemImg = document.createElement("img");
        elemImg.className = "picture";
        elemImg.src = url;
        el.appendChild(elemImg);
      }
    });
}
