const size = document.querySelector('#size');
const radius = document.querySelector('#radius');
const distance = document.querySelector('#distance');
const intensity = document.querySelector('#intensity');
const blur0 = document.querySelector('#blur');
const color = document.querySelector('#color');
const topleft = document.querySelector('#top-left');
const topright = document.querySelector('#top-right');
const bottomleft = document.querySelector('#bottom-left');
const bottomright = document.querySelector('#bottom-right');
const flat = document.querySelector('#flat');
const concave = document.querySelector('#concave');
const convex = document.querySelector('#convex');
const pressed = document.querySelector('#pressed');
const sizevalue = document.querySelector('#sizevalue');
const test = document.querySelector('#test');
const radiusvalue = document.querySelector('#radiusvalue');
const borderradius = document.querySelector('#borderradius');
const distancevalue = document.querySelector('#distancevalue');
const blurvalue = document.querySelector('#blurvalue');
const boxshadow = document.querySelector('#boxshadow');
const intensityvalue = document.querySelector('#intensityvalue');
const colorvalue = document.querySelector('#colorvalue');
const background = document.querySelector('#background');
const container = document.querySelector('#container');

console.log(pressed.className);

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

const sizeRangeValue = function(){
  const newValue = size.value;
  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const pressed_topleft = `inset ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor},inset -${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  const pressed_topright = `inset -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor},inset  ${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  const pressed_bottomleft = `inset ${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor},inset  -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  const pressed_bottomright = `inset -${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor},inset  ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  const default_topleft = `${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor}, -${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  const default_topright = `-${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor}, ${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  const default_bottomleft = `${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor}, -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  const default_bottomright = `-${Math.round(newValue * 0.1)}px -${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${darkColor}, ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1)}px ${Math.round(newValue * 0.1) * 2}px ${lightColor}`;
  // sizevalue.innerHTML = newValue;
  test.style.width = `${newValue}px`;
  test.style.height = `${newValue}px`;
  radius.setAttribute('max', Math.round(newValue / 2));
  // radiusvalue.innerHTML = radius.value;
  borderradius.innerHTML = `${radius.value}px`;
  test.style.borderRadius = `${radius.value}px`
  // distancevalue.innerHTML = Math.round(newValue * 0.1);
  // blurvalue.innerHTML = Math.round(newValue * 0.2);
  distance.value = Math.round(newValue * 0.1);
  blur0.value = Math.round(newValue * 0.2);
  inputRangeBackgroundBoxshadow(pressed_topleft, pressed_topright, pressed_bottomleft, pressed_bottomright, default_topleft, default_topright, default_bottomleft, default_bottomright);
}

const radiusRangeValue = function(){
  const newValue = radius.value;
  // radiusvalue.innerHTML = newValue;
  // borderradius.innerHTML = `${newValue}px`;
  test.style.borderRadius = `${newValue}px`;
}

const distanceRangeValue = function(){
  const newValue = distance.value;
  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const pressed_topleft = `inset ${newValue}px ${newValue}px ${newValue * 2}px ${darkColor},inset -${newValue}px -${newValue}px ${newValue * 2}px ${lightColor}`;
  const pressed_topright = `inset -${newValue}px ${newValue}px ${newValue * 2}px ${darkColor},inset ${newValue}px -${newValue}px ${newValue * 2}px ${lightColor}`;
  const pressed_bottomleft = `inset ${newValue}px -${newValue}px ${newValue * 2}px ${darkColor},inset -${newValue}px ${newValue}px ${newValue * 2}px ${lightColor}`;
  const pressed_bottomright = `inset -${newValue}px -${newValue}px ${newValue * 2}px ${darkColor},inset ${newValue}px ${newValue}px ${newValue * 2}px ${lightColor}`;
  const default_topleft = `${newValue}px ${newValue}px ${newValue * 2}px ${darkColor}, -${newValue}px -${newValue}px ${newValue * 2}px ${lightColor}`;
  const default_topright = `-${newValue}px ${newValue}px ${newValue * 2}px ${darkColor}, ${newValue}px -${newValue}px ${newValue * 2}px ${lightColor}`;
  const default_bottomleft = `${newValue}px -${newValue}px ${newValue * 2}px ${darkColor}, -${newValue}px ${newValue}px ${newValue * 2}px ${lightColor}`;
  const default_bottomright = `-${newValue}px -${newValue}px ${newValue * 2}px ${darkColor}, ${newValue}px ${newValue}px ${newValue * 2}px ${lightColor}`;
  // distancevalue.innerHTML = newValue;
  blur0.value = Math.round(newValue * 2);
  // blurvalue.innerHTML = Math.round(newValue * 2);
  inputRangeBackgroundBoxshadow(pressed_topleft, pressed_topright, pressed_bottomleft, pressed_bottomright, default_topleft, default_topright, default_bottomleft, default_bottomright);
}

const intensityRangeValue = function(){
  const newValue = intensity.value;
  const darkColor = colorLuminance(color.value , newValue * -1);
  const lightColor = colorLuminance(color.value , newValue);
  const pressed_topleft = `inset ${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const pressed_topright = `inset -${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const pressed_bottomleft = `inset ${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const pressed_bottomright = `inset -${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_topleft = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_topright = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_bottomleft = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_bottomright = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  // intensityvalue.innerHTML = newValue;
  inputRangeBackgroundBoxshadow(pressed_topleft, pressed_topright, pressed_bottomleft, pressed_bottomright, default_topleft, default_topright, default_bottomleft, default_bottomright);
}

const blurRangeValue = function(){
  const newValue = blur0.value;
  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const pressed_topleft = `inset ${distance.value}px ${distance.value}px ${newValue}px ${darkColor},inset -${distance.value}px -${distance.value}px ${newValue}px ${lightColor}`;
  const pressed_topright = `inset -${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const pressed_bottomleft = `inset ${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const pressed_bottomright = `inset -${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_topleft =  `${distance.value}px ${distance.value}px ${newValue}px ${darkColor}, -${distance.value}px -${distance.value}px ${newValue}px ${lightColor}`;
  const default_topright = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_bottomleft = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_bottomright = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  // blurvalue.innerHTML = newValue;
  inputRangeBackgroundBoxshadow(pressed_topleft, pressed_topright, pressed_bottomleft, pressed_bottomright, default_topleft, default_topright, default_bottomleft, default_bottomright);
}

const colorRangeValue = function(){
  const newValue = color.value;
  const darkColor = colorLuminance(newValue , intensity.value * -1);
  const lightColor = colorLuminance(newValue , intensity.value);
  const firstGradientColor = colorLuminance(color.value, -0.1);
  const secondGradientColor = colorLuminance(color.value, 0.07);
  // colorvalue.innerHTML = newValue;
  // background.innerHTML = newValue;
  test.style.background = newValue;
  container.style.background = newValue;

  function getContrast(hex) {
    const r = parseInt(hex.substr(1, 2), 16),
    g = parseInt(hex.substr(3, 2), 16),
    b = parseInt(hex.substr(5, 2), 16),
    yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? '#001f3f' : '#F6F5F7'
  }

  if(getContrast(newValue) === '#001f3f'){
    document.querySelector('#code').style.background = '#1d1f21';
    for (var i = 0; i < document.getElementsByClassName('code_color').length; i++) {
      document.getElementsByClassName('code_color')[i].style.color = '#96CBFE';
    }
    for (var i = 0; i < document.getElementsByClassName('code_color2').length; i++) {
      document.getElementsByClassName('code_color2')[i].style.color = '#C5C8C6';
    }
    for (var i = 0; i < document.getElementsByClassName('text_color').length; i++) {
      document.getElementsByClassName('text_color')[i].style.color = '#000000';
    }
  }else{
    document.querySelector('#code').style.background = '#ffffff';
    for (var i = 0; i < document.getElementsByClassName('code_color').length; i++) {
      document.getElementsByClassName('code_color')[i].style.color = '#990055';
    }
    for (var i = 0; i < document.getElementsByClassName('code_color2').length; i++) {
      document.getElementsByClassName('code_color2')[i].style.color = '#000000';
    }
    for (var i = 0; i < document.getElementsByClassName('text_color').length; i++) {
      document.getElementsByClassName('text_color')[i].style.color = '#ffffff';
    }
  }

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

const topLeftClickValue = function(){
  if(document.querySelector('.active-position') !== document.querySelector('#top-left')){
    document.querySelector('.active-position').classList.remove('active-position');
    document.querySelector('#top-left').classList.add('active-position');
  }

  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const firstGradientColor = colorLuminance(color.value, -0.1);
  const secondGradientColor = colorLuminance(color.value, 0.07);
  const pressed_boxshadow = `inset ${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_boxshadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const concave_background = `linear-gradient(145deg, ${firstGradientColor}, ${secondGradientColor})`;
  const convex_background = `linear-gradient(145deg, ${secondGradientColor}, ${firstGradientColor})`;
  positionBackgroundBoxshadow(pressed_boxshadow, default_boxshadow, concave_background, convex_background);
}

const topRightClickValue = function(){
  if(document.querySelector('.active-position') !== topright){
    document.querySelector('.active-position').classList.remove('active-position');
    topright.classList.add('active-position');
  }
  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const firstGradientColor = colorLuminance(color.value, -0.1);
  const secondGradientColor = colorLuminance(color.value, 0.07);
  const pressed_boxshadow = `inset -${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_boxshadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const concave_background = `linear-gradient(225deg, ${firstGradientColor}, ${secondGradientColor})`;
  const convex_background = `linear-gradient(225deg, ${secondGradientColor}, ${firstGradientColor})`;
  positionBackgroundBoxshadow(pressed_boxshadow, default_boxshadow, concave_background, convex_background);
}

const bottomLeftClickValue = function(){
  if(document.querySelector('.active-position') !== bottomleft){
    document.querySelector('.active-position').classList.remove('active-position');
    bottomleft.classList.add('active-position');
  }
  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const firstGradientColor = colorLuminance(color.value, -0.1);
  const secondGradientColor = colorLuminance(color.value, 0.07);
  const pressed_boxshadow = `inset ${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_boxshadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const concave_background = `linear-gradient(45deg, ${firstGradientColor}, ${secondGradientColor})`;
  const convex_background = `linear-gradient(45deg, ${secondGradientColor}, ${firstGradientColor})`;
  positionBackgroundBoxshadow(pressed_boxshadow, default_boxshadow, concave_background, convex_background);
}

const bottomRightClickValue = function(){
  if(document.querySelector('.active-position') !== bottomright){
    document.querySelector('.active-position').classList.remove('active-position');
    bottomright.classList.add('active-position');
  }
  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const firstGradientColor = colorLuminance(color.value, -0.1);
  const secondGradientColor = colorLuminance(color.value, 0.07);
  const pressed_boxshadow = `inset -${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const default_boxshadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor}, ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const concave_background = `linear-gradient(315deg, ${firstGradientColor}, ${secondGradientColor})`;
  const convex_background = `linear-gradient(315deg, ${secondGradientColor}, ${firstGradientColor})`;
  positionBackgroundBoxshadow(pressed_boxshadow, default_boxshadow, concave_background, convex_background);
}

const flatClick = function(){
  if(document.querySelector('.active-shape') !== document.querySelector('#flat')){
    document.querySelector('.active-shape').classList.remove('active-shape');
    document.querySelector('#flat').classList.add('active-shape');
  }
  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const topleft_background = color.value;
  const topleft_boxshadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const topright_background = color.value;
  const topright_boxshadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const bottomleft_background = color.value;
  const bottomleft_boxshadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const bottomright_background = color.value;
  const bottomright_boxshadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  shapeBackgroundBoxshadow(topleft_background, topleft_boxshadow, topright_background, topright_boxshadow, bottomleft_background, bottomleft_boxshadow, bottomright_background, bottomright_boxshadow);
}

const concaveClick = function(){
  if(document.querySelector('.active-shape') !== concave){
    document.querySelector('.active-shape').classList.remove('active-shape');
    concave.classList.add('active-shape');
  }
  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const firstGradientColor = colorLuminance(color.value, -0.1);
  const secondGradientColor = colorLuminance(color.value, 0.07); 
  const topleft_background = `linear-gradient(145deg, ${firstGradientColor}, ${secondGradientColor})`;
  const topleft_boxshadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const topright_background = `linear-gradient(225deg, ${firstGradientColor}, ${secondGradientColor})`;
  const topright_boxshadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const bottomleft_background = `linear-gradient(45deg, ${firstGradientColor}, ${secondGradientColor})`;
  const bottomleft_boxshadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const bottomright_background = `linear-gradient(315deg, ${firstGradientColor}, ${secondGradientColor})`;
  const bottomright_boxshadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  shapeBackgroundBoxshadow(topleft_background, topleft_boxshadow, topright_background, topright_boxshadow, bottomleft_background, bottomleft_boxshadow, bottomright_background, bottomright_boxshadow);
}

const convexClick = function(){
  if(document.querySelector('.active-shape') !== convex){
    document.querySelector('.active-shape').classList.remove('active-shape');
    convex.classList.add('active-shape');
  }
  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const firstGradientColor = colorLuminance(color.value, 0.07);
  const secondGradientColor = colorLuminance(color.value, - 0.1);
  const topleft_background = `linear-gradient(145deg, ${firstGradientColor}, ${secondGradientColor})`;
  const topleft_boxshadow = `${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const topright_background = `linear-gradient(225deg, ${firstGradientColor}, ${secondGradientColor})`;
  const topright_boxshadow = `-${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const bottomleft_background = `linear-gradient(45deg, ${firstGradientColor}, ${secondGradientColor})`;
  const bottomleft_boxshadow = `${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},-${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const bottomright_background = `linear-gradient(315deg, ${firstGradientColor}, ${secondGradientColor})`;
  const bottomright_boxshadow = `-${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  shapeBackgroundBoxshadow(topleft_background, topleft_boxshadow, topright_background, topright_boxshadow, bottomleft_background, bottomleft_boxshadow, bottomright_background, bottomright_boxshadow);
}

const pressedClick = function(){
  if(document.querySelector('.active-shape') !== pressed){
    document.querySelector('.active-shape').classList.remove('active-shape');
    pressed.classList.add('active-shape');
  }
  const darkColor = colorLuminance(color.value , intensity.value * -1);
  const lightColor = colorLuminance(color.value , intensity.value);
  const topleft_background = color.value;
  const topleft_boxshadow = `inset ${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const topright_background = color.value;
  const topright_boxshadow = `inset -${distance.value}px ${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px -${distance.value}px ${blur0.value}px ${lightColor}`;
  const bottomleft_background = color.value;
  const bottomleft_boxshadow = `inset ${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset -${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
  const bottomright_background = color.value;
  const bottomright_boxshadow = `inset -${distance.value}px -${distance.value}px ${blur0.value}px ${darkColor},inset ${distance.value}px ${distance.value}px ${blur0.value}px ${lightColor}`;
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