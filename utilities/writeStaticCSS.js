var notAllowed="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var isCamelCase=function(str){
  var chars=str.split("");
  for(var i=0;i<chars.length;i++){
    if(notAllowed.indexOf(chars[i])>-1){
      return true;
    }
  }
  return false;
};
var writeCSS=function(elem){
  var styles=window.getComputedStyle(elem,null);
  var styleStr="";
  for(var key in styles){
    if(isNaN(key) && !isCamelCase(key) && styles[key] && typeof styles[key]==="string"){
      styleStr+=key+":"+styles[key]+" !important;";
    }
  }
  var _style=elem.getAttribute("style")||"";
  _style=styleStr+";"+_style;
  elem.setAttribute("style",_style);
};
var allElements=document.querySelectorAll("body *");
for(var i=0;i<allElements.length;i++){
  writeCSS(allElements[i]);
}
