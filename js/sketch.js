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
// window.onload = function(){
// var run = document.getElementById("info1");
// var speed = 1;
// var timer = null;
// var alpha= 0;
// var btnVal=document.getElementById("start");
// run.onmouseover = function(){
//   startrun(100);
// }
// function startrun(target){
//   clearInterval(timer);
//   timer = setInterval(function(){
//     if(target > alpha && btnVal.value=="Stop"){
//       speed = 0.22;
//     }else{
//       speed = -0.22;
//     }
//     if(alpha == target){
//       clearInterval(timer);
//     }
//     else{
//       alpha = alpha + speed;
//       run.style.filter = 'alpha(opacity='+alpha+')';
//       run.style.opacity = alpha/100;
//       document.title = alpha;
//     }
//   },0)
// }
// }


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


function requestOrientationPermission() {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response == 'granted') {
        window.addEventListener('deviceorientation', deviceTurnedHandler, true)
      }
    })
    .catch(console.error)
}



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
// window.onload = function(){
// var run = document.getElementById("info1");
// var speed = 1;
// var timer = null;
// var alpha= 0;
// var btnVal=document.getElementById("start");
// run.onmouseover = function(){
//   startrun(100);
// }
// function startrun(target){
//   clearInterval(timer);
//   timer = setInterval(function(){
//     if(target > alpha && btnVal.value=="Stop"){
//       speed = 0.22;
//     }else{
//       speed = -0.22;
//     }
//     if(alpha == target){
//       clearInterval(timer);
//     }
//     else{
//       alpha = alpha + speed;
//       run.style.filter = 'alpha(opacity='+alpha+')';
//       run.style.opacity = alpha/100;
//       document.title = alpha;
//     }
//   },0)
// }
// }


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


function requestOrientationPermission() {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response == 'granted') {
        window.addEventListener('deviceorientation', deviceTurnedHandler, true)
      }
    })
    .catch(console.error)
}



function init() {
  if (window.DeviceMotionEvent) {
    // 移动浏览器支持运动传感事件
    window.addEventListener('devicemotion', deviceMotionHandler, false);
  }
}
var SHAKE_THRESHOLD = 3000;
// 定义一个变量保存上次更新的时间
var last_update = 0;
// 紧接着定义x、y、z记录三个轴的数据以及上一次出发的时间
var x;
var y;
var z;
var last_x;
var last_y;
var last_z;
var count = 0;




function deviceMotionHandler(eventData) {
  // 获取含重力的加速度
  var acceleration = eventData.accelerationIncludingGravity;

  // 获取当前时间
  var curTime = new Date().getTime();
  var diffTime = curTime - last_update;
  // 固定时间段
  if (diffTime > 100) {
    last_update = curTime;

    x = acceleration.x;
    y = acceleration.y;
    z = acceleration.z;

    var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 30000;

    if (speed > SHAKE_THRESHOLD) {
      // TODO:在此处可以实现摇一摇之后所要进行的数据逻辑操作
      var run = document.getElementById("info1");
      var sudu = 1;
      var timer = null;
      var alpha = 0;
      var btnVal=document.getElementById("start");

      clearInterval(timer);
      timer = setInterval(function() {
        if (100 > alpha && btnVal.value=="Stop") {
          sudu = 2;
        } else {
          sudu = -2;
        }
        if (alpha == 100) {
        clearInterval(timer);
        } else {
          alpha = alpha + sudu;
          run.style.filter = 'alpha(opacity=' + alpha + ')';
          run.style.opacity = alpha / 100;
          document.title = alpha;
        }
      }, 0)

//       count++;
//       var px = count * 19;
//       var text = count * 8;

//       if (px >= 380) {
//         alert("380了哦！！");
//       }



    }

    last_x = x;
    last_y = y;
    last_z = z;
  }
}
