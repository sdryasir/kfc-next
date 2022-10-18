import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("../node_modules/bootstrap/dist/js/bootstrap.bundle");
  },[])
  return <Component {...pageProps} />
}

export default MyApp
