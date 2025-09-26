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
    // normalize line endings
    poem = poem.replaceAll("\r\n", "\n").trim();

    // create container to hold poem
    // split into title and stanzas
    let parts = poem.split("\n\n");
    let title = parts[0];
    let stanzas = parts.slice(1);

    // create container
    let poemContainer = document.createElement("div");

    // create title node with proper id
    // title
    let titleNode = document.createElement("h3");
    titleNode.setAttribute("id", title);
    titleNode.setAttribute("id", title.replace(/\s+/g, "_")); // safer id
    titleNode.textContent = title;
    poemContainer.appendChild(titleNode);

    // add each stanza
    // stanzas
    stanzas.forEach(stanza => {
<<<<<<< HEAD
      let stanzaNode = document.createElement("pre");
      stanzaNode.innerHTML = stanza.replaceAll("\r\n", "<br>")
=======
      let stanzaNode = document.createElement("p");
      stanzaNode.innerHTML = stanza.replaceAll("\n", "<br>");
>>>>>>> 890c3fcb810929a5f56a8db94f80210f8a23956d
      poemContainer.appendChild(stanzaNode);
    });

    // add hr after poem
    // add to page
    document.body.appendChild(poemContainer);
    document.body.appendChild(document.createElement("hr"));

    // add link to poem TOC
    // add TOC link
    let poemItem = document.createElement("li");
    let poemLink = document.createElement("a");
    poemLink.setAttribute("href", `#${title}`);
    poemLink.setAttribute("href", `#${title.replace(/\s+/g, "_")}`);
    poemLink.textContent = title;
    poemItem.appendChild(poemLink);
    poemList.appendChild(poemItem);
}}
