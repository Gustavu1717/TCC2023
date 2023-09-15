import Cabecalho from '../../components/cabecalho';
import './index.scss';

export default function pagamento() {
  return (
    <main className='pagina-pagamento'>
      <div className='Cabecalho'>
      <Cabecalho/>
        </div>

        <div className='tudo'>
          
          <div className='esq'>
            
            <div className='textos'>
              <h1>Estamos quase lá... </h1>
              <h1>Preencha a forma de pagamento</h1>
            </div>
            </div>

          <div className='esq2'>
            <div className='tipos'>
            <img src='/assets/images/cartao.png'/>
                <select>
                  <option>Tipo de Cartão</option>
                  <option>Débito</option>
                  <option>Crédito</option>
                </select>
                </div>

                <div className='tipos2'>
                <input type='text' placeholder='Nome idêntico ao do cartão'/>
                </div>

                <div className='tipos3'>
                <input className='nr' type='text' placeholder='Numero do cartão'/>
                <input className='MM' type='text' placeholder='MM/YY'/>
                <input className='CVV' type='text' placeholder='CVV'/>

                </div>
          </div>
      
        </div>
    </main>
  );
}