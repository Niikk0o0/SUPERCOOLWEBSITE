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


//portal

const incrementCount2 = document.getElementById("increment-count2");
var count2 = 0;

const handleIncrement2 = () => {
  count2++;
  if (count2==2)
  {
    window.open('./loading/loading_portal.html', '_self');
    count2 = 0;
  }
};
incrementCount2.addEventListener("click", handleIncrement2);