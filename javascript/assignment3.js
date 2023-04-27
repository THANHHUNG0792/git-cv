/* ẩn hiện thông tin */

function loginsub() {
  let user = document.getElementById("mail-pro").value;
  let mail = document.getElementById("mail-pro");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (user != "") {
    if (!regex.test(mail.value)) {
      alert("Hãy nhập địa chỉ email hợp lệ, xin cảm ơn!");
      mail.focus();
      mail.value = "";
      return false;
    } else {
      var hide = document.getElementById("alone");
      var show = document.getElementById("my-profile");
      hide.style.display = "none";
      show.style.display = "block";
    }
  } else {
    alert("Vui lòng nhập email");
    mail.focus();
  }
}
/* end */
/* background cá nhân */
/* eperience */
document.getElementById("my-experience").onmouseover = function () {
  mouseOver1();
};
document.getElementById("my-experience").onmouseout = function () {
  mouseOut1();
};

function mouseOver1() {
  document.getElementById("exper-view").style.display = "block";
}
function mouseOut1() {
  document.getElementById("exper-view").style.display = "none";
}
/* action */
document.getElementById("my-active").onmouseover = function () {
  mouseOver2();
};
document.getElementById("my-active").onmouseout = function () {
  mouseOut2();
};

function mouseOver2() {
  document.getElementById("act-view").style.display = "block";
}
function mouseOut2() {
  document.getElementById("act-view").style.display = "none";
}
/* interresting */
document.getElementById("interester").onmouseover = function () {
  mouseOver3();
};
document.getElementById("interester").onmouseout = function () {
  mouseOut3();
};

function mouseOver3() {
  document.getElementById("inter-view").style.display = "block";
}
function mouseOut3() {
  document.getElementById("inter-view").style.display = "none";
}
/* language */
document.getElementById("languagese").onmouseover = function () {
  mouseOver4();
};
document.getElementById("languagese").onmouseout = function () {
  mouseOut4();
};

function mouseOver4() {
  document.getElementById("lang-view").style.display = "block";
}
function mouseOut4() {
  document.getElementById("lang-view").style.display = "none";
}

/* skill */
document.getElementById("skiller").onmouseover = function () {
  mouseOver5();
};
document.getElementById("skiller").onmouseout = function () {
  mouseOut5();
};

function mouseOver5() {
  document.getElementById("skill-view").style.display = "block";
}
function mouseOut5() {
  document.getElementById("skill-view").style.display = "none";
}
/* education */
document.getElementById("edu-text-icon").onmouseover = function () {
  mouseOver6();
};
document.getElementById("edu-text-icon").onmouseout = function () {
  mouseOut6();
};

function mouseOver6() {
  document.getElementById("eduview").style.display = "block";
}
function mouseOut6() {
  document.getElementById("eduview").style.display = "none";
}




/* Ẩn và hiện thông tin background */
/* kinh nghiem */
function more_and_more1(){
    let infor1 = document.getElementById('text1')
    
    let lessview1 = document.getElementById('text-view1')

    if(infor1.style.display==='none'){
        infor1.style.display ='block';
        lessview1.innerHTML =' LESS MORE'

    }
    else{
        infor1.style.display ='none';
        lessview1.innerHTML ='View More'
    }
}
/* hoc van */
function more_and_more2(){
    let infor2 = document.getElementById('text2')
    
    let lessview2 = document.getElementById('text-view2')

    if(infor2.style.display==='none'){
        infor2.style.display ='block';
        lessview2.innerHTML =' LESS MORE'

    }
    else{
        infor2.style.display ='none';
        lessview2.innerHTML ='View More'
    }
}
/* hoat dong */
function more_and_more3(){
    let infor3 = document.getElementById('text3')
    
    let lessview3 = document.getElementById('text-view3')

    if(infor3.style.display==='none'){
        infor3.style.display ='block';
        lessview3.innerHTML =' LESS MORE'

    }
    else{
        infor3.style.display ='none';
        lessview3.innerHTML ='View More'
    }
}
/* interresting */
function more_and_more4(){
    let infor4 = document.getElementById('text4')
    
    let lessview4 = document.getElementById('text-view4')

    if(infor4.style.display==='none'){
        infor4.style.display ='block';
        lessview4.innerHTML =' LESS MORE'

    }
    else{
        infor4.style.display ='none';
        lessview4.innerHTML ='View More'
    }
}
/* language */
function more_and_more5(){
    let infor5 = document.getElementById('text5')
    
    let lessview5 = document.getElementById('text-view5')

    if(infor5.style.display==='none'){
        infor5.style.display ='block';
        lessview5.innerHTML =' LESS MORE'

    }
    else{
        infor5.style.display ='none';
        lessview5.innerHTML ='View More'
    }
}
/* skill */
function more_and_more6(){
    let infor6 = document.getElementById('text6')
    
    let lessview6 = document.getElementById('text-view6')

    if(infor6.style.display==='none'){
        infor6.style.display ='block';
        lessview6.innerHTML =' LESS MORE'

    }
    else{
        infor6.style.display ='none';
        lessview6.innerHTML ='View More'
    }
}
