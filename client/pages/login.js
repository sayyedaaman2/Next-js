import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
export default function Login() {
  const [show, setShow] = useState(false);

  //google handler function
  async function handleGoggleSignin() {
    // await signIn()
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5">
          {/* login buttons */}

          {/* <div className="input-button">
            <button
              type="button"
              className={styles.button_custom}
              onClick={handleGoggleSignin}
            >
              Sign In with Google{" "}
              <Image src={"/assets/google.svg"} width="20" height={20}></Image>
            </button>
          </div> */}
         
          <div className="input-button">
            <Link href="/register" className={styles.button_custom}>
              Register{" "}
            </Link>
          </div>
          <div className="input-button">
            <Link href="/test" className={styles.button_custom}>
              Testing the Server side{" "}
            </Link>
          </div>
          <div className="input-button">
            <Link href="/auth/google" className={styles.button_custom}>
              Passport Oauth{" "}
            </Link>
          </div>
        </form>
      </section>
    </Layout>
  );
}
