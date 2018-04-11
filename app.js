// creating Die class using OOP
var dice = [];

class Die {
  constructor(value) {
    this.value = value;
    this.div = document.createElement("div");
    document.body.appendChild(this.div);
    this.div.style.backgroundColor = "gray";
    this.div.style.width = "200px";
    this.div.style.height = "200px";
    this.div.style.cssFloat = "left";
    this.roll();

    this.div.addEventListener("click", () => {
      console.log(this);
      this.divText = Math.floor(Math.random() * 6) + 1;
      this.div.innerText = this.divText;
    });

    this.div.addEventListener("dblclick", () => {
      this.removeDie();
    });
  }
  roll() {
    this.divText = Math.floor(Math.random() * 6) + 1;
    this.div.innerText = this.divText;
  }

  removeDie() {
    this.div.remove();
    let index = dice.indexOf(this);
    dice.splice(index, 1);
    console.log(index);
  }
}

document.getElementById("newDie").addEventListener("click", function() {
  let d1 = new Die();
  dice.push(d1);
});

document.getElementById("allDie").addEventListener("click", function() {
  for (i = 0; i < dice.length; i++) {
    dice[i].roll();
  }
});

document.getElementById("sumDie").addEventListener("click", function() {
  let sum = 0;
  for (a = 0; a < dice.length; a++) {
    sum = sum + dice[a].divText;
  }
  alert(`${sum}`);
});
