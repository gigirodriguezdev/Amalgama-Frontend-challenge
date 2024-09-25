
export const ContactProfile = ({ contact, cities, states }) => {
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
