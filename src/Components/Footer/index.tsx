import { FacebookLogo, InstagramLogo, MapPin, WhatsappLogo } from "phosphor-react";
import { useTranslation } from "react-i18next";
import Logo from '../../assets/logo.png'

export function Footer(){

  const { t } = useTranslation()

  return (
    <>
    <footer className="containeer">
        <div className="flex xs:flex-col md:flex-row gap-2 justify-between">
          <div className="w-full flex flex-col justify-center">
            <h3 className="flex flex-col gap-2 justify-center items-start text-dark-yellow text-3xl">
              {t('footer.contact')}
            </h3>

            <div className="flex flex-col gap-4 mt-10 justify-center">
              <a href="https://www.instagram.com/casinoimperialgames/" className="flex gap-2 items-center">
                <InstagramLogo size={32} weight="bold" color="#FDD708"/>
                <span className="text-dark-yellow">@casinoimperialgames</span>  
              </a>
              <a href="https://www.facebook.com/casinoimperialoficial" className="flex gap-2 items-center">
                <FacebookLogo size={32} weight="bold" color="#FDD708"/>
                <span className="text-dark-yellow">Casino Imperial Games</span>  
              </a>
              <a href="https://api.whatsapp.com/send/?phone=595975290486&text&type=phone_number&app_absent=0" className="flex gap-2 items-center">
                <WhatsappLogo size={32} weight="bold" color="#FDD708"/>
                <span className="text-dark-yellow">Whatsapp</span>  
              </a>
              <a href="https://goo.gl/maps/SQAXUwDxXzaJPbce9" className="flex gap-2 items-center">
                <MapPin size={32} weight="bold" color="#FDD708"/>
                <div className="flex flex-col">
                  <span className="text-dark-yellow">Dr Francia, Aquidabán Esquina</span> 
                  <span className="text-dark-yellow">Pedro Juan Caballero, Paraguay</span> 
                </div> 
              </a>
            </div>
          </div>

          <div className="w-full xs:mt-10 md:mt-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477.7282316531239!2d-55.733972450748475!3d-22.532589606974327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94626ee06c3aadc1%3A0xec53ca03020fab1!2sIMPERIAL%20GAMES!5e0!3m2!1sen!2sbr!4v1669997752866!5m2!1sen!2sbr" width="100%" height="450" loading="lazy"></iframe>
          </div>
        </div>
    </footer>
    <div className="pt-32 pb-10 items-center border-b-2 border-dark-yellow">
      <div className="containeer flex xs:flex-col md:flex-row justify-between">
        <div className="flex flex-col xs:items-center md:items-start text-sm text-dark-yellow">
          <span className="xs:text-center md:text-left">Imperial Games  Casino - {t("footer.copy")}</span>
          <span>2022</span>
        </div>

        <img src={Logo}  className="max-w-[100px] xs:mx-auto md:mx-0 xs:mt-10 md:mt-0"/>
      </div>
    </div>
    </>
  )
}