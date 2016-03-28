
// 增加
document.write("<button> json </button>");
document.write("<input type='date'>");

var div = document.createElement('div');
div.style.width = '250px';
div.style.height = '200px';
div.style.backgroundColor = 'red';

var img = document.createElement('img');
img.src = 'images/icon_01.png';
div.appendChild(img);
document.body.appendChild(div);





//删

var input = document.getElementsByTagName('input')[0];
input.remove();

//改
var btn = document.getElementsByTagName('button')[0];
btn.style.width = '300px';
btn.style.height = '64px';


//查

console.log(div.childNodes);