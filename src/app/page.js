import Image from 'next/image'
import HomeNavbar from './components/HomeNavbar'
import Banner from './components/Banner'
import CarVideoSection from './components/CarVideoSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="">
    <HomeNavbar />
    <Banner />
    <CarVideoSection />
    <Footer />
      hello cab
    </main>
  )
}
