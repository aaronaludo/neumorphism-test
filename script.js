var size = document.querySelector('#size');
var radius = document.querySelector('#radius');
var distance = document.querySelector('#distance');
var intensity = document.querySelector('#intensity');
var blur0 = document.querySelector('#blur');
var color = document.querySelector('#color');
var topleft = document.querySelector('#top-left');
var topright = document.querySelector('#top-right');
var bottomleft = document.querySelector('#bottom-left');
var bottomright = document.querySelector('#bottom-right');
var flat = document.querySelector('#flat');
var concave = document.querySelector('#concave');
var convex = document.querySelector('#convex');
var pressed = document.querySelector('#pressed');
var sizevalue = document.querySelector('#sizevalue');
var test = document.querySelector('#test');
var radiusvalue = document.querySelector('#radiusvalue');
var borderradius = document.querySelector('#borderradius');
var distancevalue = document.querySelector('#distancevalue');
var blurvalue = document.querySelector('#blurvalue');
var boxshadow = document.querySelector('#boxshadow');
var intensityvalue = document.querySelector('#intensityvalue');
var colorvalue = document.querySelector('#colorvalue');
var background = document.querySelector('#background');
var container = document.querySelector('#container');

function colorLuminance(hex, lum) {
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  let rgb = '#',
    c,
    i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += ('00' + c).substr(c.length)
  }

  return rgb
}

function inputRangeBackgroundBoxshadow(pressed_topleft, pressed_topright, pressed_bottomleft, pressed_bottomright, default_topleft, default_topright, default_bottomleft, default_bottomright){
  if(pressed.className === 'active-shape'){
    if(topleft.className === 'active-position'){
      test.style.boxShadow = pressed_topleft;
      boxshadow.innerHTML = pressed_topleft;
    }else if(topright.className === 'active-position'){
      test.style.boxShadow = pressed_topright;
      boxshadow.innerHTML = pressed_topright;
    }else if(bottomleft.className === 'active-position'){
      test.style.boxShadow = pressed_bottomleft;
      boxshadow.innerHTML = pressed_bottomleft;
    }else if(bottomright.className === 'active-position'){
      test.style.boxShadow = pressed_bottomright;
      boxshadow.innerHTML = pressed_bottomright;
    }
  }else{
    if(topleft.className === 'active-position'){
      test.style.boxShadow = default_topleft;
      boxshadow.innerHTML = default_topleft;
    }else if(topright.className === 'active-position'){
      test.style.boxShadow = default_topright;
      boxshadow.innerHTML = default_topright;
    }else if(bottomleft.className === 'active-position'){
      test.style.boxShadow = default_bottomleft;
      boxshadow.innerHTML = default_bottomleft;
    }else if(bottomright.className === 'active-position'){
      test.style.boxShadow = default_bottomright;
      boxshadow.innerHTML = default_bottomright;
    }
  }
}

function positionBackgroundBoxshadow(pressed_boxshadow, default_boxshadow, concave_background, convex_background){
  if(pressed.className === 'active-shape'){
    test.style.boxShadow = pressed_boxshadow;
    boxshadow.innerHTML = pressed_boxshadow;
  }else if(concave.className === 'active-shape'){
    test.style.boxShadow = default_boxshadow;
    boxshadow.innerHTML = default_boxshadow;
    test.style.background = concave_background;
    background.innerHTML = concave_background;
  }else if(convex.className === 'active-shape'){
    test.style.boxShadow = default_boxshadow;
    boxshadow.innerHTML = default_boxshadow;
    test.style.background = convex_background;
    background.innerHTML = convex_background;
  }else{
    test.style.boxShadow = default_boxshadow;
    boxshadow.innerHTML = default_boxshadow;
  }
}

function shapeBackgroundBoxshadow(topleft_background, topleft_boxshadow, topright_background, topright_boxshadow, bottomleft_background, bottomleft_boxshadow, bottomright_background, bottomright_boxshadow){
  if(topleft.className === 'active-position'){
    test.style.background = topleft_background;
    background.innerHTML = topleft_background;
    test.style.boxShadow = topleft_boxshadow;
    boxshadow.innerHTML = topleft_boxshadow;
  }else if(topright.className === 'active-position'){
    test.style.background = topright_background;
    background.innerHTML = topright_background;
    test.style.boxShadow = topright_boxshadow;
    boxshadow.innerHTML = topright_boxshadow;
  }else if(bottomleft.className === 'active-position'){
    test.style.background = bottomleft_background;
    background.innerHTML = bottomleft_background;
    test.style.boxShadow = bottomleft_boxshadow;
    boxshadow.innerHTML = bottomleft_boxshadow;
  }else if(bottomright.className === 'active-position'){
    test.style.background = bottomright_background;
    background.innerHTML = bottomright_background;
    test.style.boxShadow = bottomright_boxshadow;
    boxshadow.innerHTML = bottomright_boxshadow;
  }
}

var sizeRangeValue = function(){
  var newValue = size.value;
  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var pressed_topleft = `inset ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor},inset -${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  var pressed_topright = `inset -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor},inset  ${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  var pressed_bottomleft = `inset ${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor},inset  -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  var pressed_bottomright = `inset -${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor},inset  ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  var default_topleft = `${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor}, -${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  var default_topright = `-${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor}, ${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  var default_bottomleft = `${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor}, -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  var default_bottomright = `-${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor}, ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  sizevalue.innerHTML = newValue;
  test.style.width = `${newValue}px`;
  test.style.height = `${newValue}px`;
  radius.setAttribute('max', Math.round(newValue / 2));
  radiusvalue.innerHTML = radius.value;
  borderradius.innerHTML = `${radius.value}px`;
  test.style.borderRadius = `${radius.value}px`
  distancevalue.innerHTML = Math.round(newValue * 0.1);
  blurvalue.innerHTML = Math.round(newValue * 0.2);
  distance.value = Math.round(newValue * 0.1);
  blur0.value = Math.round(newValue * 0.2);
  inputRangeBackgroundBoxshadow(pressed_topleft, pressed_topright, pressed_bottomleft, pressed_bottomright, default_topleft, default_topright, default_bottomleft, default_bottomright);
}

var radiusRangeValue = function(){
  var newValue = radius.value;
  radiusvalue.innerHTML = newValue;
  borderradius.innerHTML = `${newValue}px`;
  test.style.borderRadius = `${newValue}px`;
}

var distanceRangeValue = function(){
  var newValue = distance.value;
  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var pressed_topleft = `inset ${newValue}px ${newValue}px ${newValue * 2}px ${darkColor},inset -${newValue}px -${newValue}px ${newValue * 2}px ${lightColor}`;
  var pressed_topright = `inset -${newValue}px ${newValue}px ${newValue * 2}px ${darkColor},inset ${newValue}px -${newValue}px ${newValue * 2}px ${lightColor}`;
  var pressed_bottomleft = `inset ${newValue}px -${newValue}px ${newValue * 2}px ${darkColor},inset -${newValue}px ${newValue}px ${newValue * 2}px ${lightColor}`;
  var pressed_bottomright = `inset -${newValue}px -${newValue}px ${newValue * 2}px ${darkColor},inset ${newValue}px ${newValue}px ${newValue * 2}px ${lightColor}`;
  var default_topleft = `${newValue}px ${newValue}px ${newValue * 2}px ${darkColor}, -${newValue}px -${newValue}px ${newValue * 2}px ${lightColor}`;
  var default_topright = `-${newValue}px ${newValue}px ${newValue * 2}px ${darkColor}, ${newValue}px -${newValue}px ${newValue * 2}px ${lightColor}`;
  var default_bottomleft = `${newValue}px -${newValue}px ${newValue * 2}px ${darkColor}, -${newValue}px ${newValue}px ${newValue * 2}px ${lightColor}`;
  var default_bottomright = `-${newValue}px -${newValue}px ${newValue * 2}px ${darkColor}, ${newValue}px ${newValue}px ${newValue * 2}px ${lightColor}`;
  distancevalue.innerHTML = newValue;
  blur0.value = Math.round(newValue * 2);
  blurvalue.innerHTML = Math.round(newValue * 2);
  inputRangeBackgroundBoxshadow(pressed_topleft, pressed_topright, pressed_bottomleft, pressed_bottomright, default_topleft, default_topright, default_bottomleft, default_bottomright);
}

var intensityRangeValue = function(){
  var newValue = intensity.value;
  var darkColor = colorLuminance(color.value , newValue * -1);
  var lightColor = colorLuminance(color.value , newValue);
  var pressed_topleft = `inset ${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var pressed_topright = `inset -${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var pressed_bottomleft = `inset ${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var pressed_bottomright = `inset -${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_topleft = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_topright = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_bottomleft = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_bottomright = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  intensityvalue.innerHTML = newValue;
  inputRangeBackgroundBoxshadow(pressed_topleft, pressed_topright, pressed_bottomleft, pressed_bottomright, default_topleft, default_topright, default_bottomleft, default_bottomright);
}

var blurRangeValue = function(){
  var newValue = blur0.value;
  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var pressed_topleft = `inset ${distance.value}px ${distance.value}px ${newValue}px ${darkColor},inset -${distance.value}px -${distance.value}px ${newValue}px ${lightColor}`;
  var pressed_topright = `inset -${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var pressed_bottomleft = `inset ${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var pressed_bottomright = `inset -${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_topleft =  `${distance.value}px ${distance.value}px ${newValue}px ${darkColor}, -${distance.value}px -${distance.value}px ${newValue}px ${lightColor}`;
  var default_topright = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_bottomleft = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_bottomright = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  blurvalue.innerHTML = newValue;
  inputRangeBackgroundBoxshadow(pressed_topleft, pressed_topright, pressed_bottomleft, pressed_bottomright, default_topleft, default_topright, default_bottomleft, default_bottomright);
}

var colorRangeValue = function(){
  var newValue = color.value;
  var darkColor = colorLuminance(newValue , intensity.value * -1);
  var lightColor = colorLuminance(newValue , intensity.value);
  var firstGradientColor = colorLuminance(color.value, -0.1);
  var secondGradientColor = colorLuminance(color.value, 0.07);
  colorvalue.innerHTML = newValue;
  background.innerHTML = newValue;
  test.style.background = newValue;
  container.style.background = newValue;

  if(pressed.className === 'active-shape'){
    if(topleft.className === 'active-position'){
      test.style.boxShadow = `inset ${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `inset ${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(topright.className === 'active-position'){
      test.style.boxShadow = `inset -${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset  ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `inset -${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(bottomleft.className === 'active-position'){
      test.style.boxShadow = `inset ${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset  -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `inset ${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(bottomright.className === 'active-position'){
      test.style.boxShadow = `inset -${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset  ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `inset -${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
    }
  }else if(concave.className === 'active-shape'){
    if(topleft.className === 'active-position'){
      test.style.background = `linear-gradient(145deg, ${firstGradientColor}, ${secondGradientColor})`;
      background.innerHTML = `linear-gradient(145deg, ${firstGradientColor}, ${secondGradientColor})`;
      test.style.boxShadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(topright.className === 'active-position'){
      test.style.background = `linear-gradient(225deg, ${firstGradientColor}, ${secondGradientColor})`;
      background.innerHTML = `linear-gradient(225deg, ${firstGradientColor}, ${secondGradientColor})`;
      test.style.boxShadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},  ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(bottomleft.className === 'active-position'){
      test.style.background = `linear-gradient(45deg, ${firstGradientColor}, ${secondGradientColor})`;
      background.innerHTML = `linear-gradient(45deg, ${firstGradientColor}, ${secondGradientColor})`;
      test.style.boxShadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},  -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(bottomright.className === 'active-position'){
      test.style.background = `linear-gradient(315deg, ${firstGradientColor}, ${secondGradientColor})`;
      background.innerHTML = `linear-gradient(315deg, ${firstGradientColor}, ${secondGradientColor})`;
      test.style.boxShadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},  ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
    }
  }else if(convex.className === 'active-shape'){
    if(topleft.className === 'active-position'){
      test.style.background = `linear-gradient(145deg, ${secondGradientColor}, ${firstGradientColor})`;
      background.innerHTML = `linear-gradient(145deg, ${secondGradientColor}, ${firstGradientColor})`;
      test.style.boxShadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(topright.className === 'active-position'){
      test.style.background = `linear-gradient(225deg, ${secondGradientColor}, ${firstGradientColor})`;
      background.innerHTML = `linear-gradient(225deg, ${secondGradientColor}, ${firstGradientColor})`;
      test.style.boxShadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},  ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(bottomleft.className === 'active-position'){
      test.style.background = `linear-gradient(45deg, ${secondGradientColor}, ${firstGradientColor})`;
      background.innerHTML = `linear-gradient(45deg, ${secondGradientColor}, ${firstGradientColor})`;
      test.style.boxShadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},  -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(bottomright.className === 'active-position'){
      test.style.background = `linear-gradient(315deg, ${secondGradientColor}, ${firstGradientColor})`;
      background.innerHTML = `linear-gradient(315deg, ${secondGradientColor}, ${firstGradientColor})`;
      test.style.boxShadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},  ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
    }
  }else{
    if(topleft.className === 'active-position'){
      test.style.boxShadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(topright.className === 'active-position'){
      test.style.boxShadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},  ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(bottomleft.className === 'active-position'){
      test.style.boxShadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},  -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
    }else if(bottomright.className === 'active-position'){
      test.style.boxShadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},  ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
      boxshadow.innerHTML = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
    }
  }
}

var topLeftClickValue = function(){
  if(document.querySelector('.active-position') !== document.querySelector('#top-left')){
    document.querySelector('.active-position').classList.remove('active-position');
    document.querySelector('#top-left').classList.add('active-position');
  }

  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var firstGradientColor = colorLuminance(color.value, -0.1);
  var secondGradientColor = colorLuminance(color.value, 0.07);
  var pressed_boxshadow = `inset ${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_boxshadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var concave_background = `linear-gradient(145deg, ${firstGradientColor}, ${secondGradientColor})`;
  var convex_background = `linear-gradient(145deg, ${secondGradientColor}, ${firstGradientColor})`;
  positionBackgroundBoxshadow(pressed_boxshadow, default_boxshadow, concave_background, convex_background);
}

var topRightClickValue = function(){
  if(document.querySelector('.active-position') !== topright){
    document.querySelector('.active-position').classList.remove('active-position');
    topright.classList.add('active-position');
  }
  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var firstGradientColor = colorLuminance(color.value, -0.1);
  var secondGradientColor = colorLuminance(color.value, 0.07);
  var pressed_boxshadow = `inset -${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_boxshadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var concave_background = `linear-gradient(225deg, ${firstGradientColor}, ${secondGradientColor})`;
  var convex_background = `linear-gradient(225deg, ${secondGradientColor}, ${firstGradientColor})`;
  positionBackgroundBoxshadow(pressed_boxshadow, default_boxshadow, concave_background, convex_background);
}

var bottomLeftClickValue = function(){
  if(document.querySelector('.active-position') !== bottomleft){
    document.querySelector('.active-position').classList.remove('active-position');
    bottomleft.classList.add('active-position');
  }
  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var firstGradientColor = colorLuminance(color.value, -0.1);
  var secondGradientColor = colorLuminance(color.value, 0.07);
  var pressed_boxshadow = `inset ${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_boxshadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var concave_background = `linear-gradient(45deg, ${firstGradientColor}, ${secondGradientColor})`;
  var convex_background = `linear-gradient(45deg, ${secondGradientColor}, ${firstGradientColor})`;
  positionBackgroundBoxshadow(pressed_boxshadow, default_boxshadow, concave_background, convex_background);
}

var bottomRightClickValue = function(){
  if(document.querySelector('.active-position') !== bottomright){
    document.querySelector('.active-position').classList.remove('active-position');
    bottomright.classList.add('active-position');
  }
  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var firstGradientColor = colorLuminance(color.value, -0.1);
  var secondGradientColor = colorLuminance(color.value, 0.07);
  var pressed_boxshadow = `inset -${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var default_boxshadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var concave_background = `linear-gradient(315deg, ${firstGradientColor}, ${secondGradientColor})`;
  var convex_background = `linear-gradient(315deg, ${secondGradientColor}, ${firstGradientColor})`;
  positionBackgroundBoxshadow(pressed_boxshadow, default_boxshadow, concave_background, convex_background);
}

var flatClick = function(){
  if(document.querySelector('.active-shape') !== document.querySelector('#flat')){
    document.querySelector('.active-shape').classList.remove('active-shape');
    document.querySelector('#flat').classList.add('active-shape');
  }
  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var topleft_background = color.value;
  var topleft_boxshadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var topright_background = color.value;
  var topright_boxshadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var bottomleft_background = color.value;
  var bottomleft_boxshadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var bottomright_background = color.value;
  var bottomright_boxshadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  shapeBackgroundBoxshadow(topleft_background, topleft_boxshadow, topright_background, topright_boxshadow, bottomleft_background, bottomleft_boxshadow, bottomright_background, bottomright_boxshadow);
}

var concaveClick = function(){
  if(document.querySelector('.active-shape') !== concave){
    document.querySelector('.active-shape').classList.remove('active-shape');
    concave.classList.add('active-shape');
  }
  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var firstGradientColor = colorLuminance(color.value, -0.1);
  var secondGradientColor = colorLuminance(color.value, 0.07); 
  var topleft_background = `linear-gradient(145deg, ${firstGradientColor}, ${secondGradientColor})`;
  var topleft_boxshadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var topright_background = `linear-gradient(225deg, ${firstGradientColor}, ${secondGradientColor})`;
  var topright_boxshadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var bottomleft_background = `linear-gradient(45deg, ${firstGradientColor}, ${secondGradientColor})`;
  var bottomleft_boxshadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var bottomright_background = `linear-gradient(315deg, ${firstGradientColor}, ${secondGradientColor})`;
  var bottomright_boxshadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  shapeBackgroundBoxshadow(topleft_background, topleft_boxshadow, topright_background, topright_boxshadow, bottomleft_background, bottomleft_boxshadow, bottomright_background, bottomright_boxshadow);
}

var convexClick = function(){
  if(document.querySelector('.active-shape') !== convex){
    document.querySelector('.active-shape').classList.remove('active-shape');
    convex.classList.add('active-shape');
  }
  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var firstGradientColor = colorLuminance(color.value, 0.07);
  var secondGradientColor = colorLuminance(color.value, - 0.1);
  var topleft_background = `linear-gradient(145deg, ${firstGradientColor}, ${secondGradientColor})`;
  var topleft_boxshadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var topright_background = `linear-gradient(225deg, ${firstGradientColor}, ${secondGradientColor})`;
  var topright_boxshadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var bottomleft_background = `linear-gradient(45deg, ${firstGradientColor}, ${secondGradientColor})`;
  var bottomleft_boxshadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var bottomright_background = `linear-gradient(315deg, ${firstGradientColor}, ${secondGradientColor})`;
  var bottomright_boxshadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  shapeBackgroundBoxshadow(topleft_background, topleft_boxshadow, topright_background, topright_boxshadow, bottomleft_background, bottomleft_boxshadow, bottomright_background, bottomright_boxshadow);
}

var pressedClick = function(){
  if(document.querySelector('.active-shape') !== pressed){
    document.querySelector('.active-shape').classList.remove('active-shape');
    pressed.classList.add('active-shape');
  }
  var darkColor = colorLuminance(color.value , intensity.value * -1);
  var lightColor = colorLuminance(color.value , intensity.value);
  var topleft_background = color.value;
  var topleft_boxshadow = `inset ${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var topright_background = color.value;
  var topright_boxshadow = `inset -${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  var bottomleft_background = color.value;
  var bottomleft_boxshadow = `inset ${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  var bottomright_background = color.value;
  var bottomright_boxshadow = `inset -${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  shapeBackgroundBoxshadow(topleft_background, topleft_boxshadow, topright_background, topright_boxshadow, bottomleft_background, bottomleft_boxshadow, bottomright_background, bottomright_boxshadow);
}

size.addEventListener("input", sizeRangeValue);
radius.addEventListener("input", radiusRangeValue);
distance.addEventListener("input", distanceRangeValue);
intensity.addEventListener("input", intensityRangeValue);
blur0.addEventListener("input", blurRangeValue);
color.addEventListener("input", colorRangeValue);
topleft.addEventListener("click", topLeftClickValue);
topright.addEventListener("click", topRightClickValue);
bottomleft.addEventListener("click", bottomLeftClickValue);
bottomright.addEventListener("click", bottomRightClickValue);
flat.addEventListener('click', flatClick);
concave.addEventListener('click', concaveClick);
convex.addEventListener('click', convexClick);
pressed.addEventListener('click', pressedClick);