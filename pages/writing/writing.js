var poemList = document.getElementById("poemList");

fetch("./poetry.txt")
  .then((res) => res.text())
  .then((text) => {
    poems = text.split("###").slice(1);
    poems.forEach(addPoem);
  })
  .catch((e) => console.error(e));

function addPoem(poem) {
    // get title and stanzas
    poem = poem.trim().split("\r\n\r\n");
    let title = poem[0];
    let stanzas = poem.slice(1);

    // create container to hold poem
    let poemContainer = document.createElement("div");

    // create title node with proper id
    let titleNode = document.createElement("h3");
    titleNode.setAttribute("id", title);
    titleNode.textContent = title;
    poemContainer.appendChild(titleNode);

    // add each stanza
    stanzas.forEach(stanza => {
      let stanzaNode = document.createElement("p");
      stanzaNode.innerHTML = stanza.replaceAll("\r\n", "<br>")
      poemContainer.appendChild(stanzaNode);
    });

    // add hr after poem
    document.body.appendChild(poemContainer);
    document.body.appendChild(document.createElement("hr"));

    // add link to poem TOC
    let poemItem = document.createElement("li");
    let poemLink = document.createElement("a");
    poemLink.setAttribute("href", `#${title}`);
    poemLink.textContent = title;
    poemItem.appendChild(poemLink);
    poemList.appendChild(poemItem);
}