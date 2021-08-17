/*
Requires a DIV with id "animContainer" in the DOM
*/
window.ldrAnimation = (function () {
  var cont = document.getElementById('animContainer');
  if (cont) {
    var box = document.createElement('div');
    box.s = box.style;
    box.s.width = box.s.height = '8px';
    box.s.backgroundColor = 'rgb(128,128,128)';
    box.s.display = 'block';
    box.s.borderRadius = '11px';
    box.s.position = 'absolute';
    var b1 = box.cloneNode(true);
    b1.id = 'box1';
    b1.s = b1.style;
    var b2 = box.cloneNode(true);
    b2.id = 'box2';
    b2.s = b2.style;
    var b3 = box.cloneNode(true);
    b3.id = 'box3';
    b3.s = b3.style;
    var b4 = box.cloneNode(true);
    b4.id = 'box4';
    b4.s = b4.style;
    b1.s.top = b1.s.left = b2.s.top = b3.s.left = '0px';
    b4.s.top = b4.s.left = b3.s.top = b2.s.left = '11px';
    cont.style.position = 'relative';
    cont.appendChild(b1);
    cont.appendChild(b2);
    cont.appendChild(b3);
    cont.appendChild(b4);
    var ctr = 0;
    var flag = true;
    var vmatrix = [
      [1,1,1,1],
      [0,1,1,1],
      [0,0,1,1],
      [0,0,0,1],
      [1,0,0,0],
      [1,1,0,0],
      [1,1,1,0],
      [1,1,1,1]
    ];
    setInterval(function () {
      var cmatrix = [
        'rgb(128,128,128)',
        'rgb(128,128,128)',
        'rgb(128,128,128)',
        'rgb(128,128,128)'
      ];
      var rmatrix = [
        '0px',
        '0px',
        '0px',
        '0px'
      ];
      cmatrix[ctr % 4] = 'rgb(38,137,252)';
      rmatrix[ctr % 4] = '11px';
      document.getElementById('box1').style.backgroundColor = cmatrix[0];
      document.getElementById('box1').style.borderRadius = rmatrix[0];
      try {
        document.getElementById('box1').style.opacity = vmatrix[ctr % 8][0];
      } catch (_) {
      }
      try {
        document.getElementById('box1').style.filter = 'alpha(opacity=' + (vmatrix[ctr % 8][0] * 100) + ')';
      } catch (_) {
        console.log('err: ' + _);
      }
      document.getElementById('box2').style.backgroundColor = cmatrix[1];
      document.getElementById('box2').style.borderRadius = rmatrix[1];
      try {
        document.getElementById('box2').style.opacity = vmatrix[ctr % 8][1];
      } catch (_) {
      }
      try {
        document.getElementById('box2').style.filter = 'alpha(opacity=' + (vmatrix[ctr % 8][1] * 100) + ')';
      } catch (_) {
      }
      document.getElementById('box3').style.backgroundColor = cmatrix[3];
      document.getElementById('box3').style.borderRadius = rmatrix[3];
      try {
        document.getElementById('box3').style.opacity = vmatrix[ctr % 8][3];
      } catch (_) {
      }
      try {
        document.getElementById('box3').style.filter = 'alpha(opacity=' + (vmatrix[ctr % 8][3] * 100) + ')';
      } catch (_) {
      }
      document.getElementById('box4').style.backgroundColor = cmatrix[2];
      document.getElementById('box4').style.borderRadius = rmatrix[2];
      try {
        document.getElementById('box4').style.opacity = vmatrix[ctr % 8][2];
      } catch (_) {
      }
      try {
        document.getElementById('box4').style.filter = 'alpha(opacity=' + (vmatrix[ctr % 8][2] * 100) + ')';
      } catch (_) {
      }
      ctr++;
    }, 242);
  }
});
window.ldrAnimation();
