import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import br from '../../assets/bandeiras/brasil.svg'
import py from '../../assets/bandeiras/paraguai.svg'
import us from '../../assets/bandeiras/usa.svg'



const languageOptions = [
  {
    "name" : "Español",
    "value" : "es",
    "ico" : py
  },
  {
    "name" : "Portugues",
    "value" : "ptBR",
    "ico" : br
  },
  {
    "name" : "English",
    "value" : "en",
    "ico" : us
  }
]


export function LanguageSwitcher() {

  const { i18n } = useTranslation()

  const [modalIsOpen, setModalIsOpen] = useState(true)

  return (
    <div>
      {
        modalIsOpen ? (
          <div className='fixed bg-black w-full h-screen top-0 left-0 z-50 bg-opacity-90'>
              <div className='flex flex-col justify-center items-center h-screen'>
                <div className='flex gap-10 mt-10'>
                  {
                  languageOptions.map((languageOption) => (
                    <button className='flex p-4 items-center gap-4 border border-transparent hover:border-dark-yellow rounded'
                      key={languageOption.name}
                      onClick={() => {
                        i18n.changeLanguage(languageOption.value);
                        setModalIsOpen(false)
                      }}
                    >
                      <img src={languageOption.ico} className="w-16 h-16"/>
                      <span className='text-dark-yellow'>{languageOption.name}</span>
                    </button>
                  ))
                  }
                </div>

              </div>
          </div>
        ) : ''
      }
    </div>
  )
}