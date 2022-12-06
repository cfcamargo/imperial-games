import '@vime/core/themes/default.css';
import { VideoPlayer } from '../VideoPlayer';
import { AboutSlider } from './slider';


export function About(){
  return (
    <section id="about">
      <div className="containeer py-20">
        <h3 className="text-center text-3xl font-bold text-dark-yellow">
          El Imperial Casino
        </h3>

        <div className='my-20'>
          <VideoPlayer />
        </div>

        <div>
          <h3 className='text-center text-2xl mb-8 font-bold text-dark-yellow mx-auto'>Missión</h3>
          <p className='text-center max-w-[500px] text-light-yellow mx-auto'>Traer las mejores experiencias para aquellos que quieran
divertirse y probar su suerte.</p>
        </div>

        <div className='mt-8'>
          <AboutSlider />
        </div>
      </div>
    </section>
  )
}
