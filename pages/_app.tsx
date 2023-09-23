
import '@santech/styles/globals.css'
import type { AppProps } from 'next/app'

import ApplicationNavbar from "@santech/components/nav-item/nav-item"

import style from '@santech/styles/home.module.css';
import Footer from '@santech/components/footer/footer';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <section className={`grid grid-cols-3 justify-end shadow-md ${style.applicationNavcontainer}`}>
        <section className='col-span-2'>

        </section>
        <section className='header-container col-span-1'>
          <ApplicationNavbar />
        </section>
      </section>
      <main className={`grid grid-cols-12 ${style.pageContainer}`}>
        <section className="col-span-12">
          <Component {...pageProps} />
        </section>
      </main>
      <section>
        <Footer />
      </section>
    </>
  )
}
