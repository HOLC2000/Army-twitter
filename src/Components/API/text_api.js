import { createClient } from 'pexels';
import { useState, useEffect } from 'react';

const TextApi = (position, received_query, request) => {
  const client = createClient(
    'TUydMIjW6tlysGnQkYXx4pVR3KDj82drthdSIaEjkXPpyGBgU1u62QPF'
  );

  const [proper_result, setResult] = useState('');

  const query = received_query;

  const TextRequestHandler = async () =>
    await client.photos.search({ query, per_page: 15 }).then((result) => {
      if (request === 'photographer') {
        setResult(result.photos[position].photographer);
      } else {
        setResult(result.photos[position].alt);
      }
    });

  useEffect(() => {
    TextRequestHandler();
  });

  return proper_result;
};

export default TextApi;
