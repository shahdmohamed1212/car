var list = document.querySelector("#navList");
function openIcon() {
  list.classList.add("open_list");
  list.classList.remove("close_list");
}
function closeIcon() {
  list.classList.add("close_list");
  list.classList.remove("open_list");
}
