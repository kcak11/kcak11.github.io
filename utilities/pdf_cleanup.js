/**
Remove Unnecessary attributes from DOM
*/
document.querySelectorAll("a,img,script,link,canvas").forEach(function(o){o.parentNode.removeChild(o);});
//document.querySelectorAll("*").forEach(function(o){o.removeAttribute("style");});
/*start clean all attributes*/
document.querySelectorAll('*').forEach(function (o) {
  if (o.attributes) {
    var t = [
    ];
    for (var i in o.attributes) {
      if (o.attributes[i]['localName']) {
        t.push(o.attributes[i]['localName']);
      }
    }
    t.forEach(function (a) {
      o.removeAttribute(a);
    });
  }
});
/*end clean all attributes*/
document.querySelectorAll("*").forEach(function(o){console.log(o.tagName);});
