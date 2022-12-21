import Logo from '../../assets/logo.png';
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageSwitcher } from '../languageSwitcher';


export function Header(){
  const [isOpen, setOpen] = useState(false)

  window.addEventListener('resize', function () {
    var largura = window.innerWidth;
    console.log(largura)
    if (largura > 765) 
      setOpen(false)
  });
  

  return (
    <header className='w-full h-[80px] bg-dark-green shadow-sm sticky top-0 left-0 right-0 z-50' id='header-nav'>
      <div className="containeer mx-auto flex justify-between items-center py-2">
        <div>
          <img src={Logo} alt="" className='h-16'/>
        </div>

        <div className=''>
          <nav className={`
          xs:gap-16 flex md:gap-8 xs:items-end md:items-center xs:flex-col md:flex-row xs:w-[30vh] md:w-auto xs:h-[calc(100vh_-_80px)] md:h-auto bottom-0 right-0 ease-in-out duration-300 md:static xs:fixed bg-dark-green xs:py-16 md:py-0 xs:px-10 md:px-0
          ${isOpen ? 'translate-x-0 z-40' : 'xs:translate-x-full md:translate-x-0'}
          `}>
            <a href="#banner" className='text-dark-yellow hover:text-light-yellow' onClick={()=> {setOpen(false)}}><FormattedMessage id="menu-home"/></a>
            <a href="#about" className='text-dark-yellow hover:text-light-yellow' onClick={()=> {setOpen(false)}}><FormattedMessage id="menu-about"/></a>
            <a href="#machines" className='text-dark-yellow hover:text-light-yellow' onClick={()=> {setOpen(false)}}><FormattedMessage id="menu-machines"/></a>
            <a href="#contact" className='text-dark-yellow hover:text-light-yellow' onClick={()=> {setOpen(false)}}><FormattedMessage id="menu-contact"/></a>
            <div>
              <LanguageSwitcher/>
            </div>
          </nav>
          <div className='xs:flex md:hidden z-50'>
            <Hamburger toggled={isOpen} toggle={setOpen} color='#FDD708'/>
          </div>
        </div>
      </div>
    </header>
  )
}