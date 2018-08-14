function show(event) {
  let nav = document.querySelector('nav');
  nav.classList.toggle("open");

  let itemTexts = document.getElementsByClassName("item-text");
  for (let i = 0; i < itemTexts.length; i++) {
    itemTexts[i].classList.toggle("expandable");
  }
}