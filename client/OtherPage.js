import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      The is another page.
      <Link to="/">Go back to calculator</Link>
    </div>
  )
}