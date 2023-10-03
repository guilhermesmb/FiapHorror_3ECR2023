import Titulo from "@/components/Titulo.jsx";
import Card from '@/components/Card';
import NavBar from "@/components/NavBar";

async function carregarFilmesTerror(){
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=1e922667481ab207d642450b0efb461e&with_genres=27"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

async function carregarFilmesSuspense(){
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=1e922667481ab207d642450b0efb461e&with_genres=53,27"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

async function carregarFilmesSciFi(){
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=1e922667481ab207d642450b0efb461e&with_genres=878,27,53"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

//Gêneros: https://api.themoviedb.org/3/genre/movie/list?api_key=1e922667481ab207d642450b0efb461e&language=en

export default async function Home() {
  
  const filmes_terror = await carregarFilmesTerror()
  const filmes_suspense = await carregarFilmesSuspense()
  const filmes_scifi = await carregarFilmesSciFi()
  
  return (
    <>
      <NavBar />

      <Titulo >Suspense</Titulo>

      <section id= "suspense" className='flex flex-wrap m-4 p-2 leading-6'>

      {filmes_suspense.map(filme => <Card filme={filme} /> )}

      </section>

      <Titulo >Terror</Titulo>

      <section id= "terror" className='flex flex-wrap m-4 p-2 leading-6'>

      {filmes_terror.map(filme => <Card filme={filme} /> )}

      </section>

      <Titulo >Sci-Fi</Titulo>

      <section id= "scifi" className='flex flex-wrap m-4 p-2 leading-6'>

      {filmes_scifi.map(filme => <Card filme={filme} /> )}

      </section>
  </>
  )
}
