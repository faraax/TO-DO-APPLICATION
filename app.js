function getListItems () {
    var listItems = document.getElementById('addToAdd');
    

    var createElement = document.createElement('li');
    createElement.append(listItems.value);
    var getUl = document.getElementById('list');
    var getEle = getUl.appendChild(createElement);
    

    var delBtn = document.createElement('button');
    var delTxt = document.createTextNode("Delete");
    delBtn.appendChild(delTxt);
    getEle.appendChild(delBtn)
    delBtn.setAttribute('class','btn btn-outline-secondary li-btn-del')
    delBtn.setAttribute('id','element');
    delBtn.setAttribute('onclick','delItem(this)');


    var editBtn = document.createElement('button');
    var editTxt = document.createTextNode("Edit");
    editBtn.appendChild(editTxt);
    getEle.appendChild(editBtn);
    editBtn.setAttribute('class','btn btn-outline-secondary li-btn-edit');
    editBtn.setAttribute('id','element');
    editBtn.setAttribute('onclick','editItem(this)');
    
    
    listItems.value = "";
    
}

function delItem(e) {
    var delEle = e;
    delEle.parentNode.remove()
}

function editItem(e) {
    var editVal = prompt("Enter the new value to the list ?")
    var editEle = e;
    editEle.parentNode.firstChild.remove()
    var txt = document.createTextNode(editVal);
    var editEle = editEle.parentNode;
    editEle.appendChild(txt);
}

function delListItems() {
    location.reload()
}