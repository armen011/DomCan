function run() {

  let header = document.querySelector(".header");
  header.innerHTML = ''
  let logo = document.createElement("div");
  logo.classList.add("logo");
  importLogo(logo);
  let search = document.createElement("div");
  search.classList.add("searchbar");
  importSearch(search);
  let nav = document.createElement("div");
  nav.classList.add("navbar");
  importNav(nav);
  header.append(logo, search, nav);
  let main = document.querySelector(".main");
  main.innerHTML = ''
  showItems(main);
}
run();
