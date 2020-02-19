function validateName(name) {
  if (name === '') {
    throw new TypeError('Name must not be blank');
  }
}

function create(name) {
  // eslint-disable-next-line no-undef
  let item = { id: cuid(), name: name, checked: false };
  return item;
}

export default {
  validateName,
  create
};
