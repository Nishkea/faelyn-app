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

    console.log(shapes)

  return (
    <div className='relative w-screen h-screen flex justify-center items-center gap-4 p-5'>
      <div onClick={() => router.push('/')}  className='hover:scale-[1.05] duration-200 absolute top-5 left-5 cursor-pointer z-20'>
        <div className='bg-black text-white p-4 rounded-xl'>Back to menu</div>
      </div>

      <main className='z-20 relative'>
        <p>Casino</p>
      </main>

      <div className='absolute top-0 object-cover blur-[5px] left-0 w-full h-full z-10'>
        <img className='w-full h-full object-cover' src='https://directus.shoto.studio/assets/9dff7b68-073a-4ed1-9bd5-9bc3f0ea217d.jpg' />
      </div>
    </div>
  )
}
