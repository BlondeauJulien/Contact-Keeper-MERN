import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	SET_ALERT,
	REMOVE_ALERT
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				type: 'personal',
				id: '1',
				name: 'Micheal Williamsson',
				email: 'mwilliamsson@gmail.com',
				phone: '77777777'
			},
			{
				type: 'professional',
				id: '2',
				name: 'Julien Blondeau',
				email: 'jBlondeau@gmail.com',
				phone: '0685412588'
			},
			{
				type: 'professional',
				id: '3',
				name: 'Joe Robert',
				email: 'jRobert@gmail.com',
				phone: '11111111'
			}
		]
	};

	const [ state, dispatch ] = useReducer(contactReducer, initialState);

	//Add Contact

	//Delete Contact

	//Set Current Contact

	// Clear Current Contact

	// Update Contact

	// Filter Contacts

	// Clear Filter

	return <ContactContext.Provider
    value={{
        contacts: state.contacts
    }}>
        {props.children}
    </ContactContext.Provider>;
};

export default ContactState
