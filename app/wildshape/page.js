'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DetailedView } from './detailedview'

export default function FaelynWildshape() {
  const [query, updateQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [shape, setShape] = useState(null)
  const router = useRouter()

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
    <div className='w-screen h-screen flex justify-start relative'>
      <div onClick={() => router.push('/')}  className='hover:scale-[1.05] duration-200 absolute top-5 left-5 cursor-pointer'>
        <div className='bg-black text-white p-4 rounded-xl'>Back to menu</div>
      </div>
        <div className='w-1/2  flex justify-center items-center flex-col border-r-2 border-black'>
            <p className='text-white font-bold text-lg mb-5'>Faelyn wildshape browser</p>
            <input
                aria-label={'Search'}
                className='rounded p-5 shadow-xl'
                type="text"
                value={query}
                placeholder={'Search...'}
                onChange={(input) => updateQuery(input.target.value)}
            />
      
            {query.length >= 3 && searchResults !== [] ? (
            <ul className='w-auto min-w-[20rem] min-h-[5rem] max-h-[20rem] overflow-y-scroll overflow-x-hidden rounded mt-2 bg-[#6887AC] p-4 shadow-xl'>
                {searchResults.map((result) => (
                    <Wildshape key={result.item.index} {... { setShape }} wildshape={result.item} />
                ))}
            </ul>
            ) : query.length >= 3 && searchResults == [] ? (
                <p>No results</p>
            ) : null}
        </div>
        <div className='w-1/2 p-5 overflow-y-auto'>
            { shape && <DetailedView {...{ shape }} /> }
        </div>
    </div>
  )
}

function Wildshape({ wildshape, setShape}) {
  const { name, url } = wildshape

  async function handleClick() {
        setShape(null)
        const response = await fetch(`/api/wildshape/details?wildshape=${url}`)
        const json = response.json()
        const res = await json
        setShape(res)
  }

  return (
    <li onClick={handleClick} className='hover:bg-black hover:text-white p-2 rounded hover:cursor-pointer'>
      {name}
    </li>
  )
}
