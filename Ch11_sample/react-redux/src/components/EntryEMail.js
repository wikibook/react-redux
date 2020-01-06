import React from 'react';

const Button = ({ children, onClick }) =>
  <button onClick={onClick}>{children}</button>;

const EntryEMail = ({ onClick }) => (
  <div>
    <input type="email" defaultValue="" />
    <Button onClick={onClick}>등록</Button>
  </div>
);

export default EntryEMail;