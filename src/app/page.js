import Image from 'next/image'
import Titulo from "@/components/Titulo.jsx";
import Botao from '@/components/Botao.jsx';
import Card from '@/components/Card';

export default function Home() {
  return ( // JSX
  <>
    <nav className='flex p-4 bg-sky-800'>
        <ul className='flex gap-20'>
          <li>
            <a href='#'>
              <h1>FiapGames</h1>  
            </a>
          </li>
          <li>
            <a href='#'>
              Favoritos
            </a>
          </li>
          <li>
            <a href='#'>
              PC
            </a>
          </li>
          <li>
            <a href='#'>
              Xbox
            </a>
          </li>
          <li>
            <a href='#'>
              PlayStation
            </a>
          </li>
        </ul>
      </nav>

      <Titulo>Favoritos</Titulo>

      <div className='flex flex-row m-4 p-2 leading-6'>

      <Card
        linkImagem={'https://th.bing.com/th/id/OIP.XxWTMeSrenp_kSxiwgoYcwHaHa?pid=ImgDet&rs=1'}
        nomezinho={'God of War'}
        nota={'10.0'}
        botaozinho={'Detalhes'}
      />

      <Card
        linkImagem={'https://th.bing.com/th/id/OIP.XxWTMeSrenp_kSxiwgoYcwHaHa?pid=ImgDet&rs=1'}
        nomezinho={'God of War'}
        nota={'10.0'}
        botaozinho={'Detalhes'}
      />

      <Card
        linkImagem={'https://th.bing.com/th/id/OIP.XxWTMeSrenp_kSxiwgoYcwHaHa?pid=ImgDet&rs=1'}
        nomezinho={'God of War'}
        nota={'10.0'}
        botaozinho={'Detalhes'}
      />

      </div>

      <Titulo>Ofertas</Titulo>

      <div className='flex flex-row m-4 p-2 leading-6'>

      <Card
        linkImagem={'https://th.bing.com/th/id/OIP.XxWTMeSrenp_kSxiwgoYcwHaHa?pid=ImgDet&rs=1'}
        nomezinho={'God of War'}
        nota={'10.0'}
        botaozinho={'Detalhes'}
      />

      <Card
        linkImagem={'https://th.bing.com/th/id/OIP.XxWTMeSrenp_kSxiwgoYcwHaHa?pid=ImgDet&rs=1'}
        nomezinho={'God of War'}
        nota={'10.0'}
        botaozinho={'Detalhes'}
      />

      <Card
        linkImagem={'https://th.bing.com/th/id/OIP.XxWTMeSrenp_kSxiwgoYcwHaHa?pid=ImgDet&rs=1'}
        nomezinho={'God of War'}
        nota={'10.0'}
        botaozinho={'Detalhes'}
      />

      </div>

  </>
  )
}
