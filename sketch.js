function clickTh() {
  document.querySelector('#homepage').style.display = 'none';
  document.querySelector('#th').style.display='block'
}
function clickSp() {
  document.querySelector('#homepage').style.display = 'none';
  document.querySelector('#sp').style.display='block'
}

function clickBack() {
  document.querySelector('#homepage').style.display = 'block';
  document.querySelector('#th').style.display = 'none';
  document.querySelector('#sp').style.display = 'none';
}

let process = 0;
function clickStart() {
  document.querySelector('#backBut').style.visibility = 'hidden'; //backbutton
  document.getElementById("dot1_G").style.display="none"; //dot1
  document.getElementById("dot2_G").style.display="none"; //dot2
  document.getElementById("spot1").className="currentSpot";//spot1
  document.getElementById("spot2").className="currentSpot";//spot2
  document.getElementById("info1").style.opacity="0.05";

  var btnVal=document.getElementById("start");
    if(btnVal.value=="Start")
    {
        btnVal.value="Stop";
        btnVal.style.color="#ffffff";
        btnVal.style.background="#333333";
        btnVal.style.width="125px";
        process = process+1;
    }
    else
    alert("Your treasure hunt will be abort!");
}

window.onload = function(){
var run = document.getElementById("info1");
var speed = 1;
var timer = null;
var alpha= 0;
var btnVal=document.getElementById("start");
run.onmouseover = function(){
  startrun(100);
}
function startrun(target){
  clearInterval(timer);
  timer = setInterval(function(){
    if(target > alpha && btnVal.value=="Stop"){
      speed = 2;
    }else{
      speed = -2;
    }
    if(alpha == target){
      clearInterval(timer);
    }
    else{
      alpha = alpha + speed;
      run.style.filter = 'alpha(opacity='+alpha+')';
      run.style.opacity = alpha/100;
      document.title = alpha;
    }
  },0)
}
}
