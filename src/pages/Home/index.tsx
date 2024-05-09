import { About } from "../../Components/About";
import { Apostas } from "../../Components/ApostLa";
import { Banner } from "../../Components/Banner";
import { DivisorLine } from "../../Components/DivisorLine/DivisorLine";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Machines } from "../../Components/Machines";
import { New } from "../../Components/New";
import { Poker } from "../../Components/Poker";


export function Home() {
  return (
    <>
      <Header/>
      <main>
        <Banner />
        <New />
        <About />
        <DivisorLine />
        <Machines />
        {/* <Poker /> */}
        <DivisorLine />
        <Apostas />
        <Footer />
      </main>
    </>
  )
}