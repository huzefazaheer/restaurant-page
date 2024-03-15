export function createMenuPage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");

  heading.id = "content";
  heading.innerText = "Menu";

  const detail = document.createElement("p");

  detail.className = "info";
  detail.innerText = `One potato two potato`;

  const rights = document.createElement("p");
  const italics = document.createElement("em");

  italics.innerText = "get it all";

  content.appendChild(heading);
  content.appendChild(detail);
  content.appendChild(rights);
  rights.appendChild(italics);
}
