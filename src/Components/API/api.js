import { createClient } from 'pexels';
import { useState, useEffect } from 'react';

const API = (position, received_query) => {
  const client = createClient(
    'TUydMIjW6tlysGnQkYXx4pVR3KDj82drthdSIaEjkXPpyGBgU1u62QPF'
  );

  const [proper_result, setResult] = useState('');

  const query = received_query;

  const ImageRequestHandler = async () =>
    await client.photos.search({ query, per_page: 15 }).then((result) => {
      setResult(result.photos[position].src.medium);
    });

  useEffect(() => {
    ImageRequestHandler();
  });

  return proper_result;
};

export default API;

// All requests made with the client will be authenticated
