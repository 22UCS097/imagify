import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-col justify-center 
      items-center text-center my-20'>
       <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1
        rounded-full border border-neutral-500  ">
        <p>Best text to image generator</p>      
       </div>
        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] 
             mx-auto mt-10 text-center'>
            Turn to text to <span className='text-blue-600'> image</span>, in seconds.
            </h1>
            <p className='text-center max-w-xl mx-auto mt-5'>
                Unleash your creativity with AL. Turn your 
                imagination into visual art in secoond - just type, and watch the magic happen
            </p>
            {/* <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-4 rounded-full '>
                Generate Images
                <img className='h-6' src="https://media.istockphoto.com/vectors/photo-icon-on-black-background-black-flat-style-vector-illustration-vector-id1169954465?k=6&m=1169954465&s=170667a&w=0&h=X29kwgBSvAfpJ-lzf_Yg55EXz-UM4POjUwnv6sOBBYY=" alt="" />
            </button> */}
            <div className="">

            </div>
    </div>
  )
}
