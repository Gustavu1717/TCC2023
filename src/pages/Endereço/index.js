import Cabecalho from '../../components/cabecalho';
import './index.scss';

export default function Nendereco() {
  return (
    <main className='pagina-nendenreco'>
        <div className='Cabecalho'>
            <Cabecalho />
        </div>
        <div className='just'>
            <div className='borda'>
                <div className='novo-endereco'>

                    <div className='nc'>
                        <h1>Novo endereço</h1>
                        <p>Campos obrigatórios</p>
                    </div>

                    <div className='nd'>
                        <p>Nome do Destinatário</p>
                        <input className='nomed' type='text' />
                    </div>

                    <div className='cpf'>
                        <p>CPF (Opcional)</p>
                        <input type='text' />
                    </div>

                        <div className='end'>    
                            <p>Endereço de Entrega</p>
                        </div>
                <div className='cep'>
                    <p>CEP</p>

                    <div className='ip'>
                        <input type='text' />
                        <p>Não sei meu CEP</p>
                    </div>
                </div>

                    <div className='bt'>
                        <button>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}