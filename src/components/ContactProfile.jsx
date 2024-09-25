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
  debugger
  const contact = useSelector(state => selectContacts(state).find(contact => contact.id === contactId));
  const cities = useSelector(state => state.cities);
  const states = useSelector(state => state.states);

   const full_name = `${contact.first_name} ${contact.last_name}`;
   const phone_number = `(${contact.phone?.area_code}) ${contact.phone?.number}`;


  
  return (
    <div>
      <div>
        <img src={contact.avatar_url} alt={`${full_name} avatar`} />
        <h2>{full_name}</h2>
        <h3>{contact.company}</h3>
      </div>
      <p>{truncate(contact.details, 100)}</p>
      <ul>
        <li>Email: {contact.email}</li>
        <li>Phone: {phone_number}</li>
        <li>
          {contact.addresses.length > 1 ? <h4>Addresses:</h4> : <h4>Address:</h4>}
          {contact.addresses.map((address, index) => (
            <Address key={index} address={address} cities={cities} states={states} />
          ))}
        </li>
      </ul>
    </div>
  );
};
