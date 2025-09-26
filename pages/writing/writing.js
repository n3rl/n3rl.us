var poemList = document.getElementById("poemList");

fetch("./poetry.txt")
  .then((res) => res.text())
  .then((text) => {
    poems = text.split("###").slice(1);
    poems.forEach(addPoem);
  })
  .catch((e) => console.error(e));

function addPoem(poem) {
    // normalize line endings
    poem = poem.replaceAll("\r\n", "\n").trim();

    // split into title and stanzas
    let parts = poem.split("\n\n");
    let title = parts[0];
    let stanzas = parts.slice(1);

    // create container
    let poemContainer = document.createElement("div");

    // title
    let titleNode = document.createElement("h3");
    titleNode.setAttribute("id", title.replace(/\s+/g, "_")); // safer id
    titleNode.textContent = title;
    poemContainer.appendChild(titleNode);

    // stanzas
    stanzas.forEach(stanza => {
      let stanzaNode = document.createElement("p");
      stanzaNode.innerHTML = stanza.replaceAll("\n", "<br>");
      poemContainer.appendChild(stanzaNode);
    });

    // add to page
    document.body.appendChild(poemContainer);
    document.body.appendChild(document.createElement("hr"));

    // add TOC link
    let poemItem = document.createElement("li");
    let poemLink = document.createElement("a");
    poemLink.setAttribute("href", `#${title.replace(/\s+/g, "_")}`);
    poemLink.textContent = title;
    poemItem.appendChild(poemLink);
    poemList.appendChild(poemItem);
}
