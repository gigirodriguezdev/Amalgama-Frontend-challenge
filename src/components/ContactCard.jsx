import { Address } from './Address';
import { Link } from 'react-router-dom';

export const ContactCard = ({ contact }) => (
    <div>
         <Link to={`/contact/${contact.id}`}>
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
      </Link>
    </div>
  );
  