var red;
var green;
var blue;
var rgbColor;
const randomColor = ()=> {
  for (var i = 0; i <=10; i += 1) {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  // html += '<div style="background-color:' + rgbColor + '"></div>';
  return rgbColor;
  }
}
//---
const tarot = [
    'The Fool 愚人',
    'The Magician 魔術師',
    'The High Priestess女教皇',
    'The Empress 女皇',
    'The Emperor 皇帝',
    'The Hierophant教皇',
    'The Lovers 戀人',
    'The Chariot 戰車',
    'Strength 力量',
    'The Hermit 隱士',
    'Wheel of Fortune 命運之輪',
    'Justice 正義',
    'The Hanged Man 懸吊者',
    'Death 死亡',
    'Temperance 節制',
    'The Devil 魔鬼',
    'The Tower 高塔',
    'The Star 星星',
    'The Moon 月亮',
    'The Sun 太陽',
    'Judgement 審判',
    'The World 世界'    
]
// A每次瀏覽器一刷新就叫出程式訊息
function randomTarot(){
    var i = Math.floor(Math.random()*22);
    return tarot[i];  
}
//B印出程式訊息
function print(message){
    // const message = randomTarot(output);
    output.innerHTML = message;
}
const btn = document.getElementsByTagName('button')[0];
btn.addEventListener ('click', () => {
  var message = randomTarot(output);
  btn.style.color = randomColor();
  print(message)
});

// const btn = document.getElementsByTagName('button')[0];
// btn.addEventListener ('click', () => {
//   let p = document.createElement('p');
//   p.textContent = randomTarot().value;
//   btn.appendChild(p);
//   p.value ='';
// })
const icons = [
    'youtube',
    'twitter',      
    'instagram',
    'facebook',
    'github',
    'google',
    'share'   
]
//drop redundant
// const icon = document.getElementById('icons[i]');
// // let icon = document.getElementById('icons')[i];
// for (let i = 0; i < icons.length; i++ ){
//     icon.addEventListener ('mouseover', () => {
//     icon.style.fill = randomColor();
//     });
// });
  
//think about function, loop
  const codepen = document.getElementById('codepen'); //icons[0]
    codepen.addEventListener ('mouseover', () => {
    codepen.style.fill = randomColor();
  });

  const spotify = document.getElementById('spotify'); //icons[0]
    spotify.addEventListener ('mouseover', () => {
    spotify.style.fill = randomColor();
  });

  const youtube = document.getElementById('youtube'); //icons[0]
  youtube.addEventListener ('mouseover', () => {
  youtube.style.fill = randomColor();
});

  const twitter = document.getElementById('twitter'); //icons[1]
  twitter.addEventListener ('mouseover', () => {
  twitter.style.fill = randomColor();
});

const instagram = document.getElementById('instagram'); //icons[2]
  instagram.addEventListener ('mouseover', () => {
  instagram.style.fill = randomColor();
});

const facebook = document.getElementById('facebook'); //icons[3]
  facebook.addEventListener ('mouseover', () => {
  facebook.style.fill = randomColor();
});
const github = document.getElementById('github'); //icons[4]
  github.addEventListener ('mouseover', () => {
  github.style.fill = randomColor();
});
const linkedin = document.getElementById('linkedin'); //icons[5]
  linkedin.addEventListener ('mouseover', () => {
  linkedin.style.fill = randomColor();
});
const google = document.getElementById('google'); //icons[6]
  google.addEventListener ('mouseover', () => {
  google.style.fill = randomColor();
});
const share = document.getElementById('share'); //icons[7]
  share.addEventListener ('mouseover', () => {
  share.style.fill = randomColor();
});






//not working at the moment
// const choo = document.querySelector('.choo');
// choo.addEventListener = ('mouseover', () => {
//   choo.style.color = randomColor();
// });

