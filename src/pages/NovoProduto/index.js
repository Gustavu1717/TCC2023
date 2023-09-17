import Cabecalho from '../../components/cabecalho';
import './index.scss';

export default function Novoproduto() {
  return (
    <main className='pagina-np'>
        <div>
            <Cabecalho />
        </div>

        <div className='Tudo'>

            <div className='AddProduto'>
                <img src='/assets/images/add.png'/>
                <h1> Adicionar um novo produto </h1>
            </div>

            <div className='nd'>
                <h1>Nome e Descrição</h1>
                <input  className='np' type='text' placeholder='Nome do produto'/>

                <div className='space'>
                    <input className='nada' placeholder='Descrição' type='text'/>
                </div>

                <div className='cod'>
                    <h1> Código do Produto: </h1>
                    <input type='text'/>
                </div>
            </div>

            <div className='macaco'>
                <h1>Preço: </h1>

                <div className='macaco2'>
                    <p>Preço de venda</p>
                    <p>Preço Promocional</p>
                </div>

                <div className='macaco3'>
                    <input className='top' type='text'  placeholder='R$ 0,00' />
                    <input className='topp' type='text'  placeholder='R$ 0,00' />
                </div>
            </div>            

            <div className='adft'>
                
                <h1>Adicionar fotos:</h1>

                <div className='chimpanze'>
                    <button> <img src='/assets/images/adicionar.png'/> </button>
                    <button> <img src='/assets/images/adicionar.png'/> </button>
                    <button> <img src='/assets/images/adicionar.png'/> </button>   
                </div>

                <div className='qtd'>

                    <h1>Quantidade em estoque: </h1>
                    <input type='text' placeholder='00'/>

                </div>
            </div>

            <div className='tipo'>

                <h1>Tipo de Produto: </h1>

                <div className='row'> 
                    <div className='micoleaodourado'>
                        <input type='checkbox'/>
                        <p>Smartphones</p>
                    </div>

                    <div className='gorila'>
                    <input type='checkbox'/>
                        <p>Acessórios</p>
                    </div>
                </div>
            </div>

            <div className='detalhe'>
                <h1>Tipo de detalhe: </h1>
                <input type='text'/>
            </div>

            <div className='descricao'>
                <h1>Descrição do detalhe: </h1>
                <input type='text'/>
            </div>

            <div className='butao'>
                <button>Adicionar</button>
            </div>
        </div>
    </main>
  )}