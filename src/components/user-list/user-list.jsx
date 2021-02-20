import React from 'react';

import withData from '../../withData.js';

const UserList = ({ data }) => {
  const postsList = data.map(({ name, email }, key) => (
    <div key={ key }>
      <h1>{ name }</h1>
      <p>{ email }</p>
    </div>
  ));

  return (
    <section className="container">
      <h2>User List</h2>
      { postsList }
    </section>
  );
}

export default withData(UserList, 'users');
