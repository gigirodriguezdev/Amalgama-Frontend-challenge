import { Address } from './Address';
import { truncate } from '../helpers/helpers'; 
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../store/contactsSlice';
import { fetchContacts } from '../store/contactsSlice';
import { fetchCities } from '../store/citiesSlice';
import { fetchStates } from '../store/statesSlice';
import { useEffect } from 'react';

export const ContactProfile = ( ) => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(fetchCities());
    dispatch(fetchStates());
  }, [dispatch]);

  const id = window.location.pathname.split('/').pop(); 
  const contactId = parseInt(id, 10);
  const contact = useSelector(state => selectContacts(state).find(contact => contact.id === contactId));
  const cities = useSelector(state => state.cities);
  const states = useSelector(state => state.states);

  const full_name = `${contact.first_name} ${contact.last_name}`;
  const phone_number = `(${contact.phone?.area_code}) ${contact.phone?.number}`;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full"
          src={contact.avatar_url}
          alt={`${full_name} avatar`}
        />
        <div>
          <h2 className="text-xl font-bold text-gray-900">{full_name}</h2>
          <h3 className="text-md text-gray-500">{contact.company}</h3>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{truncate(contact.details, 100)}</p>
      <ul className="mt-4 space-y-2">
        <li className="text-sm text-gray-800">
          <span className="font-bold">Email:</span> {contact.email}
        </li>
        <li className="text-sm text-gray-800">
          <span className="font-bold">Phone:</span> {phone_number}
        </li>
        <li className="text-sm text-gray-800">
          {contact.addresses.length > 1 ? (
            <h4 className="font-bold">Addresses:</h4>
          ) : (
            <h4 className="font-bold">Address:</h4>
          )}
          {contact.addresses.map((address, index) => (
            <Address key={index} address={address} cities={cities} states={states} />
          ))}
        </li>
      </ul>
    </div>
  );
};
