import { useTranslation } from 'react-i18next'
import aposts from '../../assets/apost.png'

import { FormattedMessage } from 'react-intl';


export function Apostas(){

  return (
    <section className="containeer flex flex-col justify-center items-center gap-10 py-20">
      <img src={aposts} className="w-full max-w-[500px] px-4"/>

      <h3 className='text-dark-yellow text-3xl font-bold xs:text-center md:text-left'>
        <FormattedMessage id="apostas-title"/>
      </h3>

      <p className='text-white max-w-[600px] text-center'>
        <FormattedMessage id="apostas-text"/>
      </p>
    </section>
  )
}