import './erro.css';
import { Link } from 'react-router-dom';

function Erro(){
    return(
        <div className='tela-erro'>
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">
                <button>
                    Veja todos os filmes
                </button>
            </Link>
            
        </div>
    )
}

export default Erro;