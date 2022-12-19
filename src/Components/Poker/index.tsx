import { useTranslation } from 'react-i18next'
import poker1 from '../../assets/poker1.png'
import poker2 from '../../assets/poker2.png'

export function Poker(){

  const { t } = useTranslation()

  return (
    <section id="poker" className='py-10'>

      <div id="poker-banner" className="w-full border-t-2 border-dark-yellow h-[calc(100vh_-_80px)] bg-poker-bg bg-cover bg-bottom">
          <div className="w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
            <h3 className="font-bold text-3xl text-dark-yellow">POQUER</h3>
          </div>
      </div>

      <div className="containeer pt-20">
        <div className="w-full flex xs:flex-col md:flex-row gap-">
          <div className='flex xs:justify-center md:justify-start'>
            <img src={poker1}/>
          </div>

          <div className='w-full md:justify-end flex flex-col gap-6 xs:justify-center xs:items-center md:items-end xs:mt-10 md:mt-0 xs:pl-0 md:pl-10'>
            <h3 className='text-2xl text-dark-yellow font-bold xs:text-center md:text-right'>
             {t("poker.title")}
            </h3>

            <h4 className='text-dark-yellow'>{t("poker.subtitle")}</h4>
            <p className='w-full max-w-[400px] xs:text-center md:text-right text-white'>
              {t("poker.texasHolden")}
            </p>

            <p className='w-full max-w-[400px] xs:text-center md:text-right text-white'>
              {t("poker.omaha")}
            </p>
          </div>
        </div>
        <div className="w-full grid xs:grid-cols-1 md:grid-cols-2 mt-4">
          <div className='flex flex-col gap-6 justify-center xs:items-center md:items-start'>
            <p className='w-full max-w-[400px] xs:text-center md:text-left text-white'>
              {t("poker.resume")}
            </p>
          </div>

          <div className='flex xs:justify-center md:justify-end xs:mt-10 md:mt-0'>
            <img src={poker2}/>
          </div>
        </div>
      </div>

    </section>
  )
}