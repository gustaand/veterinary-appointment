import Patient from './Patient'

const PatientsList = ({ patients, setPatient, deletePatient }) => {

  return (
    <div className={`md:w-1/2 lg:w-3/5 md:h-screen ${patients && patients.length ? 'overflow-y-scroll' : ''}`}>

      <h2 className='font-black text-3xl text-center'>Patients List</h2>

      <p className='text-xl mt-5 mb-10 text-center'>
        Manage Your {''}
        <span className='text-indigo-600 font-bold'>Patients and appointments</span>
      </p>

      {patients && patients.length ? (
        <div>
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </div>
      ) : (
        <div className='md:m-5 mb-4 px-5 py-10'>
          <h4 className='text-xl text-center text-gray-400'>there's no patient yet</h4>
        </div>
      )}

    </div>
  )
}

export default PatientsList