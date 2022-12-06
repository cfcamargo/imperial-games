import poker1 from '../../assets/poker1.png'
import poker2 from '../../assets/poker2.png'

export function Poker(){
  return (
    <section id="poker" className='py-10'>

      <div id="poker-banner" className="w-full border-t-2 border-dark-yellow h-[calc(100vh_-_80px)] bg-poker-bg bg-cover bg-bottom">
          <div className="w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
            <h3 className="font-bold text-3xl text-dark-yellow">Poker</h3>
          </div>
      </div>

      <div className="containeer pt-20">
        <div className="w-full flex xs:flex-col md:flex-row gap-">
          <div className='flex justify-start'>
            <img src={poker1}/>
          </div>

          <div className='flex flex-col gap-6 justify-center xs:items-center md:items-end xs:mt-10 md:mt-0 xs:pl-0 md:pl-10'>
            <h3 className='text-2xl text-dark-yellow font-bold xs:text-center md:text-right'>EL MEJOR POKER DE LA FRONTERA SE ENCUENTRA AQUI</h3>

            <h4 className='text-dark-yellow'>POQUER </h4>
            <p className='w-full max-w-[400px] xs:text-center md:text-right text-white'>
              Texas Holden: Es un juego de cartas para dos o mas jugadores, en el cual cada uno recibe dos cartas y puede ganar cada rodada de apuestas con la mejor combinacion de ellas.
            </p>

            <p className='w-full max-w-[400px] xs:text-center md:text-right text-white'>
            OMAHA : Juego de 5 cartas donde cada jugador gana con la mejor combinación de juego 
            </p>
          </div>
        </div>
        <div className="w-full grid xs:grid-cols-1 md:grid-cols-2 mt-4">
          <div className='flex flex-col gap-6 justify-center items-start'>
            <p className='w-full max-w-[400px] text-left text-white'>
            IMPERIAL GAMES Ofrece la mejor mesa de cash game de la frontera con un cacife inicial de R$ 100 Y nuestro omaha es de 5 a 25 trabado en el dealer Tambien es la unica mesa de cash de ofrece un pozo acumulado que crece dia a dia 
            </p>
          </div>

          <div className='flex justify-end xs:mt-10 md:mt-0'>
            <img src={poker2}/>
          </div>
        </div>
      </div>

    </section>
  )
}