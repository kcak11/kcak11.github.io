(function () {
  if (window.top.location.hash === '#intranetaccess' || (""+window.top.location.href).indexOf("intranetaccess")!==-1) {
    window.top.location.hash = '';
    document.cookie = '_bmkAuth=BMK:p93i6fbbooc3nldivrytc;path=/';
  }
  window.loadAuthData = function (a) {
    if (window.bmkAuthKey(document.getElementById('_bmk_authvalkey').value)) {
      window.open(a, '_blank');
      window.closeInformationOverlay();
    } else {
      window.closeInformationOverlay();
      alert('Invalid Key');
    }
  };
  window.loadData = function (a, au) {
    if (document.cookie.indexOf('_bmkAuth=BMK:p93i6fbbooc3nldivrytc') == - 1 && au) {
      window.showInformationOverlay('Enter Key:<br/><input type="password" id="_bmk_authvalkey" style="text-align:center;width:100%;"/><br/><input type="button" value="OK" onclick="window.loadAuthData(\'' + a + '\');"/>', '200px', 9999999);
      try {
        document.getElementById('_bmk_authvalkey').focus();
        document.getElementById('_bmk_authvalkey').onkeydown = function (e) {
          if (!e) {
            e = window.event;
          }
          if (!e.which) {
            e.which = e.keyCode;
          }
          if (e.which == 13) {
            window.loadAuthData(a);
          }
        };
      } catch (exjs) {
      }
    } else {
      window.open(a, '_blank');
    }
  };
  window.bmkAuthKey = function (a) {
    if (!a) {
      return false;
    }
    var _k = '';
    for (var i = 0; i < a.length; i++) {
      _k += (a.charCodeAt(i) ^ 11 ^ 2 ^ 121 ^ (i + 1) ^ (a.length)).toString(36);
    }
    if (_k === '1kkmbr1o271y1t29') {
      document.cookie = '_bmkAuth=BMK:p93i6fbbooc3nldivrytc;path=/';
      return true;
    }
    return false;
  };
}());
