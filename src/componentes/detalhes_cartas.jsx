/**
 * Nome do arquivo: detalhes_carta.jsx
 * Data de criação: 14/05/2025
 * Autor: Simão Pedro Parente da Silva
 * Matrícula: 01744402
 * Descrição:
 * Este componente exibe todos os detalhes de uma carta Pokémon buscada pela API.
 */
import React from 'react';

const DetalhesCarta = ({ carta }) => {
  // Se não tiver carta, não renderiza nada
  if (!carta) return null;

  return (
    <div className='mt-4'>
      <img
        src={carta.images.large}
        alt={carta.name}
        className='img-fluid mb-3'
        style={{ maxWidth: '300px' }}
      />
      <h2>Detalhes da Carta</h2>

      <p>
        <strong>Tipo:</strong> {carta.supertype}{' '}
        {carta.subtypes && `- ${carta.subtypes.join(', ')}`}
      </p>

      {/* HP e tipos */}
      <p>
        <strong>HP:</strong> {carta.hp}
      </p>
      <p>
        <strong>Tipos:</strong> {carta.types?.join(', ') || 'N/A'}
      </p>

      {/* Evoluções */}
      {carta.evolvesTo && (
        <p>
          <strong>Evolui para:</strong> {carta.evolvesTo.join(', ')}
        </p>
      )}

      {/* Regras especiais */}
      {carta.rules && (
        <div>
          <strong>Regras:</strong>
          <ul>
            {carta.rules.map((regra, i) => (
              <li key={i}>{regra}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Ataques */}
      {carta.attacks && (
        <div>
          <strong>Ataques:</strong>
          <ul>
            {carta.attacks.map((atk, i) => (
              <li key={i}>
                <strong>{atk.name}</strong> ({atk.cost?.join(', ') || 'N/A'}) -
                Dano: {atk.damage || '0'}
                <br />
                <em>{atk.text}</em>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Fraquezas */}
      {carta.weaknesses && (
        <p>
          <strong>Fraquezas:</strong>{' '}
          {carta.weaknesses.map((w) => `${w.type} (${w.value})`).join(', ')}
        </p>
      )}

      {/* Custo de recuo */}
      <p>
        <strong>Custo de Recuo:</strong>{' '}
        {carta.retreatCost?.join(', ') || 'Nenhum'}
      </p>

      {/* Informações do conjunto */}
      <p>
        <strong>Conjunto:</strong> {carta.set.name}
      </p>
      <p>
        <strong>Lançamento:</strong> {carta.set.releaseDate}
      </p>

      {/* Número e raridade */}
      <p>
        <strong>Número:</strong> {carta.number}
      </p>
      <p>
        <strong>Raridade:</strong> {carta.rarity}
      </p>

      {/* Artista */}
      <p>
        <strong>Artista:</strong> {carta.artist}
      </p>

      {/* Preço médio de mercado */}
      {carta.tcgplayer?.prices?.holofoil?.market && (
        <p>
          <strong>Preço médio (holofoil):</strong> US${' '}
          {carta.tcgplayer.prices.holofoil.market.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default DetalhesCarta;
