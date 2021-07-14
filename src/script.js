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
  const menu = document.createElement('div')
  menu.classList.add('sideMenu')
  importNav(menu)
  header.append(logo, search, nav, menu);
  let main = document.querySelector(".main");
  main.innerHTML = ''
  showItems(main);
}
run();
