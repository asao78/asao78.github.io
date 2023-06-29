document.getElementById('torimomoBtn').addEventListener('click', materialClick);
document.getElementById('torimuneBtn').addEventListener('click', materialClick);
document.getElementById('aibikiBtn').addEventListener('click', materialClick);
document.getElementById('butabaraBtn').addEventListener('click', materialClick);
document.getElementById('butahikiBtn').addEventListener('click', materialClick);

document.getElementById('maguroBtn').addEventListener('click', materialClick);
document.getElementById('salmonBtn').addEventListener('click', materialClick);
document.getElementById('iwashiBtn').addEventListener('click', materialClick);
document.getElementById('ajiBtn').addEventListener('click', materialClick);
document.getElementById('taraBtn').addEventListener('click', materialClick);

document.getElementById('hourensouBtn').addEventListener('click', materialClick);
document.getElementById('tamanegiBtn').addEventListener('click', materialClick);
document.getElementById('moyashiBtn').addEventListener('click', materialClick);
document.getElementById('kyabetuBtn').addEventListener('click', materialClick);
document.getElementById('tomatoBtn').addEventListener('click', materialClick);

document.getElementById('pmanBtn').addEventListener('click', materialClick);
document.getElementById('koguchinegiBtn').addEventListener('click', materialClick);
document.getElementById('ninjinBtn').addEventListener('click', materialClick);
document.getElementById('hakusaiBtn').addEventListener('click', materialClick);
document.getElementById('ingenBtn').addEventListener('click', materialClick);

document.getElementById('uzuraBtn').addEventListener('click', materialClick);
document.getElementById('eggBtn').addEventListener('click', materialClick);
document.getElementById('bifunBtn').addEventListener('click', materialClick);
document.getElementById('tofuBtn').addEventListener('click', materialClick);
document.getElementById('kouyadoufuBtn').addEventListener('click', materialClick);
document.getElementById('searchBtn').addEventListener('click', searchClick);

const list = document.getElementById('myList');

function materialClick(event) {
  const button = event.target;
  let listItem = document.createElement('li');
  listItem.innerText = button.textContent;
  list.appendChild(listItem);
}

function searchClick() {
    let li = document.querySelectorAll('li');
    let selectList = [];
    for (let i = 0; i < li.length; i++) {
        selectList.push(li[i].innerText)
    }
    console.log(selectList)
    const newArray = [];
    for (const obj of dishList) {
      let counter = 0;
      for (const key in obj) {
        for (const mate of selectList) {
          if (mate === obj[key]){
            counter += 1;
          }
        }
      }
      if (counter >= 3){
        newArray.push(obj.dish);  
      }
    }
  if (newArray.length === 0) {
    newArray.push("材料が足りないみたいよ。");
    console.log(newArray)
    window.alert(newArray)
    return newArray;
  } else {
    console.log(newArray)
    window.alert(newArray)
    return newArray;
  } 
}
