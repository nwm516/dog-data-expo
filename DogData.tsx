import React from 'react';
import { useQuery } from '@tanstack/react-query';

async function fetchDogData() {
  const response = await fetch('https://dogapi.dog/api/v2/breeds');
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  return response.json();
}

function DogData() {
  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ['dogs'],
    queryFn: fetchDogData,
  });

  if (isLoading) return <span>Loading Dog Data...</span>;
  if (isError) return <span>Error: {error.message}</span>;
  if (isSuccess) {
    return (
      <div>
        <h1>Dog Breeds</h1>
        <ul>
          {data.data.map((breed: any) => (
            <li key={breed.id}>{breed.attributes.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default DogData;
