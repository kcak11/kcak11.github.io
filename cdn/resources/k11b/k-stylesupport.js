/*
 * This API can be used to detect whether the browser supports a
 * specific CSS style or not
 * Usage: checkSupport(<stylename>)
 * eg: checkSupport("boxShadow")
 * The API returns true / false based on the check
 *
 * The API can also be used to detect whether any of the style in
 * an array is supported by the browser
 * Usage: checkSupportAny(<array of style names>)
 * eg: checkSupportAny(['borderRadius', 'MozBorderRadius', 'WebkitBorderRadius', 'OBorderRadius', 'KhtmlBorderRadius']);
 * The API returns the first style that is supported else it returns the string value "STYLE_NOT_SUPPORTED"
 *
 * Contact Developer: kcak11@gmail.com for any queries / enhancement requests
 */
(function () {
  var bdy = document.getElementsByTagName('body') [0];
  if (bdy) {
    var bStyle = bdy.style;
    var a = [
    ];
    for (var i in bStyle) {
      a.push(i);
    }
    window._supportedStyles = '|' + a.sort().join('|').toLowerCase() + '|';
  }
  window.checkSupport = function (stylename) {
    if (window._supportedStyles && stylename) {
      return (window._supportedStyles.indexOf('|' + stylename.toLowerCase() + '|') != - 1);
    }
    return false;
  };
  window.checkSupportAny = function (stylenamearray) {
    if (stylenamearray) {
      for (var i = 0; i < stylenamearray.length; i++) {
        if (checkSupport(stylenamearray[i])) {
          return stylenamearray[i];
        }
      }
    }
    return 'STYLE_NOT_SUPPORTED';
  };
}());
