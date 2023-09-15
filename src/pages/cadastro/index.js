import './index.scss';

export default function cadastro() {
  

  

  return (
    <div className='pagina-cadastro'>
      <div className='img-cadastro'>
        <img src='/assets/images/cadastro.png'/>

      </div>

      <div className='cadastro'>

        <div className='titulo'> 
            <img src='./assets/images/boneco.png'/>
            <h1>CRIE SUA CONTA</h1>
        </div>

        <div className='input'>

            <div>
                <label>Nome completo </label>
                <input></input>
            </div>

          <div className='duplas'>


              <div>
                  <label>Data de nascimneto</label>
                  <input type='date'/>
              </div>

              <div>
                  <label>Telefone</label>   
                  <input></input>    
              </div>

          </div>

            <div>
                <label> e-mail </label>
                <input></input>
          </div>

          <div>
                <label> senha (no minimo 6 caracters) </label>
                <input></input>
          </div>

          <div>
                <label> confirmaçao de senha </label>
                <input></input>
          </div>



          </div>


      </div>
      
    </div>
  )
}