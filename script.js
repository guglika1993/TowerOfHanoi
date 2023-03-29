const sia = document.querySelector("#sia");
const defaultText = document.querySelector("#defaultText");
const input = document.querySelector("#raodenoba");
const form = document.querySelector("#form");
const reset = document.querySelector("#reset");

let numb = 1;
let n;

form.addEventListener("submit", function(event){
    event.preventDefault();
    const teqsti = parseInt(input.value);
    n = isNaN(parseInt(teqsti));
if(n){
    sia.innerHTML = `<p id="defaultText">Вы не вводили число</p>`;
    }
else{
    sia.innerHTML = `<p id="defaultText"></p>`;
    hanoi(teqsti, "перв", "втор", "трет");
    }
    input.value = "";
    input.focus();
    reset.disabled = false;
});

reset.addEventListener("click", function(){
    sia.innerHTML = `<p id="defaultText">список пустой</p>`;
    input.value = "";
    input.focus();
    reset.disabled = true;
})


function add(){
    let elementi = document.createElement("li");
    elementi.setAttribute("class", `item item${numb}`);
    sia.append(elementi); 
}

function hanoi(n, start, temporal, end ){
    if(n === 0){
        return;
    }
    else{
        hanoi(n-1, start, end, temporal);
        add();
        sia.lastChild.innerText = `переноси диск ${n} с ${start}ой стольбы к ${end}ую`;
        hanoi(n-1, temporal, start, end);
        defaultText.remove();
        numb++;
    }    
}