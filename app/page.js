'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-wrap gap-4 p-5'>
      <Card link='/wildshape' title='wildshapes' description='View all wildshapes' image='https://directus.shoto.studio/assets/087540c2-7b7a-4f3e-b5f1-fb581d8280af.jpg' />
      <Card link='/wildshape' title='wildshapes' description='View all wildshapes' image='https://directus.shoto.studio/assets/6d569c4e-4238-4293-b98e-efefd40bb0c7.jpg' />
      <Card link='/wildshape' title='wildshapes' description='View all wildshapes' image='' />
      <Card link='/wildshape' title='wildshapes' description='View all wildshapes' image='' />
    </div>
  )
}

function Card({ link, title, description, image = undefined }) {

  const router = useRouter()

  return (
    <div onClick={() => router.push(link)} className='w-[49%] h-[49%] cursor-pointer flex items-center justify-center rounded-xl bg-black text-white hover:scale-[1.025] duration-200 overflow-hidden relative'>
    <div className='relative z-10 flex flex-col gap-5 items-center'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
      {image && <div className='w-full blur-[2px] opacity-20 h-full absolute top-0 left-0 object-cover overflow-hidden'>
        <img className='object-cover w-full h-full' src={image} />
        </div>
      }
    </div>
  )
}
