import '../style/index.css'
import Head from 'next/head'
import "./Homes.css"
import Peg1 from "./peg1"

export default function MyApp({ Component, pageProps }) {
  return(

<>
<Head>
  <title>ramzi</title>
   <link rel="shortcut icon" href="imag1.jpg" type="image/x-icon"/>

   </Head>

  <Component {...pageProps} />

  </>
  )
}
