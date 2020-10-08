
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

  document.frm1['doryomin'].value = "";
  document.frm1['doryomax'].value = "";
  document.frm1['doryomin2'].value = "";
 document.frm1['doryomax2'].value = "";

damage= document.frm1['damage'].value;
moves= document.frm1['moves'].value;
dpoke_real= document.frm1['dpoke_real'].value;
syuzoku= document.frm1['syuzoku'].value;

//未入力
if(document.frm1.damage.value==""||document.frm1.moves.value==""||document.frm1.dpoke_real.value==""||document.frm1.syuzoku.value==""){
alert("入力してください");
return false;
}

var kyuusyo= document.getElementById("kyuusyo");
var typeitti= document.getElementById("typeitti");
var double= document.getElementById("double");
var burn= document.getElementById("burn");
var wall= document.getElementById("wall");
a_rank =6-document.frm1.a_rank.selectedIndex;
b_rank=6- document.frm1.b_rank.selectedIndex;
efnum=document.frm1.effective.selectedIndex;
effective=Math.pow(2,efnum-2);
weather=document.frm1.weather.selectedIndex;
field==document.frm1.field.selectedIndex;
a_ability=document.frm1.a_ability.selectedIndex;
b_ability=document.frm1.b_ability.selectedIndex;
a_item=document.frm1.a_item.selectedIndex;
b_item=document.frm1.b_item.selectedIndex;

//debug=document.frm1.weather.selectedIndex;

//  document.frm1['debug'].value = b_ability;
//Attack rank-------------------------------------------
if(a_rank>=0){
a_rank=(a_rank+2)/2;
}
else if(a_rank<0){
a_rank=2/(2-a_rank);
}
//Difence rank--------------------------------------------
if(b_rank>=0){
b_rank=(b_rank+2)/2;
}
else if(b_rank<0){
b_rank=2/(2-b_rank);
}
//--------------------------------------------------------


  var m_normal=0;
  var m_puls=0;
  var effort=0;

  // last correction
  var flug=0;
  var flug2=0;
  var i=0;

  // [2]damege correction------------------------------------------------------------

//オーラブレイク とうそうしん弱化
if(b_ability==2||a_ability==23){
    moves=gosyagonyu(moves*3072/4096);
                              }

//エレキスキン スカイスキン　ノーマルスキン　フェアリースキン　フリーズスキン
//てつのこぶし　すてみ
if(a_ability==3||a_ability==12||a_ability==27||a_ability==36||a_ability==39||a_ability==21||a_ability==13){
    moves=gosyagonyu(moves*4915/4096);
                              }

//とうそうしん（強化）
if(a_ability==24){
        moves=gosyagonyu(moves*5120/4096);
      }
      //バッテリー　ちからずく　すなのちから　アナライズ　カタイツメ　パンクロック　パワースポット
      if(a_ability==30||a_ability==18||a_ability==15||a_ability==1||a_ability==4||a_ability==34||a_ability==33){
              moves=gosyagonyu(moves*5325/4096);
            }
  //フェアリーオーラ ダークオーラ
      if(a_ability==35||a_ability==17){
                    moves=gosyagonyu(moves*5448/4096);
                  }
//テクニシャン　ねつぼうそう　どくぼうそう　がんじょうあご　メガランチャー
if(a_ability==22||a_ability==26||a_ability==25||a_ability==5||a_ability==44){
    moves=gosyagonyu(moves*6144/4096);
                              }

//たいねつ
if(b_ability==7){
    moves=gosyagonyu(moves*2048/4096);
                              }
//かんそうはだ
if(b_ability==3){
    moves=gosyagonyu(moves*5120/4096);
                              }
//ちからのはちまき　ものしりメガネ
if(a_item==9||a_item==19){
    moves=gosyagonyu(moves*4505/4096);
                              }

//プレート　こんごうだま　しらたま　はっきんだま　こころのしずく
if(a_item==7||a_item==5||a_item==6||a_item==12||a_item==2){
    moves=gosyagonyu(moves*4915/4096);
                              }
//ノーマルジュエル
if(a_item==11){
    moves=gosyagonyu(moves*5325/4096);
                              }
//フィールド弱化
if(field==1){
    moves=gosyagonyu(moves*2048/4096);
                              }
//フィールド強化
if(field==2){
    moves=gosyagonyu(moves*5325/4096);
                              }

//final damage
    finalmove=moves;
  //[4] attack correction

  // [6]deffence correction-----------------------------------

    //rank
    dpoke_real=Math.floor(dpoke_real*b_rank);
    //すなあらし
    if(weather==6){
        dpoke_real=Math.floor(dpoke_real*6144/4096);
                  }

//フラワーギフト　ふしぎなうろこ　くさのけがわ
if(b_ability==14||b_ability==4||b_ability==13){
    dpoke_real=gosyagonyu(dpoke_real*6144/4096);
              }

//しんかのきせき　とつげきチョッキ
if(b_item==1||b_item==2){
      dpoke_real=gosyagonyu(dpoke_real*6144/4096);
}
//ファーコート しんかいのうろこ メタルパウダー
if(b_ability==10||b_item==3||b_item==5){
    dpoke_real=gosyagonyu(dpoke_real*8192/4096);
              }

    if( dpoke_real<1){
          dpoke_real=1;
    }

  while(flug<1){

//-----------------------------------------------------------------------------
  A_hosei=4096;
  A_realmax=Math.floor(((syuzoku*2+31+Math.floor(effort/4))*50/100)+5);
  //rank
  A_realmax=Math.floor(A_realmax*a_rank);
  //correction
  //スロースタート
  if(a_ability==16||a_ability==48){
  A_realmax=gosyagonyu(A_realmax*2048/4096);
                                  }

//フラワーギフト　こんじょう　しんりょく　もうか　げきりゅう　むしのしらせ
//もらいび　サンパワー　プラス　マイナス　はがねつかい　ごりむちゅう


if(a_ability==16||a_ability==8||a_ability==10||a_ability==45||a_ability==6||a_ability==43||a_ability==46||a_ability==9||a_ability==37||a_ability==42||a_ability==28||a_ability==7){
A_realmax=gosyagonyu(A_realmax*6144/4096);

                                }
//ちからもち　ヨガパワー　すいほう　はりこみ
if(a_ability==19||a_ability==47||a_ability==11||a_ability==32){
  A_realmax=gosyagonyu(A_realmax*8192/4096);
}

//あついしぼう　すいほう
if(b_ability==1||a_ability==6){

  A_realmax=gosyagonyu(A_realmax*8192/4096);
}
//こだわりハキマキ　こだわりメガネ
if(a_item==3||a_item==4){
  A_realmax=gosyagonyu(A_realmax*6144/4096);
}

//ふといほね　しんかいのキバ　でんきだま
if(a_item==13||a_item==10){
  A_realmax=gosyagonyu(A_realmax*6144/4096);
}

  if(A_realmax<1){
      A_realmax=1;
  }
//----------------------------------------------------------------
  A_realmax2=Math.floor((Math.floor((syuzoku*2+31+Math.floor(effort/4))*50/100)+5)*1.1);
  //rank
  A_realmax2=Math.floor(A_realmax2*a_rank);
  //correction
  A_realmax2=gosyagonyu(A_realmax2*A_hosei/4096);

  if(A_realmax2<1){
      A_realmax2=1;
  }

//final damage

  culdamage=Math.floor(Math.floor(22*finalmove*A_realmax/dpoke_real)/50+2);
  culdamage2=Math.floor(Math.floor(22*finalmove*A_realmax2/dpoke_real)/50+2);

//other correction

if( culdamage<1){
      culdamage=1;
}

if( culdamage2<1){
      culdamage2=1;
}

//急所
if(kyuusyo.checked){
culdamage=gosyagonyu(culdamage*6144/4096);
culdamage2=gosyagonyu(culdamage2*6144/4096);
    if(a_ability==14){
      culdamage=gosyagonyu(culdamage*6144/4096);
      culdamage2=gosyagonyu(culdamage2*6144/4096);
    }

}

//タイプ一致
if(typeitti.checked){
culdamage=gosyagonyu(culdamage*6144/4096);
culdamage2=gosyagonyu(culdamage2*6144/4096);
}

//タイプ相性
culdamage=Math.floor(culdamage*effective);
culdamage2=Math.floor(culdamage2*effective);


//

//ダブルバトル
if(double.checked){
culdamage=gosyagonyu(culdamage*3072/4096);
culdamage2=gosyagonyu(culdamage2*3072/4096);
}

//やけど
if(burn.checked){
culdamage=gosyagonyu(culdamage*3072/4096);
culdamage2=gosyagonyu(culdamage2*3072/4096);
}

//天候補正
if(weather==0){
}
else if(weather==1||weather==3){
culdamage=gosyagonyu(culdamage*6144/4096);
culdamage2=gosyagonyu(culdamage2*6144/4096);
}
else if(weather==2||weather==4){
culdamage=gosyagonyu(culdamage*2048/4096);
culdamage2=gosyagonyu(culdamage2*2048/4096);
}
else{

}
//[7]ダメージの補正値

//壁
if(wall.checked){
                    if(double.checked){
                        culdamage=gosyagonyu(culdamage*2732/4096);
                        culdamage2=gosyagonyu(culdamage2*2732/4096);
                    }
                    else{
                      culdamage=gosyagonyu(culdamage*2048/4096);
                      culdamage2=gosyagonyu(culdamage2*2048/4096);
                    }

}

//いろめがね　もふもふ（ほのお）
if(a_ability==2||b_ability==19){
  culdamage=gosyagonyu(culdamage*8192/4096);
  culdamage2=gosyagonyu(culdamage2*8192/4096);
}

//マルチスケイル ファントムガード　もふもふ　パンクロック　こおりのりんぷん
if(b_ability==11||b_ability==17||b_ability==5||b_ability==18||b_ability==9){

  culdamage=gosyagonyu(culdamage*8192/4096);
  culdamage2=gosyagonyu(culdamage2*8192/4096);

}



//フレンドガード　ハードロック　フィルター　プリズムアーマー
if(b_ability==14||b_ability==8||b_ability==12||b_ability==15){

    culdamage=gosyagonyu(culdamage*3072/4096);
    culdamage2=gosyagonyu(culdamage2*3072/4096);

              }

//メトロノーム
switch (a_item) {
  case 14:
  culdamage=gosyagonyu(culdamage*4915/4096);
  culdamage2=gosyagonyu(culdamage2*4915/4096);
  break;
  case 15:
  culdamage=gosyagonyu(culdamage*5734/4096);
  culdamage2=gosyagonyu(culdamage2*5734/4096);
  break;

  case 16:
  culdamage=gosyagonyu(culdamage*6553/4096);
  culdamage2=gosyagonyu(culdamage2*6553/4096);
  break;

  case 17:
  culdamage=gosyagonyu(culdamage*7372/4096);
  culdamage2=gosyagonyu(culdamage2*7372/4096);
  break;
  case 18:
  culdamage=gosyagonyu(culdamage*8192/4096);
  culdamage2=gosyagonyu(culdamage2*8192/4096);
  break;

  default:
    break;
}



//

//たつじんのおび
if(a_item==8){
  culdamage=gosyagonyu(culdamage*4915/4096);
  culdamage2=gosyagonyu(culdamage2*4915/4096);
              }

//いのちのたま
if(a_item==1){
  culdamage=gosyagonyu(culdamage*5324/4096);
  culdamage2=gosyagonyu(culdamage2*5324/4096);
              }

//半減きのみ
if(b_item==4){

  culdamage=gosyagonyu(culdamage*2048/4096);
  culdamage2=gosyagonyu(culdamage2*2048/4096);

}

//ふみつけ あなをほる　
//
  if(culdamage>=damage&&m_normal==0){

      doryomin=effort;
      m_normal=1;

  }

  if(Math.floor(culdamage*0.85)>damage){
    if(i==0){ //ダメージが性格む補正のダメージ範囲より低い
        doryomin=0/0;
          doryomax=0/0;
              flug=2;
    }
    else if(i==1){　
      doryomax=effort-4;
      flug=2;
      }
      else if(i>=32){　
        doryomax=252;
        flug=2;
        }
    else{
    doryomax=effort-8;
    flug=2;
    }
  }

// 性格補正＋
  if(culdamage2>=damage&&m_puls==0){

      doryomin2=effort;
      m_puls=1;
                                  }



  if(Math.floor(culdamage2*0.85)>damage&&flug2==0){
    if(i==0){
        doryomin2=0/0;
          doryomax2=0/0;
              flug2=2;
            }
    else if(i==1){
        doryomax2=effort-4;
        flug2=2;
                }
    else if(i>=32){　
        doryomax2=252;
          flug2=2;
          }

      else{
      doryomax2=effort-8;
      flug2=2;
          }
                                                  }

    i+=1;

    if(i==1){
      effort=4;
    }
    else if(i>1000){
      break;
    }
    else{
      effort+=8;
    }

    // 強制終了

  }//計算終わり


if (doryomin>252){
  doryomin=0/0;
    doryomax=0/0;

}

if (doryomin2>252){
  doryomin2=0/0;
    doryomax2=0/0;

}

//adjustment
//---------0--252-------------------

//--------------------------------------------------------------

document.frm1['doryomin'].value = doryomin;
document.frm1['doryomax'].value = doryomax;

document.frm1['doryomin2'].value = doryomin2;
document.frm1['doryomax2'].value = doryomax2;

  return false;
}



function reset_exe(){

    document.frm1['damage'].value = "";
    document.frm1['moves'].value = "";
    document.frm1['dpoke_real'].value = "";
   document.frm1['syuzoku'].value = "";

   document.frm1['doryomin'].value = "";
   document.frm1['doryomax'].value = "";
   document.frm1['doryomin2'].value = "";
  document.frm1['doryomax2'].value = "";

}
