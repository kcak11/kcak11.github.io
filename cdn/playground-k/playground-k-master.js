/*
Master File - Not to be Edited by anyone
This is the master file for the Playground
Author: K.C.Ashish Kumar
*/
window._externalContentHash="Zzh5YTNtZjBpZGM1djI2NzdlNGdqaDlxZ2I4aHYyMmp4NDE3cHllcWR1eWFxcWRtdnJueHhkMTh5aXJ4NDc5MDBkdDE4bW1kcDFucnEweGt3";
var PlaygroundK={};
PlaygroundK.docElemStyle=document.documentElement.style;
PlaygroundK.addCSS=function(){
  var css="";
  css+="#playgroundK_Master.hideAll *{visibility:hidden;} *{box-sizing:border-box;} html,body{height:0px !important;width:0px !important;overflow:hidden !important;min-width:0px !important;}";
  css+="body {position:static !important;font-size:12px;font-family:Verdana;}"
  css+="body *{visibility:hidden;}";
  css+="#playgroundK_Master, #playgroundK_Master *{visibility:visible;}";
  css+="#playgroundK_Master{padding:22px;position:absolute;top:0px;left:0px;right:0px;bottom:0px;background-color:#fff;overflow-x:hidden;overflow-y:auto;}";
  css+=".pgkCompatible #playgroundK_Master{background-image:url('//cdn.kcak11.com/cdn/playground-k/files/images/pgkBG001.png');background-size:100% 100%;}";
  css+="#playgroundK_Master.hideAll #pgkBlackBar{visibility:visible;display:block;} #pgkBlackBar{display:none;}";
  css+="#pgkHeader{width:100%;letter-spacing:11px;font-weight:bold;font-style:italic;color:rgb(56,154,214);text-align:center;font-size:44px;}";
  css+="#pgkHeader img#pgkLogo{width:150px;height:150px;}";
  css+="#pgkInfoContent{color:rgb(56,154,214);font-weight:bold;font-size:22px;}";
  css+="#pgkInfoContent td.lbl{color:rgb(255,0,0);}";
  css+="#pgkInfoContent td.lbl+td{color:rgb(255,0,0);width:44px;text-align:center;}";
  css+="#pgkInfoContent td.uaInfoTD{cursor:pointer;background-color:rgb(56,154,214);text-align:center;color:#fff;font-weight:bold;border:4px solid #000;}"
  css+="#pgkInfoContent td.spacer{height:22px;}";
  css+="#pgkCustomInfoContent{text-align:center;width:100%;font-size:22px;font-weight:bold;margin-top:22px;}";
  var sSheet=document.createElement("style");
  sSheet.type="text/css";
  if(sSheet.styleSheet){
    sSheet.styleSheet.cssText=css;
  }else{
    sSheet.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName("head")[0].appendChild(sSheet);
};
PlaygroundK.constructUILayer=function(){
  PlaygroundK.docElemStyle.overflow="hidden";
  PlaygroundK.docElemStyle.display="none";
  PlaygroundK.pgk=document.createElement("div");
  PlaygroundK.pgk.id="playgroundK_Master";
  var aStyle=PlaygroundK.pgk.style;
  aStyle.zIndex=Math.pow(2,31)-1;
  var chkAndAppend=function(){
    setTimeout(function(){
      try{
        document.getElementsByTagName("body")[0].style.overflow="hidden";
        document.getElementsByTagName("body")[0].appendChild(PlaygroundK.pgk);
        PlaygroundK.addCSS();
        PlaygroundK.addMasterHTML();
        window.onresize=function(e){
          PlaygroundK.updateScreenData();
        };
        document.oncontextmenu=function(e){return false;};
        PlaygroundK.updateScreenData();
        PlaygroundK.decorateUI();
        PlaygroundK.includeJS("//cdn.kcak11.com/cdn/playground-k/playground-k-custom.js?interceptID="+(new Date()).getTime().toString(36).split("").reverse().join("")+"-"+Math.ceil(Math.random()*Math.pow(11,7)).toString(11));
      }catch(exjs){
        chkAndAppend();
      }
    },121);
  };
  chkAndAppend();
};
PlaygroundK.addMasterHTML=function(){
  PlaygroundK.docElemStyle.display="block";
  var htmlContent="<div id=\"pgkBlackBar\" style=\"position:absolute;top:0px;left:0px;right:0px;height:90px;background-color:#000;\"></div><div id=\"pgkHeader\">Playground<br/><br/><img id=\"pgkLogo\" src=\"//cdn.kcak11.com/cdn/playground-k/files/images/avatar.png\" onclick=\"alert(decodeURIComponent('Powered%20by%3A%0A%0Ahttp%3A%2F%2Fashishkumarkc.com'));\" /></div><br/>";
  htmlContent+="<div id=\"pgkInfoContent\"><table align=\"center\"><tr><td class=\"lbl\">Orientation</td><td>: </td><td id=\"pgkOrientation\"></td></tr><tr><td class=\"lbl\">Screen Width</td><td>: </td><td id=\"pgkSW\">"+screen.width+"px</td></tr><tr><td class=\"lbl\">Screen Height</td><td>: </td><td id=\"pgkSH\">"+screen.height+"px</td></tr><tr><td class=\"lbl\" >Viewport Width</td><td>: </td><td id=\"pgkVW\">"+PlaygroundK.pgk.offsetWidth+"px</td></tr><td class=\"lbl\">Viewport Height</td><td>: </td><td id=\"pgkVH\">"+PlaygroundK.pgk.offsetHeight+"px</td></tr><tr><td class=\"spacer\">&nbsp;</td></tr><tr><td colspan=\"3\" class=\"uaInfoTD\" onclick=\"alert(navigator.userAgent);\">View UserAgent Info</td></tr></table></div>";
  htmlContent+="<br/><div id=\"pgkCustomInfoContent\">For customizing the playground, modify the file:<br/>playground-k-custom.js</div>";
  PlaygroundK.pgk.innerHTML=htmlContent;
};
PlaygroundK.updateScreenData=function(){
  var l="Landscape",p="Portrait",o;
  if(!window.orientation){
    o=(PlaygroundK.pgk.offsetWidth>=PlaygroundK.pgk.offsetHeight)?l:p;
  }else{
    if(window.orientation==90 || window.orientation==-90){
      o=l;
    }else{
      o=p;
    }
  }
  try{
  document.getElementById("pgkSW").innerHTML=screen.width;
  document.getElementById("pgkSH").innerHTML=screen.height;
  document.getElementById("pgkVW").innerHTML=PlaygroundK.pgk.offsetWidth;
  document.getElementById("pgkVH").innerHTML=PlaygroundK.pgk.offsetHeight;
  document.getElementById("pgkOrientation").innerHTML=o;
  }catch(__){}
};
PlaygroundK.includeJS=function(scriptURL){
  var scrElem=document.createElement("script");
  scrElem.type="text/javascript";
  scrElem.src=scriptURL;
  document.getElementsByTagName("head")[0].appendChild(scrElem);
};
PlaygroundK.decorateUI=function(){
var applyDecoration=false;
var cssAttributeNames = ['borderRadius', 'MozBorderRadius', 'WebkitBorderRadius', 'OBorderRadius', 'KhtmlBorderRadius'];
for (var i = 0; i < cssAttributeNames.length; i++) {
    var attributeName = cssAttributeNames[i];
    if (window.document.getElementsByTagName("body")[0].style[attributeName] !== undefined) {
        applyDecoration=true;
        break;
    }
}
  if(applyDecoration){
    var logoElem=document.getElementById("pgkLogo");
    if(logoElem){
     logoElem.style.border="4px solid rgb(56,154,214)";
     logoElem.style.borderRadius="242px";
     logoElem.style.padding="25px";
     logoElem.style.backgroundColor="#fff";
     logoElem.style.boxShadow="0px 0px 22px rgb(56,154,214)";
    }
  }
  var uA=navigator.userAgent;
  var nonCompatible="MSIE 6|MSIE 7|MSIE 8".split("|");
  var chkCompat=true;
  for(var i=0;i<nonCompatible.length;i++){
    if(uA.indexOf(nonCompatible[i])!==-1){
      chkCompat=false;
      break;
    }
  }
  if(document.compatMode==="BackCompat"){
    chkCompat=false;
  }
  if(chkCompat){
    document.documentElement.className+=" pgkCompatible";
  }
};
PlaygroundK.init=function(){
  try{
    document.querySelectorAll("meta[name=viewport]")[0].setAttribute("content","width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no");
  }catch(exjs){}
  PlaygroundK.constructUILayer();
};
PlaygroundK.init();

var hash="";
setInterval(function(){
  try{
    if(!document.getElementById("playgroundK_Master")){return;}
    if(hash===window.top.location.hash){return;}else{hash=window.top.location.hash;}
    if(window.top.location.hash=="#logoonly"){
        document.getElementById("playgroundK_Master").className+=" hideAll ";
        document.getElementById("pgkLogo").style.visibility="visible";
    }else{
        try{
            var s=document.getElementById("playgroundK_Master").className;
            s=s.replace(new RegExp("hideAll","g"),"");
            document.getElementById("playgroundK_Master").className=s;
        }catch(exjs){}
    }
  }catch(_){}
},22);
