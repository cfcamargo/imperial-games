import { FormattedMessage } from 'react-intl';
import news1Img from '../../assets/news1.png'
import news2Img from '../../assets/news2.png'
import news3Img from '../../assets/news3.png'

export function New(){
    return (
        <div className="containeer py-20">
            <div className="flex flex-col items-center">
                <h3 className="text-center text-3xl font-bold text-dark-yellow">
                    <FormattedMessage id="news-container-title"/>
                </h3>

                <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-4 py-10'>
                    <img src={news1Img} alt="" className='w-full object-cover aspect-[2/3]'/>
                    <img src={news2Img} alt="" className='w-full object-cover aspect-[2/3]'/>
                    <img src={news3Img} alt="" className='w-full object-cover aspect-[2/3]'/>
                </div>

            </div>
        </div>
    )
}