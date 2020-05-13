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


function clickStart() {
  document.querySelector('#backBut').style.visibility = 'hidden'; //backbutton
  document.getElementById("dot1_G").style.display="none"; //dot1
  document.getElementById("dot2_G").style.display="none";//dot2
  document.getElementById("time1").style.display="block";
  document.getElementById("control").style.display="block"; //time
  document.getElementById("line").style.left="92px";
  document.getElementById("spot1").className="Spot-current";//spot1
  document.getElementById("spot2").className="Spot-current";//spot2
  var divs = document.querySelectorAll('.dot');
  divs.forEach(function(div) {
  div.classList.replace("dot", "dot-current");
});
  var spots = document.querySelectorAll(".Spot-pre");
  spots.forEach(function(div) {
  div.classList.replace("Spot-pre", "Spot-pre2");
});



  var btnVal=document.getElementById("start");
    if(btnVal.value=="Start")
    {
        btnVal.value="Stop";
        btnVal.style.color="#ffffff";
        btnVal.style.background="#333333";
        btnVal.style.width="125px";

    }
    else
    alert("Your treasure hunt will be abort!");
}

// mouse
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
      speed = 0.22;
    }else{
      speed = -0.22;
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


function follow(){
  document.getElementById("dot2_D").style.display="none"; //dot2
  document.getElementById("ontime").style.display="block";
  document.getElementById("late").style.display="none";//time
  document.getElementById("spot3").style.display="block";
}

function delay(){
  document.getElementById("dot2_D").style.display="none"; //dot2
  document.getElementById("spot3").style.display="none";
  document.getElementById("late").style.display="block";
  document.getElementById("ontime").style.display="none";
}

function unfollow(){
    alert("You deviated from the planned route!Your treasure hunt will be abort in 5 sec!")
}
