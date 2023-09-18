import Cabecalho from '../../components/cabecalho';
import './index.scss';

export default function pagamento() {
  return (
    <main className='pagina-pagamento'>
      <div className='Cabecalho'>
      <Cabecalho/>
        </div>

      <div className='tudo'>
          
        <div className='esquerda'>
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

        <div className='direita'>

          <div className='dir'>

            <div className='textosloc'>
              <img src='/assets/images/loc.png'/>
              <h1>Preencha o endereço de entrega</h1>
            </div>

            <div className='inputs'>

              <input className='endere' type='text' placeholder='Endereço'/>

              <div className='cs'>

                <input className='cepi' type='text' placeholder='CEP'/>
                <input type='text' placeholder='Nº Casa'/>

              </div>

            <div className='complementoo'>
              <input type='text' placeholder='Complemento'/>
            </div>

            <div className='confi'>
              <button>Confirmar</button>
            </div>

            </div>



          </div>
        </div>
      </div>
    </main>
  );
}