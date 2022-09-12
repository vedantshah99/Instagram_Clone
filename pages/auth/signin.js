import React from 'react'
import {getProviders, signIn as signIntoProvider} from 'next-auth/react'
import Header from '../../components/Header'
//Running on Browser
function signIn({providers}) {
  
  return (
    <>
      <Header />
      <div className ='flex flex-col items-center justify-center min-h-screen py-2 -mt-36 text-center'>
        {/*Instagram Icon*/}
        <img className='w-80' src='https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png'/>

        {/*Sign in Button*/}
        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className = 'p-3 bg-blue-400 rounded-lg text-white' onClick={() => signIntoProvider(provider.id,{callbackUrl:'/'})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

//Serverside render
export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props:{
            providers,
        }
    }
}

export default signIn