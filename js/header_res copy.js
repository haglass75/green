window.addEventListener("load", function () {
  //햄버거 메뉴 기능
  const hamburger = this.document.querySelector(".hamburger");
  const mobileMenu = this.document.querySelector("#mobileMenu");
  const overlay = this.document.querySelector("#overlay");
  //   햄버거바 클릭시
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    hamburger.classList.add("active");
    // document.body.style.overflow = mobileMenu.classList.contains("active")
    //   ? "hidden"
    //   : "";
  });
  overlay.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
  });
  mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
    // document.body.style.overflow = "";
  });
});
// 
