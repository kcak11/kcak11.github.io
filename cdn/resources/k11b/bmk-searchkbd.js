/*
This file cannot be used standalone
*/
var searchField = document.getElementById('searchbox');
var keyHandler = function (e) {
  e = e || window.event;
  e.target = e.target || e.srcElement;
  e.which = e.which || e.keyCode;
  if (document.activeElement !== searchField) {
    searchField.focus();
  }
};
try {
  document.documentElement.attachEvent('onkeydown', keyHandler);
} catch (exjs) {
  document.documentElement.addEventListener('keydown', keyHandler, false);
}
