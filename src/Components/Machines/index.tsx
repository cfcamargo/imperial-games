import { useTranslation } from "react-i18next";
import Machine1 from "../../assets/machine1.png";
import Machine2 from "../../assets/machine2.png";
import { MachineSlider } from "./MachineSlider";

export function Machines() {

  const { t } = useTranslation()

  return (
    <section id="machines" className="containeer py-20">
      <div className="w-full grid xs:grid-cols-1 md:grid-cols-2">
        <div className="flex xs:justify-center md:justify-start">
          <img src={Machine1} />
        </div>

        <div className="flex flex-col gap-6 justify-center xs:items-center md:items-end">
          <h3 className="text-2xl text-dark-yellow font-bold md:mt-0 xs:mt-8">
            {t("machines.title")}
          </h3>

          <p className="w-full max-w-[400px] xs:text-center md:text-right text-white">
            {t("machines.text1")}
          </p>
        </div>
      </div>
      <div className="w-full grid xs:grid-cols-1 md:grid-cols-2 mt-4">
        <div className="flex flex-col gap-6 justify-center xs:items-center md:items-start">
          <p className="w-full max-w-[400px] xs:text-center md:text-left text-white">
          {t("machines.text2")}
          </p>
        </div>

        <div className="flex xs:justify-center md:justify-end xs:mt-10 md:mt-0">
          <img src={Machine2} />
        </div>
      </div>

      <div className="flex xs:flex-col md:flex-row gap-2 mt-16">
        <div className="xs:w-full md:w-2/6 flex flex-col gap-6 justify-center xs:items-center md:items-start pr-8">
          <h3 className="text-3xl text-white">{t("machines.carouselTitle")}</h3>
          <p className="text-white xs:text-center md:text-left">
            {t("machines.carouselText")}
          </p>
        </div>
        <div className="xs:w-full md:w-4/6 xs:mt-8 md:mt-0">
          <MachineSlider />
        </div>
      </div>
    </section>
  );
}
