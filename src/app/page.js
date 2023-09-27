import Titulo from "@/components/Titulo.jsx";
import Card from '@/components/Card';
import NavBar from "@/components/NavBar";

async function carregarDados(){
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=1e922667481ab207d642450b0efb461e&with_genres=27,53"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

//Gêneros: https://api.themoviedb.org/3/genre/movie/list?api_key=1e922667481ab207d642450b0efb461e&language=en

export default async function Home() {
  
  const filmes = await carregarDados()


  return (
    <>
      <NavBar />

      <Titulo>Favoritos</Titulo>

      <section className='flex flex-wrap m-4 p-2 leading-6'>

      {filmes.map(filme => <Card filme={filme} /> )}

      </section>

      <Titulo>Ofertas</Titulo>

      <section className='flex flex-wrap m-4 p-2 leading-6'>

      {filmes.map(filme => <Card filme={filme} /> )}

      </section>
  </>
  )
}
