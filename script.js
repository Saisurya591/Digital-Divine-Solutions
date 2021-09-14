const links = document.querySelector(".links");
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  links.classList.toggle("display_none");
  console.log("abc");
});
