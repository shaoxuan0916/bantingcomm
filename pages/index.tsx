import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Contact from '../components/Contact'
import Products from '../components/Products'
import Reviews from '../components/Reviews'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Banting Communications (M) Sdn Bhd｜Walkie-Talkie
          Malaysia｜IRadio｜Mytetra｜Two-Way Radio Systems｜Telemetry
          Systems｜Telephony &amp; Contact centre solutions｜Paging Systems
        </title>
        <meta
          content="For many years, Banting Communications (M) Sdn Bhd has successfully developed, deployed and supported turnkey telecommunication systems. Our business strategy is to deliver solutions that are flexible and adaptable.｜Walkie-Talkie Malaysia｜IRadio｜Mytetra｜bantingcomm.com.my"
          name="description"
        ></meta>

        <meta
          content="bantingcomm.com.my｜Walkie-Talkie Malaysia｜IRadio｜Mytetra｜Two-Way Radio Systems｜Telemetry Systems｜Telephony &amp; Contact centre solutions｜Paging Systems"
          property="og:title"
        ></meta>
        <meta
          content="For many years, Banting Communications (M) Sdn Bhd has successfully developed, deployed and supported turnkey telecommunication systems. Our business strategy is to deliver solutions that are flexible and adaptable.｜Walkie-Talkie Malaysia｜IRadio｜Mytetra｜bantingcomm.com.my"
          property="og:description"
        ></meta>
        <meta
          content="bantingcomm.com.my｜Walkie-Talkie Malaysia｜IRadio｜Mytetra｜Two-Way Radio Systems｜Telemetry Systems｜Telephony &amp; Contact centre solutions｜Paging Systems"
          property="twitter:title"
        ></meta>
        <meta
          content="For many years, Banting Communications (M) Sdn Bhd has successfully developed, deployed and supported turnkey telecommunication systems. Our business strategy is to deliver solutions that are flexible and adaptable.｜Walkie-Talkie Malaysia｜IRadio｜Mytetra｜bantingcomm.com.my"
          property="twitter:description"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <HeroSection />
      <Products />
      {/* <Reviews /> */}
      <Contact />
    </div>
  )
}

export default Home
