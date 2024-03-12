document.addEventListener("scroll", (e) => {
  console.log("w", window.scrollY);
  //get the height of the viewport to subtract from total body height
  let viewportHeight = document.documentElement.clientHeight;
  //get the total height of the body minus the viewport
  let scrollHeight =
    document.querySelector("body").offsetHeight - viewportHeight;
  // get the percentage the user has scrolled
  let scrollProgress = window.scrollY / scrollHeight;

  //apply scroll progress to individual columns
  //get all of the columns in the document
  let columnLeft = document.querySelector(".column-left--inner");
  let columnRight = document.querySelector(".column-right--inner");

  columnLeft.style.transform = `translateY(calc(-${scrollProgress * 100}%))`;
  columnRight.style.transform = `translateY(calc(-${(1 - scrollProgress) * 100}% + 100vh))`;
});
