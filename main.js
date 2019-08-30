class ChooseSquare {
  // constructor(event) {
  //   this.restart = event;
  // }

  squareIsClicked() {
    window.addEventListener('click', function(e){
      let square = document.querySelectorAll('.tic-square');
      let x = `<p class="pick-x">x</p>`;
      let click = e.target;

      for (let i = 0; i < square.length; i++) {
        if (click === square[i]) {
          square[i].innerHTML = x;
        }
      }

      console.log(click);
    });
  }
}

let clicker = new ChooseSquare();

clicker.squareIsClicked();

