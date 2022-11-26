import '@vime/core/themes/default.css';
import { VideoPlayer } from '../VideoPlayer';
import { AboutSlider } from './slider';


export function About(){
  return (
    <section id="about">
      <div className="containeer py-20">
        <h3 className="text-center text-3xl font-bold text-dark-yellow">
          O Imperial Casino
        </h3>

        <div className='my-20'>
          <VideoPlayer />
        </div>

        <div>
          <h3 className='text-center text-2xl mb-8 font-bold text-dark-yellow mx-auto'>Sobre nos</h3>
          <p className='text-center max-w-[500px] text-light-yellow mx-auto'>Criado em 6 de março de 2015, com o missão de trazer as melhores experiencias para aqueles que gostam de se divertir e testar sua sorte.</p>
        </div>

        <div className='mt-8'>
          <AboutSlider />
        </div>
      </div>
    </section>
  )
}
