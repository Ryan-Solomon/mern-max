import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'MadMax',
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbb%2F61%2F8d%2Fbb618db7d825e2e03c8d86f781a65e06.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F650488739905580920%2F&tbnid=giP3LfYuGambiM&vet=12ahUKEwjxz4qp8NXsAhUCLq0KHV4nDTIQMygAegUIARDTAQ..i&docid=nSeHgVgjt2r07M&w=1920&h=1080&q=cool%20images&ved=2ahUKEwjxz4qp8NXsAhUCLq0KHV4nDTIQMygAegUIARDTAQ',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
