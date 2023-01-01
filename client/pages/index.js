import Head from "next/head";

import Link from "next/link";
import { useState } from "react";
import { getSession ,useSession } from "next-auth/react";
import Cookie  from 'cookie-js';

export default function Home() {
  const { data: session, status } = useSession();
  console.log('sessionuser ' ,session);
  console.log("statu",status);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {session ? User({ session }) : Guest()}
    </>
  );
}

//Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold>">Guset HomePage</h3>

      <div className="flex justify-center">
        <Link
          href={"/login"}
          className="mt-t px-10 py-1 rounded-sm bg-indigo-500 text-grey-50"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}

//Authorize User

function User({ session }) {
  async function SignOutHandler(){
    signOut('google', {callbackUrl: "http://localhost:3000/login"})
  }
  console.log("session",session)
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold>">Authorize User HomePage</h3>
      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500" onClick={SignOutHandler}>
          Sign Out
        </button>
      </div>
      {/* <div className="flex justify-center">
        <Link
          href={"/profile"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-100 text-grey-50"
        >
          Profile
        </Link>
      </div> */}
    </main>
  );
}

export async function getServerSideProps({req,res}){
  const {session, sessionID} = req;
  console.log("SESSION",session);
  console.log("SESSIONID",sessionID);

  if(!session){
    return{
      redirect:{
        destination : "/login",
        permanent : false
      }
    }
  }
  return{
    props: {session}
  }
}