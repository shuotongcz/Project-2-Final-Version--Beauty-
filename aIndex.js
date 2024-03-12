var pList = document.getElementById("pList");
let  html = '';
for(let i=0;i<8;i++){
    html  +=` <img  src="./img/a${i}.png" class="a a1"/>` 
}
pList.innerHTML = html;