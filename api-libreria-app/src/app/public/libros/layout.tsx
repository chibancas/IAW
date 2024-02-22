import IChildren from '@/interfaces/IChildren'
import React from 'react'

export default function Libroslayout({children}: IChildren){
  return (
    <main>
        { children }
    </main>
  )
}
