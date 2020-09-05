import React, { useState, FormEvent, useEffect } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import api from '../../services/api';

import { Container, Form, FormError } from './style';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [error, setError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const localStorageRepositories = localStorage.getItem("@Github_Explorer:repositories");
    
    if (localStorageRepositories) {
      return JSON.parse(localStorageRepositories);
    } else {
      return [];
    }
  });
  const [inputValue, setInputValue] = useState('');
  const [animationIntro, setAnimationIntro] = useState(true); 

  useEffect(() => {
    localStorage.setItem("@Github_Explorer:repositories", JSON.stringify(repositories));
  }, [repositories]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (inputValue.length === 0) {
      return setError('O campo não pode estar vazio, digite autor/repositório');
    }

    try {
      const response = await api.get(`/repos/${inputValue}`);

      setRepositories([...repositories, response.data]);

      setError('');

      setInputValue('');

      setAnimationIntro(false);
    } catch (err) {
      setError('Repositório não encontrado');
    }
  };

  const handleRemovingRepository = (index: number): void => {
    const cloneRepositories = repositories;

    const newRepositories = cloneRepositories.filter(
      (repository, indexRepository) => index !== indexRepository,
    );

    setRepositories(newRepositories);
  };

  return (
    <Container className="container">
      <Header btnBack />

      <main>
        <h1>Explore repositórios no Github</h1>

        <Form 
          onSubmit={handleAddRepository} 
          hasError={!!error}
          animationIntro={animationIntro}
        >
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Digite aqui"
          />
          <button type="submit">Pesquisar</button>

          { error && <FormError >{error}</FormError> }
        </Form>

        {repositories.map((repository, index) => (
          <Card
            key={repository.full_name}
            avatar={repository.owner.avatar_url}
            owner={repository.owner.login}
            title={repository.full_name}
            description={repository.description}
            linkRepository={repository.html_url}
            buttonRemove={() => handleRemovingRepository(index)}
          />
        ))}
      </main>
    </Container>
  );
};

export default Dashboard;
