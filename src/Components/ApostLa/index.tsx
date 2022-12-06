import aposts from '../../assets/apost.png'

export function Apostas(){
  return (
    <section className="containeer flex flex-col justify-center items-center gap-10 py-20">
      <img src={aposts} className="w-full max-w-[500px] px-4"/>

      <h3 className='text-dark-yellow text-3xl font-bold xs:text-center md:text-left'>Encuentre aca las mejores apostas deportivas</h3>

      <p className='text-white max-w-[600px] text-center'>Si usted es un apostador de experiencia o esta entrando en este mundo ahora, no se preocupe, CASINO IMPERIAL es el mejor lugar. Ofrecemos la mas diversa de opciones en apuestas deportivas, usted decide en quien quiere apostar.
      </p>
    </section>
  )
}