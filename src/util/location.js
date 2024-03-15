export function createLocationPage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");

  heading.id = "content";
  heading.innerText = "Our location";

  const detail = document.createElement("p");

  detail.className = "info";
  detail.innerText = `Find us`;

  const rights = document.createElement("p");
  const italics = document.createElement("em");

  italics.innerText = "extra";

  content.appendChild(heading);
  content.appendChild(detail);
  content.appendChild(rights);
  rights.appendChild(italics);
}
