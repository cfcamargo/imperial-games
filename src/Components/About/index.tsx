import '@vime/core/themes/default.css';

import { FormattedMessage } from 'react-intl';
import { VideoPlayer } from '../VideoPlayer';
import { AboutSlider } from './slider';


export function About(){

  return (
    <section id="about">
      <div className="containeer py-20">
        <h3 className="text-center text-3xl font-bold text-dark-yellow">
          <FormattedMessage id="about-title"/>
        </h3>
        <div className='my-20'>
          <VideoPlayer />
        </div>

        <div>
          <h3 className='text-center text-2xl mb-8 font-bold text-dark-yellow mx-auto'>
            <FormattedMessage id="about-missionTitle"/>
          </h3>
          <p className='text-center max-w-[500px] text-light-yellow mx-auto'>
            <FormattedMessage id="about-missionText"/>
          </p>
        </div>

        <div className='mt-8'>
          <AboutSlider />
        </div>
      </div>
    </section>
  )
}
