import { About } from "../../Components/About";
import { Banner } from "../../Components/Banner";
import { Header } from "../../Components/Header";


export function Home() {
  return (
    <>
      <Header/>
      <main className="mt-[80px]">
        <Banner />
        <About />
        
      </main>
    </>
  )
}