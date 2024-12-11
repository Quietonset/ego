import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-[#fffaff] sm:py-16 py-32' id='about'>
      <h1 className='font-semibold sm:text-4xl text-7xl text-[#4040d9] text-center sm:mb-8 mb-16'>About us</h1>
      {/* grid box */}
      <div className='grid sm:grid-cols-1 sm:mx-5 grid-cols-3 gap-y-10 gap-x-20 mx-20'>
        <div className='sm:w-full w-[350px]'>
            <h3 className='font-semibold sm:text-base text-2xl text-[#2e2e2e] mb-4'>Empowering You to Take <br className='sm:hidden' />Charge of Your Finances</h3>
            <div className='sm:text-xs text-lg text-[#6e6e6e] flex flex-col gap-y-6'>
                <p>We at Ego believe that financial control shouldn't be a burden. That's why we created Ego, a user-friendly expense tracker designed to help you understand your spending habits and make smart financial decisions.</p>
                <p>Ego goes beyond just recording transactions. Our powerful yet easy-to-use budgeting tools empower you to set financial goals and effortlessly track your progress.</p>
            </div>
        </div>
        <div className='sm:w-full w-[350px]'>
            <h3 className='font-semibold sm:text-base text-2xl text-[#2e2e2e] mb-4'>With Ego, you can:</h3>
            <div className='sm:text-xs text-lg text-[#6e6e6e] flex flex-col gap-y-6'>
                <ul className='list-disc ml-5'>
                    <li>Effortlessly categorize your income and expenses</li>
                    <li>Set and monitor realistic budgets</li>
                    <li>Gain valuable insights into your spending patterns</li>
                    <li>Identify areas to save money</li>
                    <li>Forecast future expenses</li>
                </ul>
                <p>We are committed to providing you with the tools and resources you need to achieve financial wellness. Download Ego today and take charge of your financial future!</p>
            </div>
        </div>
        <div className='sm:text-xs text-lg text-[#6e6e6e] sm:w-full w-[350px]'>
            <h3 className='font-semibold sm:text-base text-2xl text-[#2e2e2e] mb-4'>Why the name Ego?</h3>
            <p>In many cultures, "Ego" refers to money or wealth. We chose this name to reflect our app's core function: empowering you to manage your finances with confidence.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
