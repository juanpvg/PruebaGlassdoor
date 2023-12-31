import Image from 'next/image'
import {getServerUser} from './services/getUsers'

import { useEffect, useState } from "react";

export default async function Home() {

  const user = await getServerUser();


  return (
    <main>
      <div className="mb-5 ml-5 mt-5 pl-3 pt-3 pb-3 grid grid-cols-3 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <Image
          className="rounded-full shadow-lg"
          src={user.picture.large}
          alt="Avatar"
          width={200}
          height={200}
        />
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Nombre: {user.name.first} {user.name.last}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Correo: {user.email}
          </p>
        </div>
      </div>
      <div className="ml-5 grid grid-cols-3">
        <div className="bg-slate-700">
          <h3 className="text-neutral-50">Pais: {user.location.country}</h3>
        </div>
        <div className="bg-slate-700">
          <h3 className="text-neutral-50">Ciudad {user.location.city}</h3>
        </div>
        <div className="bg-slate-700">
          <h3 className="text-neutral-50">Estado: {user.location.state}</h3>
        </div>
      </div>
    </main>
  )
}
