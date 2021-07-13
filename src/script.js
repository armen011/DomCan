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
  const menuIcon = document.createElement('div')
  menuIcon.classList.add('container')
  const bar1 = document.createElement('div')
  bar1.classList.add('bar1')
  const bar2 = document.createElement('div')
  bar2.classList.add('bar2')
  const bar3 = document.createElement('div')
  bar3.classList.add('bar3')
  const menu = document.createElement('div')
  menu.classList.add('sideMenu')
  importNav(menu)
  menuIcon.append(bar1, bar2, bar3, menu)
  header.append(logo, search, nav, menuIcon);
  let main = document.querySelector(".main");
  main.innerHTML = ''
  showItems(main);
}
run();
