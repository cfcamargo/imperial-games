import br from '../../assets/bandeiras/brasil.svg'
import py from '../../assets/bandeiras/paraguai.svg'
import us from '../../assets/bandeiras/usa.svg'

export function LanguageSwitcher() {
  return (
    <div className='flex xs:gap-10 md:gap-2 xs:fixed md:static bottom-10 left-10'>
      <a href="/pt">
        <img src={br} className="xs:w-10 md:w-6"/>
      </a>
      <a href="/es">
        <img src={py} className="xs:w-10 md:w-6"/>
      </a>
      <a href="/en">
        <img src={us} className="xs:w-10 md:w-6"/>
      </a>
    </div>
    
  )
}