// creating Die class using OOP
var dice = [];

class Die {
  constructor(value) {
    this.value = value;
    this.div = document.createElement("div");
    document.body.appendChild(this.div);
    //this.div.style.backgroundColor = "gray";
    this.div.style.width = "100px";
    this.div.style.height = "100px";
    this.div.style.cssFloat = "left";
    this.roll();

    this.div.addEventListener("click", () => {
      console.log(this);
      let diceImg = Math.floor(Math.random() * 6) + 1;  
     //this.divText = Math.floor(Math.random() * 6) + 1;
      this.div.innerText = diceImg;
      this.divText = diceImg;
      this.div.style.color = "transparent";
     switch (diceImg) {
      case 1:
      this.div.style.backgroundImage = "url('images/side1.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
      case 2:
      this.div.style.backgroundImage = "url('images/side2.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
      case 3:
      this.div.style.backgroundImage = "url('images/side3.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
      case 4:
      this.div.style.backgroundImage = "url('images/side4.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
      case 5:
      this.div.style.backgroundImage = "url('images/side5.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
      case 6:
      this.div.style.backgroundImage = "url('images/side6.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
  }
    });

    this.div.addEventListener("dblclick", () => {
      this.removeDie();
    });
  }
  roll() {
    //this.divText = Math.floor(Math.random() * 6) + 1;
    //this.div.innerText = this.divText;
    let diceImg = Math.floor(Math.random() * 6) + 1;  
    this.div.innerText = diceImg;
    this.divText = diceImg;
    this.div.style.color = "transparent";
    switch (diceImg) {
      case 1:
      this.div.style.backgroundImage = "url('images/side1.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
      case 2:
      this.div.style.backgroundImage = "url('images/side2.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
      case 3:
      this.div.style.backgroundImage = "url('images/side3.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
      case 4:
      this.div.style.backgroundImage = "url('images/side4.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
      case 5:
      this.div.style.backgroundImage = "url('images/side5.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
      case 6:
      this.div.style.backgroundImage = "url('images/side6.svg')";
      this.div.style.backgroundRepeat = "no-repeat";
      this.div.style.height = "100px";
      this.div.style.weidth = "100px";
          break;
  }
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
  alert(`The total of all rolled dice is ${sum}!`);
});
