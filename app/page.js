'use client'
import { useState, useEffect } from 'react';

export default function Home() {
  const [query, updateQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query.length >= 3) {
      async function getSearchResults(query) {
        const response = await fetch(`/api/wildshape?q=${query}`);
        const json = response.json();
        const res = await json;
        setSearchResults(res);
        console.log(res);
      }
      getSearchResults(query);
      return;
    } else {
      return;
    }
  }, [query]);

  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <p className='font-bold text-lg mb-5'>Faelyn wildshape browser</p>
      <input
        aria-label={'Search'}
        className='rounded p-5 shadow-xl'
        type="text"
        value={query}
        placeholder={'Search...'}
        onChange={(input) => updateQuery(input.target.value)}
      />
      
        {query.length >= 3 && searchResults !== [] ? (
          <div className='w-auto min-w-[20rem] min-h-[5rem] max-h-[20rem] overflow-y-scroll overflow-x-hidden border-2 rounded mt-2 border-black p-4'>
            {searchResults.map((result) => (
              <Wildshape key={result.item.key} wildshape={result.item} />
            ))}
          </div>
        ) : query.length >= 3 && searchResults == [] ? (
          <p>No results</p>
        ) : null}
  
    </div>
  )
}

function Wildshape({ wildshape }) {
  const { name, url } = wildshape;

  async function handleClick() {
    const response = await fetch(`/api/wildshape/details?wildshape=${url}`);
    const json = response.json();
    const res = await json;
    console.log(res);
  }
  return (
    <div onClick={handleClick} className='hover:bg-black hover:text-white p-2 rounded hover:cursor-pointer'>
      <p>{name}</p>
    </div>
  )
}