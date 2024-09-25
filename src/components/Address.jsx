export const Address = ({ address }) => (
    <ul>
      <li>{address.line_1}</li>
      {address.line_2 && <li>{address.line_2}</li>}
      <li>{address.zip_code}</li>
      <li>{address.city || 'Unknown City'}</li>
      <li>{address.state || 'Unknown State'}</li>
    </ul>
  );