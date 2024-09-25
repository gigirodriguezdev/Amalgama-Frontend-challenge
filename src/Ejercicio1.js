import { useMemo , useEffect } from 'react';
import { ContactCard } from './components/ContactCard';
import { truncate } from './helpers/helpers';
import { fetchContacts, selectContacts } from './store/contactsSlice';
import { fetchCities, selectCities } from './store/citiesSlice';
import { fetchStates, selectStates } from './store/statesSlice';

import { useSelector, useDispatch } from 'react-redux';

const findById = (list, id) => {
    const item = list.find(item => item.id === id);
    return item ? item.name : 'Unknown';
};

const parseContacts = (contacts, cities, states) => {
  return contacts.map(contact => ({
    id: contact.id,
    avatar_url: contact.avatar_url,
    full_name: `${contact.first_name} ${contact.last_name}`,
    company: contact.company,
    details: truncate(contact.details, 100),
    email: contact.email,
    phone_number: `(${contact.phone?.area_code}) ${contact.phone?.number}`,
    addresses: contact.addresses.map(address => ({
      line_1: address.line_1,
      line_2: address.line_2,
      zip_code: address.zip_code,
      city: findById(cities, address.city_id) || 'Unknown City',
      state: findById(states, address.state_id) || 'Unknown State',
    })),
  }));
};

const ContactsScreen = ({ contacts, cities, states }) => {
    const contactsToDisplay = useMemo(() => parseContacts(contacts, cities, states), [contacts, cities, states]);
  
    return (
      <div>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/ejercicio1">My Contacts</a></li>
          </ul>
        </nav>
        <h1>Contacts</h1>
        {contactsToDisplay.map(contact => (
            <>
                <ContactCard key={contact.id} contact={contact} />
            </>
        ))}
      </div>
    );
  };

    export const Ejercicio1 = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());
      dispatch(fetchCities());
      dispatch(fetchStates());
    }, [dispatch]);

    const contacts = useSelector(selectContacts);
    const cities = useSelector(selectCities);
    const states = useSelector(selectStates);

    return (
        <ContactsScreen contacts={contacts} cities={cities} states={states} />
    );

}
    
    