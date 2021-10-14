import  '../styles/globals.scss'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
       <AnimatePresence  exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}>
  <Component {...pageProps} />
  </AnimatePresence>
  </Layout>
  )
}
export default MyApp
