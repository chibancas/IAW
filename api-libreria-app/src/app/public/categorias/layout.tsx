import IChildren from '@/interfaces/IChildren'
import React from 'react'

export default function Generoslayout({children}: IChildren){
  return (
    <main>
        { children }
    </main>
  )
}