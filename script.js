const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  // triggerBottom is equal to 80% of the window
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // Finds out the position of the top of the box
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
