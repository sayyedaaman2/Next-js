import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  console.log("_app loaded.")
  return <Component {...pageProps} />
}
