import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';

export default function Register(){

    const [show, setShow] = useState({ password: false, cpassword: false })

    return (
        <Layout>


        <Head>
            <title>Register</title>
        </Head>

        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5'>
                {/* login buttons */}
                <div className="input-button">
                    <button type='button' className={styles.button_custom}>
                        Sign up with Google <Image src={'/assets/google.svg'} width="20" height={20} ></Image>
                    </button>
                </div>
                
            </form>

            {/* bottom */}
            {/* <p className='text-center text-gray-400 '>
                Have an account? <Link href={'/login'}><a className='text-blue-700'>Sign In</a></Link>
            </p> */}
        </section>
        </Layout>
    )
}