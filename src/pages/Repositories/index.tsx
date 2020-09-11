import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import CountUp from 'react-countup';

import Header from '../../components/Header';
import api from '../../services/api';

import { 
  PageContainer, 
  RepoInfo, 
  TitleRepo, 
  DescriptionRepo, 
  Issues, 
  AccountantsContainer, 
  Count,
  CardContainer,
  Info,
  Title,
} from './style';

interface Params {
  name: string;
}

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
}

interface Issues {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
  }
}

const Repositories: React.FC = () => {
  const { params } = useRouteMatch<Params>();
  const [repositories,] = useState<Repository[]>(() => {
    const repositories = localStorage.getItem("@Github_Explorer:repositories");

    if(repositories) {
      return JSON.parse(repositories);
    }

    return [];
  });
  const [repository,] = useState<Repository>(() => {
    const findRepository = repositories.find(
      repository => repository.full_name === params.name
    );

    if (findRepository) return findRepository;

    return {
      full_name: '',
      owner: {
        login: '',
        avatar_url: '',
      },
      html_url: '',
      description: '',
      forks_count: 0,
      open_issues_count: 0,
      stargazers_count: 0,
  }
  });
  const [issues, setIssues] = useState<Issues[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function(){
      const responseIssues = await api.get(`repos/${params.name}/issues`);

      setIssues(responseIssues.data);

      setLoading(false);
    })()
  }, [params.name]);

  if(!repository.full_name) {
    return (
      <PageContainer className="container">
        <Header linkBack="/" />

        <div className="repoNotFound">
          <h1>Repositório não adicionado a sua lista.</h1>
        </div>
      </PageContainer>
    );
  }

  if(loading) {
    return (
      <PageContainer className="container">
        <Header linkBack="/" />

        <div className="repoNotFound">
          <h1>Carregando...</h1>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="container">
      <Header linkBack="/" />

      <main>
        <RepoInfo>
          <img 
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />

          <div>
            <TitleRepo>{params.name}</TitleRepo>
            <DescriptionRepo>{repository.description}</DescriptionRepo>
          </div>
        </RepoInfo>

        <AccountantsContainer>
          <div>
            <Count>
              <CountUp className="countup" start={0} end={repository.stargazers_count} />
            </Count>
            <span>Stars</span>
          </div>

          <div>
            <Count>
              <CountUp className="countup" start={0} end={repository.forks_count} />
            </Count>
            <span>Forks</span>
          </div>

          <div>
            <Count>
              <CountUp className="countup" start={0} end={repository.open_issues_count} />
            </Count>
            <span>Issues abertas</span>
          </div>
        </AccountantsContainer>

        <Issues>
          {issues.map(issue => (
            <a key={issue.id} href={issue.html_url} target="_blank" rel="noopener noreferrer">
              <CardContainer>
                <Info>
                    <Title>{issue.title}</Title>
                    <p>{issue.user.login}</p>
                </Info>

                <FiChevronRight size={25} color="#C9C9D4" />
              </CardContainer>
            </a>
          ))}
        </Issues>
      </main>
    </PageContainer>
  );
};

export default Repositories;
