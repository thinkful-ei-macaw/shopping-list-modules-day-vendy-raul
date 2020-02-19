import item from './item.js';


const store = {
  items: [],
  hideCheckedItems: false
};

// Given an id, return the matching item
function findByID(id){
  return this.items.find(item => item.id === id);
}



function addItem(name){

  try{
    item.validateName(name);
    item.create(name);
    this.items.push(name);
  } catch(e){
    console.log(e.message);
  }
}

function findAndToggleChecked(id){
  let foundItem = this.findByID(id);
  foundItem.checked = !foundItem.checked;
}

function findAndUpdateName(id, newName){
  try{
    newName.validateName;
    let findItem = this.findByID(id);
    findItem.name = newName;
  } catch(e){
    console.log(`Cannot update name: ${e.message}`);
  }
}

function findAndDelete(id){
  //let foundItem = findByID(id);
  //filter the item that is the id
  console.log(id);
  this.items = this.items.filter(item => id !== item.id);
  console.log(this.items);
}

export default {
  items:store.items,
  hideCheckedItems: store.hideCheckedItems,
  findByID,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};

