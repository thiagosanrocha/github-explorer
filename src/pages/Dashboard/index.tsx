import React, { useState, FormEvent, useEffect } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import api from '../../services/api';

import { 
  Container, 
  Form, 
  FormError, 
  CardContainer, 
  Avatar, 
  Info, 
  Title 
} from './style';

interface Repository {
  id: string;
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("@Github_Explorer:repositories", JSON.stringify(repositories));
  }, [repositories]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (inputValue.length === 0) {
      return setError('O campo não pode estar vazio, digite autor/repositório.');
    }

    const findRepository = repositories.find(
      repository => 
        inputValue.toLowerCase() === repository.full_name.toLowerCase()
    );

    if (findRepository) {
      return setError('Repositório já adicionado, tente outro.');
    }

    try {
      setLoading(true);

      const response = await api.get(`/repos/${inputValue}`);

      setRepositories([...repositories, response.data]);

      setError('');

      setInputValue('');

      setAnimationIntro(false);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      
      setError('Repositório não encontrado.');
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
      <Header />

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
          <button type="submit">
            {loading ? <AiOutlineLoading size={25} /> : 'Pesquisar'}
          </button>

          { error && (
            <FormError >
              <TiDelete size={20} />
              {error}
            </FormError>
          )}
        </Form>

        {repositories.map((repository, index) => (
          <CardContainer key={repository.id}>
            <Link to={`/repositories/${repository.full_name}`}>
              <Avatar src={repository.owner.avatar_url} alt={repository.owner.login} />

              <Info>
                <Title>{repository.full_name}</Title>
                <p>{repository.description}</p>
              </Info>
            </Link>

            <div className="btns">
              <div className="remove" onClick={() => handleRemovingRepository(index)}>
                <RiDeleteBinLine size={18} />
              </div>

              <FiChevronRight size={25} color="#C9C9D4" />
            </div> 
          </CardContainer>
        ))}
      </main>
    </Container>
  );
};

export default Dashboard;
