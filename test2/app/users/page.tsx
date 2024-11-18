import React from 'react';
import Link from 'next/link';

const User = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/users/2">User 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default User;
