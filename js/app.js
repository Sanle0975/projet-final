const openMenu = () => {
  const menu = document.querySelector(".header-menu");
  menu.classList.toggle("active");
};

function conactezMoi() {
  let x = document.getElementById("conctez-moi");
  if (x.className === "contactez-moi") {
    x.className += "soumettre";
  } else {
    x.className = "contactez-moi";
  }
}
