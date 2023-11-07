import Image from 'next/image'
import {getServerUser} from './services/getUsers'

import { useEffect, useState } from "react";

export default async function Home() {

  const user = await getServerUser();


  return (
    <main>
      <h1>Usuario</h1>
      <p>Nombre: {user.name.first} {user.name.last}</p>
      <p>Correo: {user.email}</p>
      <div>
        <Image
          src={user.picture.large}
          alt="user image"
          width={150}
          height={150}
        />
      </div>
    </main>
  )
}
