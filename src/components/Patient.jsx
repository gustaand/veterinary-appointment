import React from 'react'

const Patient = ({ patient, setPatient, deletePatient }) => {

  const { name, owner, email, date, symptoms, id } = patient

  const handleDelete = () => {
    const answer = confirm('Do you want to delete this patient?')

    if (answer) {
      deletePatient(id)
    }
  }

  return (
    <div className='md:m-5 mb-4 bg-white shadow-md px-5 py-10 rounded-xl'>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        pet name: {""}
        <span className='font-normal normal-case'>{name}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        owner name: {""}
        <span className='font-normal normal-case'>{owner}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        email: {""}
        <span className='font-normal normal-case'>{email}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        discharge date: {""}
        <span className='font-normal normal-case'>{date}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        symptoms: {""}
        <span className='font-normal normal-case'>
          {symptoms}
        </span>
      </p>

      <div className='flex justify-between mt-10'>
        <button
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
          type='button'
          onClick={() => setPatient(patient)}
        >Edit</button>

        <button
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
          type='button'
          onClick={handleDelete}
        >Delete</button>
      </div>

    </div>
  )
}

export default Patient