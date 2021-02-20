import React from 'react';

import withData from '../../withData.js';

const UserProfile = ({ data, name, email }) => {
  const postsList = data.map(({ title, body }, key) => (
    <div key={ key }>
      <h1>{ title }</h1>
      <p>{ body }</p>
    </div>
  ));

  return (
    <section className="container">
      <h1>{ name }</h1>
      <h2>{ email }</h2>
      { postsList }
    </section>
  );
}

export default withData(UserProfile, 'posts');
