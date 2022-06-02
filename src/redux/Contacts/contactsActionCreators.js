import { nanoid } from 'nanoid';
import { ADD_CONTACT, DELETE_CONTACT } from './contactsType';

const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      ...payload,
      id: nanoid(),
    },
  };
};

const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};
//payload.filter(item => item.id !== payload)

const actionCreators = {
  addContact,
  deleteContact,
};

export default actionCreators;
