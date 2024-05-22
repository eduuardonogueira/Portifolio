import { Repository } from '@customtypes/index';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const HomePage = () => {
  const [request, setRequest] = useState<Repository[]>();

  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get('https://api.github.com/users/eduuardonogueira/repos');
      setRequest(data);
      console.log(data);
    }

    fetch();
  }, []);
  return (
    <div>
      <h1>Listagem</h1>
      <hr />
      <ul>
        {request?.map((repository, index) => (
          <React.Fragment key={index}>
            <li>{repository.name}</li>
            {repository.description ? <li>{repository.description}</li> : ''}
            <ul>
              {repository.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <a>{repository.clone_url}</a>
            {repository.homepage ? <a>{repository.homepage}</a> : ''}
            <hr />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
