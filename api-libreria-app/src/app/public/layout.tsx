import React from "react";
import IChildren from "../../interfaces/IChildren"
import '../globals.css'
import { Menu } from "@/components/public/Menu";
import { ILink } from "@/interfaces/ILink";

const enlaces:ILink[] = [
  {name: 'Libros', href: '/public/libros'},
  {name: 'Categorias', href: '/public/categorias'},
  {name: 'Proveedores', href: '/public/proveedores'},
  {name: 'Generos', href: '/public/generos'},
  {name: 'Quienes somos', href: '/public/about'}
  ]
  

export default function PublicLayout({ children }: IChildren) {
    return (
        <>
            <header>
                <h1>APP Libreria</h1>
                <Menu links={enlaces} />
            </header>
            <main>
                {children}
            </main>
        </>
    )
}