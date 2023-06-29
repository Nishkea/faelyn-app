'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [query, updateQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [shape, setShape] = useState(null);

  useEffect(() => {
    if (query.length >= 3) {
      async function getSearchResults(query) {
        const response = await fetch(`/api/wildshape?q=${query}`)
        const json = response.json()
        const res = await json
        setSearchResults(res)
      }
      getSearchResults(query)
      return;
    } else {
      return;
    }
  }, [query]);

  return (
    <div className='w-screen h-screen flex justify-start gap-5'>
        <div className='w-1/2 flex justify-center items-center flex-col border-r-2'>
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
                    <Wildshape {... { setShape }} key={result.item.key} wildshape={result.item} />
                ))}
            </div>
            ) : query.length >= 3 && searchResults == [] ? (
            <p>No results</p>
            ) : null}
        </div>
        <div className='w-1/2'>
            { shape && <DetailedView {...{ shape }} /> }
        </div>
    </div>
  )
}

function Wildshape({ wildshape, setShape }) {
  const { name, url } = wildshape;

  async function handleClick() {
        setShape(null)
        const response = await fetch(`/api/wildshape/details?wildshape=${url}`)
        const json = response.json()
        const res = await json
        setShape(res)
  }
  return (
    <div onClick={handleClick} className='hover:bg-black hover:text-white p-2 rounded hover:cursor-pointer'>
        <p>{name}</p>
    </div>
  )
}

function DetailedView({ shape }) {
  const { name, desc, image, hit_points } = shape
  return (
    <div className='justify-center items-center flex-col'>
        <p className='font-bold text-lg mb-5'>{name}</p>
        <p>{desc}</p>
        <p>Hit points: {hit_points}</p>
        {image && <img width="250px" src={`https://www.dnd5eapi.co${image}`} />}
    </div>
  )
}