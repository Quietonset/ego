import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'

const FAQ = () => {
    const FAQ = [
        {id: 1, question: 'How do I set budget?', answer: 'Lorem ipsum simer dolor amet.'},
        {id: 2, question: 'How do I track expenses?', answer: 'You can use our budgeting feature to track expenses.'},
        {id: 3, question: 'What is a budget?', answer: 'A budget is a plan for managing your finances.'},
        {id: 4, question: 'Why is saving important?', answer: 'Saving ensures financial stability and future readiness.'},
        {id: 5, question: 'How do I reduce spending?', answer: 'Focus on cutting unnecessary expenses.'},
    ];

    const [ openQuestionId, setOpenQuestionId ] = useState(null);

    const toggleFAQ = (id) => {
        setOpenQuestionId(openQuestionId === id ? null : id)
    }
    

  return (
    <div className='bg-[#90f56c] flex justify-center items-center sm:h-[630px] md:h-[560px] lg:h-[580px] xl:h-[580px] 2xl:h-[600px]' id='faq'>
      <div className='flex sm:flex-col sm:gap-y-5 md:gap-x-10 lg:gap-x-6 xl:gap-x-4 2xl:gap-x-4 h-[480px] sm:w-full sm:px-3'>
        <h1 className='font-semibold sm:text-4xl text-7xl sm:pl-0 md:pr-10 lg:pl-5 xl:pl-10 2xl:pl-12 text-[#4040d9] sm:text-center xl:w-[500px]'>FAQ</h1>
        {/* FAQ */}
        <div className='flex flex-col gap-y-3 md:w-[400px] xl:w-[500px]'>
            {FAQ.map((card) => {
                return (
                        <div
                        key={card.id}
                        onClick={() => toggleFAQ(card.id)}
                        className={`${ openQuestionId === card.id ? 'h-28' : 'h-20'} transition-all duration-300 rounded-3xl border h-20 w-full bg-[#fffaff] py-8 px-6 border-[#4040d9] hover:cursor-pointer`} 
                        >
                            <div className='flex justify-between items-center sm:text-sm'>
                                <p>{ card.question }</p>
                                <FaPlus className={`transform transition-transform duration-200 ${ openQuestionId === card.id && 'rotate-45 text-gray-700'} hover:text-gray-600 hover:cursor-pointer text-lg`}/>
                            </div>
                            {openQuestionId === card.id && (
                                <div className={`pt-2 text-gray-600 ${openQuestionId ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                                    {card.answer}
                                </div>
                            )}
                        </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default FAQ
