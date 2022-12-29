import Head from "next/head";
import Link from "next/link";
export default function signup() {
  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>
      <main>
        <div className=" h-full bg-slate-700 flex items-center justify-center">
          <div className=" min-h-fit h-auto min-w-fit w-96  border-cyan-400 border-2  shadow-white shadow-lg p-6 rounded-md">
            <div className="bg-slate-400 border-1 p-3  border-red-400 h-4/5 ">
              <form action="" className="bg-slate-400 h-full flex flex-col">
                <label htmlFor="username" className="px-4">
                  <b>Username</b>
                </label>
                <input type="text" className="m-2 px-4 py-1 rounded-md hover:bg-gray-600 hover:text-white focus:bg-red-100" placeholder="Enter your username" />
                <br />
                <label htmlFor="email" className="px-4">
                  <b>Email</b>
                </label>
                <input type="text" className="m-2 px-4 py-1 rounded-md hover:bg-gray-600 hover:text-white focus:bg-red-100" placeholder="Enter your Email" />
                <br />
                <label htmlFor="password" className="px-4">
                  <b>Password</b>
                </label>
                <input type="text" className="m-2 px-4 py-1 rounded-md hover:bg-gray-600 hover:text-white focus:bg-red-100" placeholder="Enter your Password" />
                <br />
                <label htmlFor="confirmPassword" className="px-4"></label>
                <input type="text" className="m-2 px-4 py-1 rounded-md hover:bg-gray-600 hover:text-white focus:bg-red-100" placeholder="Confirm Your Password" />
                <br />
                <br />
                <button type="submit" className="border-2 border-gray-900 shadow-slate-300 shadow-md bg-gray-600 text-white w-1/2  h-1/5 rounded-full py-1 uppercase font-bold mx-auto text-base">Submit</button>
              </form>
            </div>
            <div className="h-1/5 bg-slate-200 mt-4 p-4">
              <Link className=" hover:underline" href="/auth/login">
              <div className=" border-2 h-1/2 border-blue-300 flex shadow-slate-900 shadow-sm">

                <img className="w-12 h-12" src="https://icon-library.com/images/free-google-icon/free-google-icon-26.jpg" />
                <h2 className="h-12  bg-white w-full flex items-center text-bold">Continue With Google</h2>
              </div>
              </Link>
              <div className="h-1/2 text-sm px-3 py-1 ">
                <Link className=" hover:underline" href="/auth/login">I Have already Account</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
