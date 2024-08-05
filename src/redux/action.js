// import { nanoid } from 'nanoid';

// // javascript naming convention
// // it is recommended to use ALL_CAPS case with undesrcore as the word separator for string constants
// // SCREAMING_SNAKE_CASE

// // Action Types
// export const ADD_CONTACT = 'contacts/addContact';
// export const DELETE_CONTACT = 'contacts/deleteContact';
// export const SET_FILTER = 'filter/setFilter';

import { nanoid } from "nanoid";

export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filter/setFilter';

import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction (contacts/deleteContact);
export const setFilter = createAction('filter/setFilter');