import './index.scss'
import { Link  } from 'react-router-dom'

export default function Cabecalho(){
    return(
        <div className='nav'>
            <div className='comp-cabecalho'>
                <img src='./assets/images/logo.png'></img>

                <div className='pesquisa'>
                    <input 
                        type='text'
                        placeholder='Buscar'
                    /> 
                    <img src='./assets/images/lupa.png'></img>
                </div>

                <div className='login'>
                    <img src='./assets/images/carrinho.png'></img>

                    <div className='lg'>
                        <button> <img src='./assets/images/login.png'/> </button>
                        <img id='seta' src='./assets/images/seta.png'/>
                    </div>    
                </div>

        
            </div>
             <div className='comp-menu'>
                <Link>Home</Link> 
                <Link>Smartphones</Link>    
                <Link>Acessórios</Link> 
                <Link>Fale conosco</Link> 

            </div>   

        </div>    
    )
}