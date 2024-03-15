import { createHomePage } from "./util/home";
import { createLocationPage } from "./util/location";
import { createMenuPage } from "./util/menu";

const btn_home = document.querySelector("#home");
const btn_menu = document.querySelector("#menu");
const btn_location = document.querySelector("#location");

btn_home.addEventListener("click", createHomePage);
btn_menu.addEventListener("click", createMenuPage);
btn_location.addEventListener("click", createLocationPage);
