'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Casino() {
  const router = useRouter()
    const [shapes, setShapes] = useState([])

    useEffect(() => {
        async function getShapes() {
            const response = await fetch(`/api/casino`)
            const json = response.json()
            const res = await json
            setShapes(res)
        }
        getShapes()
    }, []);

    async function getShapes() {
      setShapes([])
      const response = await fetch(`/api/casino`)
      const json = response.json()
      const res = await json
      setShapes(res)
    }

    useEffect(() => {
        console.log(shapes)
    }, [shapes])

  return (
    <div className='relative w-screen h-screen flex justify-center items-center gap-4 p-5'>
      <div onClick={() => router.push('/')}  className='hover:scale-[1.05] duration-200 absolute top-5 left-5 cursor-pointer z-20'>
        <div className='bg-black text-white p-4 rounded-xl'>Back to menu</div>
      </div>

      <main className='z-20 relative flex flex-wrap gap-5'>
        {!Boolean(shapes.length) && <div className='p-4 rounded-xl bg-white'>Fetching casino...</div>}
        {Boolean(shapes.length) && shapes.map((shape, i) => <WildshapeDetails key={shape.name}  {...{ shape, i, getShapes }} />)}
      </main>

      <div className='absolute top-0 object-cover blur-[5px] left-0 w-full h-full z-10'>
        <img className='w-full h-full object-cover' src='https://directus.shoto.studio/assets/9dff7b68-073a-4ed1-9bd5-9bc3f0ea217d.jpg' />
      </div>
    </div>
  )
}

function WildshapeDetails({ shape, i, getShapes }) {
  const { name, index } = shape
  const casinoNumber = i + 1

  function removeWildshape({ form }) {
    fetch(`/api/casino?remove=${form}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(json => {
            if (json.error) {
                alert(json.error)
            } else {
                alert('Removed!')
                getShapes()
            }
    })
}

  return (
    <div className='flex justify-start items-start shadow-xl flex-col gap-5 bg-white text-black rounded-xl p-5'>
      <div className='flex items-start justify-start gap-2'>
        <p className='font-bold text-lg flex flex-col justify-start items-start gap-3'>{casinoNumber} {name} <div onClick={() => removeWildshape({ form: index })} className='p-2 bg-red-400 text-white rounded-lg text-sm'>REMOVE</div></p>
      </div>
    </div>
  )
}
