import {FiSearch} from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite o CEP que deseja verificar"
        />

        <button className='buttonSearch'>
          <FiSearch size={25} color='#FFF'/>
        </button>
        </div>

        <main className='main'>
          <h2>CEP: TESTE</h2>
          <span>Rua TESTE</span>
          <span>Complemento</span>
          <span>Bairro</span>
          <span>Cidade - Estado</span>
        </main>

      
    </div>
  );
}

export default App;
