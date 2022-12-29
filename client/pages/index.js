import Head from "next/head";
import NavBar from "./components/NavBar";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <NavBar className="block" />
        <div className="  mx-auto h-screen my-auto flex justify-center items-center">
          <div className="h-1/4 w-1/3 bg-white p-4 border-2 border-black shadow-lg shadow-black rounded-xl max-w-full flex justify-center items-center ">
            
            <div className=" font-bold text-2xl max-h-full max-w-full">
              <Link href="/auth/signup" className="uppercase text-bold border-4 border-x-black  ">register</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
