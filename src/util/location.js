import { clear } from "./clearpage";

export function createLocationPage() {
  clear();

  const content = document.getElementById("content");

  const heading = document.createElement("h1");

  heading.id = "content";
  heading.innerText = "Our location";

  const detail = document.createElement("p");

  detail.className = "info";
  detail.innerText = `Find us`;

  content.appendChild(heading);
  content.appendChild(detail);
}
