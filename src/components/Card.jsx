"use client"

import { StarIcon } from '@heroicons/react/24/outline'
import useFavorito from '@/hooks/filmes'


export default function Card({filme}){

    const { favorito, desfavoritar, favoritar } = useFavorito()
    const image_url = "https://image.tmdb.org/t/p/w200/" + filme.poster_path

    return(
        <div id="card" className='flex flex-col p-2 w-40 justify-center items-center'>

        { favorito ?
        <StarIcon onClick= {() => desfavoritar(filme)} className="h-6 w-6 text-yellow-300 cursor-pointer" />
        :
        <StarIcon onClick= {() => favoritar(filme)} className="h-6 w-6 text-gray-300 cursor-pointer" />
        }

        <img className="rounded h-56" src={image_url} alt="poster do filme" />
        <span className='font-bold text-center line-clamp-1' >{filme.title}</span>
        <div>
          <span>{filme.vote_average.toFixed(1)} </span>
        </div>
        <a href='#' className='bg-sky-800 py-2 w-full rounded text-center' >Detalhes</a>
        </div>
    )
}