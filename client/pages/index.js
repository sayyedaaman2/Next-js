import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSession, useSession, signOut } from "next-auth/react";
import axios from "axios";

export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  );
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link href={"/login"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign In
          </a>
        </Link>
      </div>
    </main>
  );
}

// Authorize User
function User({ session, handleSignOut }) {
  const [message, setMessage] = useState("");
  // const [allMessage,setAllMessage] = useState([]);
  async function sendMessage() {
    let response = await axios.post("http://localhost:8000/post", {
      email: session.user.email,
      name: session.user.name,
      image: session.user.image,
      content: message,
    });
    let data = response.data;
    console.log(data);
  }
  const image = session.user.image;
  // useEffect(()=>{
  //   setAllMessage();
  // })
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>
      <div className="w-full flex justify-center">
      <img   className="text-center rounded-full" src={session.user.image}  />
      </div>
      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
      <div className="">
        <form>
          <div>
            <label htmlFor="content">Message</label>
          </div>
          <div>
            <input type="text" onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type="submit" onClick={() => sendMessage()}>
            send
          </button>
        </form>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50"
        >
          Sign Out
        </button>
      </div>

      {/* <div className='flex justify-center'>
            <Link href={'/profile'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Profile Page</a></Link>
          </div> */}
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
