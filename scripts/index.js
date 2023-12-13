//meow-gif

var meow = document.getElementById('meow');
meow.volume = 0.2;
function Meow(){
  meow.play();
}


//song-link

var dvanaeset = document.getElementById('12');
dvanaeset.volume = 0.5;
function song(){
  dvanaeset.play();
}


//secret_1

const incrementCount = document.getElementById("increment-count");
var count = 0;

const handleIncrement = () => {
  count++;
  if (count==10)
  {
    window.open('./secret_1.html', '_self');
    count = 0;
  }
};
incrementCount.addEventListener("click", handleIncrement);