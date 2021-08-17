(function () {
window._protocol="";
window.includeScript=function(scr_url){
  var s=document.createElement("script");s.type="text/javascript";s.src=scr_url;
  document.getElementsByTagName("head")[0].appendChild(s);
};
window.includeScript(window._protocol+'//cdn.kcak11.com/cdn/resources/k11b/bmk-oldbrowser.js?interceptID=' + (new Date()).getTime().toString(36).split('').reverse().join('') + '-' + Math.ceil(Math.random() * Math.pow(11, 7)).toString(11));
window.includeScript(window._protocol+'//cdn.kcak11.com/cdn/resources/k11b/bmk-auth.js?interceptID=' + (new Date()).getTime().toString(36).split('').reverse().join('') + '-' + Math.ceil(Math.random() * Math.pow(11, 7)).toString(11));
var uA=""+navigator.userAgent;
if(uA.indexOf("MSIE 8")==-1 && uA.indexOf("MSIE 7")==-1 && uA.indexOf("MSIE 6")==-1){
  document.documentElement.className+=" bmkCompatible";
}
var rcolors = ['rgb(255,109,63)','rgb(255,155,0)','rgb(255,218,0)','rgb(149,214,65)','rgb(28,232,181)','rgb(63,195,255)','rgb(184,196,201)'];
window.bmkBG=window._protocol+"//cdn.kcak11.com/cdn/resources/k11b/bookmarklinks/bmk_hdr_bg.png";
window.logoImg="//cdn.kcak11.com/cdn/resources/k11b/bookmarklinks/bmk_logo.png";
var cacheLogo=document.createElement("img");
cacheLogo.style.display="none";
cacheLogo.id="cacheLogoImage";
cacheLogo.src=window.logoImg;
document.getElementsByTagName("body")[0].appendChild(cacheLogo);
var docCover=document.createElement("div");
docCover.style.backgroundColor="#fff";
docCover.style.zIndex=22000;
docCover.style.position="absolute";
docCover.style.top=docCover.style.right=docCover.style.bottom=docCover.style.left="0px";
docCover.id="docCoverOverlay";
document.getElementsByTagName("body")[0].appendChild(docCover);
window.showLinkInfo = function () {
if (document.getElementById("cacheLogoImage") && document.getElementById("cacheLogoImage").complete && window.bkLinkData) {
  var linksdata = '';
  var ctr = 0;
  for (var title in window.bkLinkData) {
    if (window.bkLinkData[title] !== 'divider') {
      var url = '';
      var auth = false;
      if (window.bkLinkData[title]['auth'] === 'yes') {
        url = window.bkLinkData[title]['dest'];
        auth = true;
      } else {
        url = window.bkLinkData[title];
      }
      linksdata += '<div data-url="' + url + '" onclick="window.loadData(this.getAttribute(\'data-url\'),' + auth + ');setTimeout(function(){window.top.location.hash=\'_act\';},121);" class="linkcontainer" style="background-color:' + rcolors[ctr % rcolors.length] + ';">' + title + '</div>';
      ctr++;
    } else {
      linksdata += '<div style="margin-top:11px;border-top:2px dashed #ff0000;padding-top:5px;text-align:center;"/>' + title + '</div>';
    }
  }
  document.title = 'Bookmark Links (Powered by Ashish\'s Web)';
  var url="";
  if((""+window.top.location).indexOf("kcak11-links.blogspot.in")!=-1 || (""+window.top.location).indexOf("bookmarks.ashishkumarkc.com")!=-1){
    url="http://www.ashishkumarkc.com";
  }else{
    url="http://www.ashishkumarkc.com";
  }
  var cssbody = '';
  var constructbody = '';
  /*DO NOT ADD !IMPORTANT TO CSS PROPERTY, ALREADY TAKEN CARE VIA SCRIPT*/
  cssbody += '*{box-sizing:border-box;} html{overflow:hidden;background-color:#fff;} body{min-width:0px;overflow:hidden;position:static;margin:0px;background-color:#fff;}';
  cssbody += 'body{font-family:Verdana;font-size:16px;letter-spacing:2px;color:#fff;} a{text-decoration:none;color:#000;border-bottom:2px dashed #ff0000;}';
  cssbody += 'div.linkcontainer{color:#000;border:4px solid #000;min-width:170px;border-top-left-radius:22px;border-bottom-right-radius:22px;-webkit-border-top-left-radius:22px;-webkit-border-bottom-right-radius:22px;-moz-border-top-left-radius:22px;-moz-border-bottom-right-radius:22px;position:relative;cursor:pointer;margin-left:22px;width:auto;display:inline-block;overflow:hidden;margin-top:22px;padding-left:11px;padding-right:11px;padding-top:5px;padding-bottom:5px;height:auto;box-shadow:0px 0px 11px #000;-webkit-box-shadow:0px 0px 11px #000;-moz-box-shadow:0px 0px 11px #000;text-align:center;}';
  cssbody += 'div.linkcontainer:hover{box-shadow:0px 0px 22px #ffba75;-webkit-box-shadow:0px 0px 22px #ffba75;-moz-box-shadow:0px 0px 22px #ffba75;top:2px;left:2px;}';
  cssbody += '#infoWrapperDiv{color:#000;} body *{visibility:hidden;} #docCoverOverlay, #bmkContainer, #bmkContainer *{visibility:visible;} #infoMaskOverlay, #infoBodyOverlay, #infoBodyOverlay *{visibility:visible;} .bmkCompatible #bmkContainer.bgEnabled{background-image:url(\''+window.bmkBG+'\');background-repeat:no-repeat;}';
  constructbody += '<div id="dynamicWrittenContent" style="padding:22px;background-color:#fff;">'; /*MAIN_START*/
  constructbody += '<div style="display:none;" data-type="text/javascript">function abtBox(a){document.getElementById(\'aboutBox\').style.display=a;return false;};document.onkeydown=function(e){if(!e){e=window.event;}if(!e.which){e.which=e.keyCode;}if(e.which==27){abtBox("none");}};document.oncontextmenu=function(e){abtBox("inline-block");return false;}; var sboxval="";setInterval(function(){var sbox=document.getElementById("searchbox");if(sbox && sbox.value!==sboxval){sboxval=sbox.value;sboxval=sboxval.toLowerCase();var btns=document.querySelectorAll("div[data-url]");for(var iq=0;iq< btns.length;iq++){if(btns[iq].innerHTML.toLowerCase().indexOf(sboxval)==-1){btns[iq].style.opacity=0.25;btns[iq].style.filter="alpha(opacity=25)";}else{btns[iq].style.opacity=1;btns[iq].style.filter="alpha(opacity=100)";}}}},200); </div>';
  constructbody += '<div style=\"position:absolute;top:0px;left:0px;right:0px;text-align:center;height:150px;background-image:url(\'//cdn.kcak11.com/cdn/resources/k11b/bookmarklinks/bmk_hdr_bg.png\');\"><img id=\"logoImg\" src=\''+window.logoImg+'\' /><br/><input type=\"text\" style=\"width:200px;position:absolute;left:50%;margin-left:-100px;\" id=\"searchbox\" placeholder=\"Search\" /></div><div style=\"height:160px;\"></div><div style="text-align:center;margin-left:auto;">' + linksdata + '</div><div style=\"display:none;\" data-type=\"text/javascript\">var cacheWidth=0, logoElem=document.getElementById(\"logoImg\"), bdy=document.getElementsByTagName(\"body\")[0], _bc=document.getElementById(\"bmkContainer\"); setInterval(function(){if(cacheWidth!=_bc.offsetWidth){cacheWidth=_bc.offsetWidth;if(_bc.offsetWidth<480){logoElem.style.width=(_bc.offsetWidth-44)+"px";} }},100);setTimeout(function(){document.getElementById(\"searchbox\").focus();bdy.className=bdy.className;document.getElementById(\"docCoverOverlay\").style.display=\"none\";},500);</div>';
  constructbody += '<div id="aboutBox" style="color:#000;z-index:2200;min-width:430px;min-height:137px;display:none;position:fixed;top:0px;left:0px;bottom:0px;right:0px;text-align:center;"><div style="position:absolute;top:50%;left:50%;margin-left:-212.5px;margin-top:-70px;box-shadow:0px 0px 121px #0000ff;-webkit-box-shadow:0px 0px 121px #0000ff;-moz-box-shadow:0px 0px 121px #0000ff;border-radius:44px;-webkit-border-radius:44px;-moz-border-radius:44px;width:425px;height:140px;border:2px solid #000;background-color:rgb(113,184,255);display:inline-block;"><br/>Developed by K.C.Ashish Kumar<br/><a href="'+url+'" style="font-size:11px;letter-spacing:normal;border-bottom:1px solid #ff0000;" target="_blank">'+url+'</a><br/><br/><button type="button" onclick="document.getElementById(\'aboutBox\').style.display=\'none\';">Close</button><div style="width:1px;height:1px;overflow:hidden;"></div><span style="display:inline-block;font-size:11px;">( or Hit \'ESC\' )</span></div></div>';
  constructbody += '</div>'; /*MAIN_CLOSE*/
  var docref = window.top.document;
  var cssStyle = document.createElement('style');
  cssStyle.type = 'text/css';
  var re = new RegExp(';', 'g');
  cssbody = cssbody.replace(re, ' !important;');
  if (cssStyle.styleSheet) {
    cssStyle.styleSheet.cssText = cssbody;
  } else {
    cssStyle.appendChild(document.createTextNode(cssbody));
  }
  setTimeout(function () {
    docref.getElementsByTagName('head') [0].appendChild(cssStyle);
    docref.documentElement.style.overflow = 'hidden';
    docref.getElementsByTagName('body') [0].style.overflow = 'hidden';
    setTimeout(function () {
      var bmkContainer = docref.createElement('div');
      bmkContainer.id = 'bmkContainer';
      bmkContainer.style.position = 'absolute';
      bmkContainer.style.top = bmkContainer.style.left = bmkContainer.style.right = bmkContainer.style.bottom = '0px';
      bmkContainer.style.zIndex = 11000;
      bmkContainer.style.overflowY = 'auto';
      bmkContainer.style.overflowX = 'hidden';
      bmkContainer.style.visibility="hidden";
      bmkContainer.style.backgroundColor = '#fff';
      bmkContainer.innerHTML = constructbody;
      docref.getElementsByTagName('body') [0].appendChild(bmkContainer);
        document.getElementById('dynamicWrittenContent').style.backgroundColor='transparent';
        window._chk=function(){
          var bContainer=document.getElementById('bmkContainer');
          var logoImgElem=document.getElementById('logoImg');
          if (bContainer && bContainer.offsetWidth!=0 && bContainer.offsetHeight!=0 && logoImgElem && logoImgElem.complete) {
            if((""+bContainer.className).indexOf("bgEnabled")==-1){
                bContainer.className+=" bgEnabled";
            }
            bContainer.style.backgroundSize=bContainer.offsetWidth + 'px ' + bContainer.offsetHeight + 'px';
            bContainer.style.visibility="visible";
          } else {
            setTimeout(function(){window._chk();}, 50);
          }
        };
        window._chk();
        window.onresize=function(){window._chk();};
      setTimeout(function () {
        docref.documentElement.style.display = 'block';
        var bodyElementBKLink = document.getElementsByTagName('body') [0];
        bodyElementBKLink.style.display = 'none';
        setTimeout(function () {
          bodyElementBKLink.style.display = 'block';
        }, 0);
        var scriptElems = document.getElementById('dynamicWrittenContent').getElementsByTagName('div');
        for (var i = 0; i < scriptElems.length; i++) {
          if (scriptElems[i].getAttribute('data-type') == 'text/javascript') {
            try {
              var cont=scriptElems[i].textContent?scriptElems[i].textContent:scriptElems[i].innerText;
              Function(cont)();
            } catch (exjs) {
              if (window.console && window.console.log) {
                window.console.log('Iteration ' + i + ':' + exjs.message+"\n"+scriptElems[i].innerHTML);
              }
            }
          }
        }        
        window.includeScript(window._protocol+'//cdn.kcak11.com/cdn/resources/k11b/ldr-anim.js?interceptID=' + (new Date()).getTime().toString(36).split('').reverse().join('') + '-' + Math.ceil(Math.random() * Math.pow(11, 7)).toString(11));
        window.includeScript(window._protocol+'//cdn.kcak11.com/cdn/resources/k11b/overlay.js?interceptID=' + (new Date()).getTime().toString(36).split('').reverse().join('') + '-' + Math.ceil(Math.random() * Math.pow(11, 7)).toString(11));
        window.includeScript(window._protocol+'//cdn.kcak11.com/cdn/resources/k11b/bmk-searchkbd.js?interceptID=' + (new Date()).getTime().toString(36).split('').reverse().join('') + '-' + Math.ceil(Math.random() * Math.pow(11, 7)).toString(11));
        /*setTimeout(function(){var links=document.querySelectorAll("div.linkcontainer");for(var i=0;i<links.length;i++){(function(p){setTimeout(function(){p.style.fontWeight="bold";},(i*121));}(links[i]));}},1000);*/
      }, 121);
    }, 121);
  }, 121);
}else{
    setTimeout(function(){window.showLinkInfo();},11);
}
}
try {
document.querySelectorAll('meta[name=viewport]') [0].setAttribute('content', 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no');
} catch (exjs) {
}
setTimeout(function () {
var preChk=function(){
    if(document.getElementById("bmk_preloader").complete){
        window.showLinkInfo();
    }else{
        setTimeout(function(){preChk();},22);
    }
};
var chkBodyExists=function(){ /*Fix for Opera 12.16*/
    if(document.getElementsByTagName("body")[0]){
        var pL=document.createElement("img");pL.id="bmk_preloader";pL.src=window.bmkBG;pL.style.width=pL.style.height="0px";
        document.getElementsByTagName("body")[0].appendChild(pL);
        preChk();
    }else{
        setTimeout(function(){chkBodyExists();},11);
    }
};
var oldBrowserDetectorExists=function(){
    if(window.isOldBrowser && typeof window.isOldBrowser==="function"){
        if(window.isOldBrowser && window.isOldBrowser()){
          alert("We have detected that you are using a very old browser.\nPlease upgrade your browser to continue on this site.\n\nThanks.");
        }else{
          chkBodyExists();
        }
    }else{
        setTimeout(function(){oldBrowserDetectorExists();},22);
    }
};
oldBrowserDetectorExists();
}, 121);
}());
