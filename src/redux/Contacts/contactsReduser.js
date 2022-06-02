import { ADD_CONTACT, DELETE_CONTACT } from './contactsType';

const contactsReducer = (store = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...store, payload];
    case DELETE_CONTACT:
      return store.filter(item => item.id !== payload);
    default:
      return store;
  }
};

export default contactsReducer;
