import '../styles/globals.css'

import { Provider } from "urql";
import { client, ssrCache } from '../lib/urql'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({Component, pageProps}) {
  
  return (
    <Provider value={client} >
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Provider>
  )
}


export default MyApp
