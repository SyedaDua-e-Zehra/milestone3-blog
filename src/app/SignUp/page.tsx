import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <section className='overflow-x-hidden w-screen'>
        <div className='w-full h-[200px] bg-slate-200 mt-5'>
           <h1 className='text-[36px] font-bold'>My Account</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/latestposts"}>Posts</Link>
              <p className='text-blue-800'>My Account</p>
           </span>
        </div> 
        <section className='flex justify-center items-center mt-11 mb-11'>
        <div className='flex flex-col justify-center items-center border-[1px] border-solid border-black rounded-lg w-[544px] h-[474px] gap-3 msm:w-[400px] ssm:w-[340px] xsm:w-[280px]'>
            <h1 className='text-[32px] font-bold'>Sign Up</h1>
            <p className='text-[#9096B2]'>Please sign up using account detail bellow.</p>
            <input type="email" placeholder='Email Address' className='border-[1px] border-solid border-black h-[52px] w-[432px] msm:w-[300px] ssm:w-[300px] xsm:w-[240px] ' />
            <input type="password" placeholder='Password' className='border-[1px] border-solid border-black h-[52px] w-[432px] msm:w-[300px] ssm:w-[300px] xsm:w-[240px]' />
            <p>Forgot your password?</p>
            <button className='text-white bg-blue-800 w-[432px] h-[52px] msm:w-[300px] ssm:w-[300px] xsm:w-[240px]'>Sign Up</button>
        </div>
        </section>
    </section>
  )
}

export default Page