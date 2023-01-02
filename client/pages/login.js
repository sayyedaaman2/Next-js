import Head from 'next/head'
import Layout from '../layout/layout'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { useState } from 'react';
import { signIn, signOut } from "next-auth/react"


import { useRouter } from 'next/router';


export default function Login(){

    const [show, setShow] = useState(false)
    const router = useRouter()
 

    // Google Handler function
    async function handleGoogleSignin(){
        signIn('google', { callbackUrl : "http://localhost:3000"})
    }

   

    return (
        <Layout>

        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5'>
               
                <div className="input-button">
                    <button type='button' onClick={handleGoogleSignin} className={styles.button_custom}>
                        Sign In with Google <Image src={'/assets/google.svg'} width="20" height={20} ></Image>
                    </button>
                </div>
                
            </form>
        </section>

        </Layout>
    )
}