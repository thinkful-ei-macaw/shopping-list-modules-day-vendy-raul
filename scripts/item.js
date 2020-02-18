function validateName(name){
  try {
    throw new TypeError('Name must not be blank');
  } catch (e){
    console.log(e.message);
  }

};

function create(name){
  let item = {id: cuid(),name: name, checked: false };
  return item;
};

export default {
  validateName,
  create
};
