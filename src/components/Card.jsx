"use client"

import { StarIcon } from '@heroicons/react/24/outline'
import useFavorito from '@/hooks/jogos'


export default function Card({jogo}){

    const { favorito, desfavoritar, favoritar } = useFavorito()

    return(
        <div id="card" className='flex flex-col p-2 w-40 justify-center items-center'>

        { favorito ?
        <StarIcon onClick= {() => desfavoritar(jogo)} className="h-6 w-6 text-yellow-300 cursor-pointer" />
        :
        <StarIcon onClick= {() => favoritar(jogo)} className="h-6 w-6 text-gray-300 cursor-pointer" />
        }

        <img className='rounded' src={jogo.thumbnail} alt=''/>
        <span className='font-bold text-center line-clamp-1' >{jogo.title}</span>
        <div>
          <span>{jogo.platform} </span>
        </div>
        <a href='#' className='bg-sky-800 py-2 w-full rounded text-center' >Detalhes</a>
        </div>
    )
}