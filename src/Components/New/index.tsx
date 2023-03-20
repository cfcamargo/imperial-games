import { FormattedMessage } from 'react-intl';
import { VideoPlayer } from '../VideoPlayer';

export function New(){
    return (
        <div className="containeer py-20">
            <div className="flex flex-col items-center">
                <h3 className="text-center text-3xl font-bold text-dark-yellow">
                    <FormattedMessage id="new-title"/>
                </h3>
                <p className="mt-6 text-light-yellow font-bold">
                    <FormattedMessage id="new-text-1"/>
                </p>
                <p className="text-light-yellow">
                    <FormattedMessage id="new-text-2"/>
                </p>
            </div>

            <div className='my-20'>
                <VideoPlayer videoURL='https://youtu.be/AuV9zUziJes'/>
            </div>
        </div>
    )
}