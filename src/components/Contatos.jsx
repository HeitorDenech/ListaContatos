import React, { useState } from 'react';
import './Contatos.css';

const Contatos = () => {
  const [contatos, setContatos] = useState([]);
  const [novoNome, setNovoNome] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');
  const [editandoContato, setEditandoContato] = useState(null);

  const adicionarContato = (e) => {
    e.preventDefault();
    if (novoNome.trim() && novoTelefone.trim()) {
      const novoContato = {
        id: contatos.length + 1,
        nome: novoNome,
        telefone: novoTelefone,
      };
      setContatos([...contatos, novoContato]);
      setNovoNome('');
      setNovoTelefone('');
    }
  };

  const removerContato = (id) => {
    const novosContatos = contatos.filter(contato => contato.id !== id);
    setContatos(novosContatos);
  };

  const iniciarEdicao = (contato) => {
    setEditandoContato(contato);
    setNovoNome(contato.nome);
    setNovoTelefone(contato.telefone);
  };

  const salvarEdicao = (e) => {
    e.preventDefault();
    setContatos(contatos.map(contato => 
      contato.id === editandoContato.id 
        ? { ...contato, nome: novoNome, telefone: novoTelefone }
        : contato
    ));
    setEditandoContato(null);
    setNovoNome('');
    setNovoTelefone('');
  };

  return (
    <div className="aplicacao">
      <h1>Lista de Contatos</h1>
      <form onSubmit={editandoContato ? salvarEdicao : adicionarContato} className="formulario-contato">
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={novoTelefone}
          onChange={(e) => setNovoTelefone(e.target.value)}
          placeholder="Telefone"
        />
        <button type="submit">{editandoContato ? 'Salvar' : 'Adicionar'}</button>
      </form>
      <div className="lista-contatos">
        {contatos.length > 0 ? (
          contatos.map((contato) => (
            <div key={contato.id} className="contato-item">
              <span>{contato.nome} - {contato.telefone}</span>
              <div>
                <button onClick={() => iniciarEdicao(contato)}>Editar</button>
                <button onClick={() => removerContato(contato.id)}>Remover</button>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum contato adicionado ainda.</p>
        )}
      </div>
    </div>
  );
};

export default Contatos;
