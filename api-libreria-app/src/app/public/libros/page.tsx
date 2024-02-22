"use client"
import { ILibro,ColumLibro } from '@/interfaces/ILibros';
import { getLibros } from '@/model/libros/dataLibro';
import React from 'react';
import Tabla from "@/components/commons/Tabla/Tabla";

const Librospage = async () => {
  // async function getLibros() {
  //   const res = await fetch('http://localhost:3000/libros/', { cache: 'no-store' })
  //   if (!res.ok) {
  //     return (
  //       <div>Error al obtener los libros</div>
  //     )
  //     // throw new Error('fallo al traer libros de la api')
  //   }else{
  //   return res.json()
  //   }
  // }

  const libro: ILibro[] = await getLibros()

  return (
    <>
      <h1>API Librería</h1>
      <Tabla rows={libro} columns={ColumLibro}/>
      {/* <ul>
        {libro.map((libro: ILibro) => (
          <li>
            {libro.title}
          </li>
        ))}
      </ul> */}
    </>
  )
};
export default Librospage