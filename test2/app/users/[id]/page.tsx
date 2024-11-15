import React from 'react'
import Link from 'next/link'


const Users = () => {
  return (
<>
<h1>Dashboard Users</h1>

<ul className='mt-10'>
    <Link href={"/users/1"}>
    <li>Users 1</li>
    </Link>
    <Link href={"/users/2"}>
    <li>Users 2</li>
    </Link>
    <Link href={"/users/3"}>
    <li>Users 3</li>
    </Link>

</ul>

</>
  )
}

export default Users