import Botao from '@/components/Botao.jsx';

export default function Card(props){
    return(
        <div id="card" className='flex flex-col p-2 w-40 justify-center items-center'>
        <img className='rounded' src={props.linkImagem} alt=''/>
        <span className='font-bold text-center line-clamp-1' >{props.nomezinho}</span>
        <div>
          <span>{props.nota}</span>
        </div>
        <Botao>{props.botaozinho}</Botao>
        </div>
    )
}