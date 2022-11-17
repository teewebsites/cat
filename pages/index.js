
import Image from "next/image";
import cat1 from "../public/cat1.webp"
import cat2 from "../public/cat2.webp"
import cat3 from "../public/cat3.webp"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row'>
      <h1 className='text-3xl'>the cat app</h1>
      <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-blue-500 ring-offset-4'>
        <Image src={cat1} layout='fill' objectFit='cover'/>
      </div>
      <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-500 ring-offset-4'>
        <Image src={cat2} layout='fill' objectFit='cover'/>
      </div>
      <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-blue-500 ring-offset-4'>
        <Image src={cat1} layout='fill' objectFit='cover'/>
      </div>
     
    </div>
  )
}
