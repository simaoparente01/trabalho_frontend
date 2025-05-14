/**
 * Nome do arquivo: barrapesquisa.jsx
 * data de ciração 12/05/2025
 * Autor: Simão Pedro Parente da Silva
 * Matricula: 01744402
 *
 * Descrição:
 * Adcionando campo de busca e botão de interface
 * controlando o valor digitado usando o estado (useState)
 * Criando a funcão que chama a API com o nome
 *
 */

import React, { useState } from 'react';
import PokemonTCG from 'pokemontcgsdk';
import DetalhesCarta from './detalhes_cartas';

const apiKey = import.meta.env.VITE_POKEMON_API_KEY;

function Searchbar() {
  // Estado que guarda o valor digitado no input
  const [nome, setNome] = useState('');

  // Estado que guarda os dados da carta retornada
  const [carta, setCarta] = useState(null);

  // Função executada ao clicar no botão de buscar
  const buscarCarta = async () => {
    try {
      const resultado = await PokemonTCG.card.where(
        { q: `name:${nome}` },
        { apiKey }
      );

      // A API retorna uma lista de cartas com esse nome
      if (resultado.data.length > 0) {
        setCarta(resultado.data[0]); // pega a primeira da lista
      } else {
        setCarta(null); // nenhuma encontrada
      }
    } catch (erro) {
      console.error('Erro ao buscar a carta:', erro);
      setCarta(null);
    }
  };

  return (
    <div className='container mt-4'>
      <h2>Buscar Carta Pokémon por Código</h2>

      {/* Campo de entrada do código */}
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Digite o nome da carta (ex: Charizard)'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button className='btn btn-primary' onClick={buscarCarta}>
          Buscar
        </button>
      </div>

      {/* Mostra se a carta foi carregada */}
      {carta && (
        <div className='card mt-4 p-3'>
          <h4>{carta.name}</h4>

          {/* Detalhes da carta (somente se encontrada) */}
          <DetalhesCarta carta={carta} />
        </div>
      )}
    </div>
  );
}

export default Searchbar;
