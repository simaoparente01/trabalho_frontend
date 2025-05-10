/**
 * Nome do arquivo: APP.js
 * data de ciração 09/05/2025
 * Autor: Simão Pedro
 * Matricula: 01744402
 *
 * Descrição:
 * componente principal da criação
 * esta parte implementa o layout das cartas salvas no topo da págna,
 * exibindo miniaturas armazenadas em localStorage.
 */

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // 1️⃣ Estado que armazena as cartas salvas
  const [cartasSalvas, setCartasSalvas] = useState([]);

  // 2️⃣ Busca no localStorage quando o componente é montado
  useEffect(() => {
    const cartasSalvasJSON = localStorage.getItem('cartasSalvas');
    if (cartasSalvasJSON) {
      setCartasSalvas(JSON.parse(cartasSalvasJSON));
    }
  }, []);

  return (
    <div className='container mt-4'>
      {/* 3️⃣ Título da seção */}
      <h3 className='mb-3'>Cartas Salvas</h3>

      {/* 4️⃣ Se houver cartas, exibe; senão, mostra mensagem */}
      {cartasSalvas.length > 0 ? (
        <div className='d-flex flex-wrap gap-2 mb-4'>
          {cartasSalvas.map((carta) => (
            <img
              key={carta.id}
              src={carta.images.small}
              alt={carta.name}
              className='img-thumbnail'
              style={{ width: '100px', height: '140px' }}
            />
          ))}
        </div>
      ) : (
        <p>Nenhuma carta salva.</p>
      )}
    </div>
  );
}

export default App;
