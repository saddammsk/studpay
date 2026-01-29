import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className='bg-gray-1200 h-screen w-full flex flex-col items-center justify-center'>
         <h1 className='text-5xl font-bold mb-4 leading-[80%] text-center'>404 <br></br> <span className='text-3xl'>Page Not Found!</span></h1>
        <Link href='/' className='text-blue-1100  px-6 py-2.5 rounded-xl hover:underline'>Go to Home</Link>
        </div>
  )
}

export default NotFoundPage