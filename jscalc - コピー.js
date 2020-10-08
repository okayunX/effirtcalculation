
function gosyagonyu(a) {

      b=a-Math.floor(a);
  if (b>0.5000){
  a=  Math.ceil(a);
  }
else if(b<=0.5){
    a=  Math.floor(a);
}
return a;
}

//値取得--------------------------------------
function calc_sum(){
damage= document.frm1['damage'].value;
waza= document.frm1['waza'].value;
dpoke_real= document.frm1['dpoke_real'].value;
syuzoku= document.frm1['syuzoku'].value;
var kyuusyo= document.getElementById("kyuusyo");
var typeitti= document.getElementById("typeitti");
a_rank =6-document.frm1.a_rank.selectedIndex;
b_rank=6- document.frm1.b_rank.selectedIndex;
weather=document.frm1.weather.selectedIndex;
 debug=document.frm1.weather.options[num].value;

//------------------------------------------
  pershoseimin=0;
  pershoseimax=0;


// damege correction
init=4096;




// attack correction

damagemin = damage;
damagemax=Math.ceil(damage/0.85);

//deffence correction

// last correction

if(kyuusyo.checked){
damage=gosyagonyu(damage*4096/6144);
}

if(typeitti.checked){
damage=gosyagonyu(damage*4096/6144);
}

//
A_realmax=Math.ceil(((damagemax-2)*dpoke_real/22/waza)*50);
A_realmin=Math.ceil(((damagemin-2)*dpoke_real/22/waza)*50);

doryomax=4*(((A_realmax-5)*100/50)-31-syuzoku*2);
doryomax2=4*(((Math.ceil(A_realmax/1.1)-5)*100/50)-31-syuzoku*2);

doryomin=4*(((A_realmin-5)*100/50)-31-syuzoku*2);
doryomin2=4*(((Math.ceil(A_realmin/1.1)-5)*100/50)-31-syuzoku*2);






//adjustment
var n=0;
while(n<1){
    doryomax+=8;
zissuutimax=((syuzoku*2+31+(doryomax/4))*50/100)+5;
culdamage=Math.floor(Math.floor(Math.floor(22*waza*zissuutimax/dpoke_real)/50+2)*0.85);

if(culdamage<=damage){

}
else{
    n=2;
        doryomax-=8;
}
}

var m=0;
while(m<1){
  doryomax2+=8;
zissuutimax2=Math.floor((((syuzoku*2+31+Math.floor(doryomax2/4))*50/100)+5)*1.1);
culdamage2=Math.floor(Math.floor(Math.floor(22*waza*zissuutimax2/dpoke_real)/50+2)*0.85);

if(culdamage2<=damage){
//  doryomax-=4;
}
else {
    m=2;
        doryomax2-=8;
}
}

//---------0--252-------------------
if (doryomax>252){
   doryomax=252;
  pershoseimax=1;
  }
  else if(doryomax<0){
      pershoseimin=1;
   doryomax=0;
}

if (doryomax2>252){
doryomax2=252;
}
else if (doryomax2<0) {
    pershoseimax=-1;
     doryomax2=0;
}




if (doryomin < 0){
    doryomin=0;
      pershoseimin=1;

}
else if(doryomin>252){

    pershoseimin=1;

    if (doryomin2>252){
    doryomin2=252;
    }

}
if (doryomin2 < 0){
    pershoseimin=-1;
    doryomin2=0;
}

if(pershoseimin==1&&pershoseimax==1){
 doryomin=0/0;

 doryomax=0/0;
}

if(pershoseimin==-1&&pershoseimax==-1){
 doryomin2=0/0;

 doryomax2=0/0;
}
//--------------------------------------------------------------

document.frm1['doryomin'].value = doryomin;
document.frm1['doryomax'].value = doryomax;

document.frm1['doryomin2'].value = doryomin2;
document.frm1['doryomax2'].value = doryomax2;
document.frm1['debug'].value = debug;
  return false;
}



function reset_exe(){
  sum1 = "";
  if (confirm('リセットします。')){
    document.frm1['damage'].value = "";
    document.frm1['waza'].value = "";
    document.frm1['dpoke_real'].value = "";
   document.frm1['syuzoku'].value = "";

  }
}
