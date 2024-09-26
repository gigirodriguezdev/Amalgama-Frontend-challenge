import { Address } from './Address';
import { Link } from 'react-router-dom';

export const ContactCard = ({ contact }) => (
  <div className="max-w-sm bg-white rounded-lg shadow-md p-4 m-4">
    <Link to={`/contact/${contact.id}`} className="block hover:bg-gray-100 transition duration-200 rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src={contact.avatar_url}
          alt={`${contact.full_name} avatar`}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{contact.full_name}</h3>
          <h4 className="text-sm text-gray-500">{contact.company}</h4>
        </div>
      </div>
      <p className="mt-3 text-gray-600">{contact.details}</p>
      <ul className="mt-3 text-sm text-gray-800 space-y-1">
        <li>
          <span className="font-bold">Email:</span> {contact.email}
        </li>
        <li>
          <span className="font-bold">Phone:</span> {contact.phone_number}
        </li>
        <li>
          {contact.addresses.length > 1 ? (
            <h4 className="font-bold">Addresses:</h4>
          ) : (
            <h4 className="font-bold">Address:</h4>
          )}
          {contact.addresses.map((address, index) => (
            <Address key={index} address={address} />
          ))}
        </li>
      </ul>
    </Link>
  </div>
);
