import homePage from "./homePage";
import contactPage from "./contactPage";
import menuPage from "./menuPage";

export default function pageLoad() {
  const contentContainer = document.querySelector("#content");

  const headerContainer = document.createElement("div");
  headerContainer.style.display = "flex";
  headerContainer.style.gap = "30px";

  const homeTab = document.createElement("button");
  homeTab.textContent = "Home";

  const contactTab = document.createElement("button");
  contactTab.textContent = "Contact";

  const menuTab = document.createElement("button");
  menuTab.textContent = "Menu";

  headerContainer.appendChild(homeTab);
  headerContainer.appendChild(contactTab);
  headerContainer.appendChild(menuTab);
  contentContainer.appendChild(headerContainer);
  homePage();

  homeTab.addEventListener("click", () => homePage());
  contactTab.addEventListener("click", () => contactPage());
  menuTab.addEventListener("click", () => menuPage());
}
