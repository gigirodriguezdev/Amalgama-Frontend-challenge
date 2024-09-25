import { useMemo } from 'react';

const truncate = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

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

const Address = ({ address }) => (
    <ul>
      <li>{address.line_1}</li>
      {address.line_2 && <li>{address.line_2}</li>}
      <li>{address.zip_code}</li>
      <li>{address.city || 'Unknown City'}</li>
      <li>{address.state || 'Unknown State'}</li>
    </ul>
  );


const ContactCard = ({ contact }) => (
  <div>
    <div>
      <img src={contact.avatar_url} alt={`${contact.full_name} avatar`} />
      <h3>{contact.full_name}</h3>
      <h4>{contact.company}</h4>
    </div>
    <p>{contact.details}</p>
    <ul>
      <li>Email: {contact.email}</li>
      <li>Phone: {contact.phone_number}</li>
      <li>
        {contact.addresses.length > 1 ? <h4>Addresses:</h4> : <h4>Address:</h4>}
        {contact.addresses.map((address, index) => (
          <Address key={index} address={address} />
        ))}
      </li> 
    </ul>
  </div>
);


const ContactProfile = ({ contact, cities, states }) => {
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
                <ContactProfile key={contact.id} contact={contact} cities={cities} states={states} />
            </>
        ))}
      </div>
    );
  };

    export const Ejercicio1 = () => {
    // Mock data for cities
    const mockCities = [
      { id: 1, name: 'New York' },
      { id: 2, name: 'Los Angeles' },
      { id: 3, name: 'Chicago' },
    ];
    
    // Mock data for states
    const mockStates = [
      { id: 1, name: 'New York' },
      { id: 2, name: 'California' },
      { id: 3, name: 'Illinois' },
    ];
    
    // Mock data for contacts
    const mockContacts = [
      {
        id: 1,
        avatar_url: 'path/to/john-doe-avatar.jpg',
        first_name: 'John',
        last_name: 'Doe',
        company: 'Company A',
        details: 'John is a software engineer with over 10 years of experience in full-stack development.',
        email: 'john.doe@example.com',
        phone: { area_code: '123', number: '456-7890' },
        addresses: [
          {
            line_1: '123 Main St',
            line_2: 'Apt 4B',
            zip_code: '10001',
            city_id: 1,
            state_id: 1,
          },
        ],
      },
      {
        id: 2,
        avatar_url: 'path/to/jane-smith-avatar.jpg',
        first_name: 'Jane',
        last_name: 'Smith',
        company: 'Company B',
        details: 'Jane is a project manager with expertise in Agile methodologies.',
        email: 'jane.smith@example.com',
        phone: { area_code: '456', number: '789-0123' },
        addresses: [
          {
            line_1: '456 Oak St',
            line_2: '',
            zip_code: '90001',
            city_id: 2,
            state_id: 2,
          },
        ],
      },
    ];

    return (
        <ContactsScreen contacts={mockContacts} cities={mockCities} states={mockStates} />
    );

}
    
    