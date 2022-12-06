import Machine1 from "../../assets/machine1.png";
import Machine2 from "../../assets/machine2.png";
import { MachineSlider } from "./MachineSlider";

export function Machines() {
  return (
    <section id="machines" className="containeer py-20">
      <div className="w-full grid xs:grid-cols-1 md:grid-cols-2">
        <div className="flex justify-start">
          <img src={Machine1} />
        </div>

        <div className="flex flex-col gap-6 justify-center items-end">
          <h3 className="text-2xl text-dark-yellow font-bold md:mt-0 xs:mt-8">
            Nuestras Máquinas
          </h3>

          <p className="w-full max-w-[400px] xs:text-center md:text-right text-white">
            Máquinas de última generación con amplia gama de opciones, usted
            siempre tendra la seguridad de divertirse jugando en nuestro casino
            Colocamos toda nuestra energía para ofrecer el mejor servicio
            posible, y estamos mejorando continuamente nuestro sistema de
            gerenciamiento para garantirle el mejor atendimiento y llenar todas
            sus expectativas.
          </p>
        </div>
      </div>
      <div className="w-full grid xs:grid-cols-1 md:grid-cols-2 mt-4">
        <div className="flex flex-col gap-6 justify-center items-start">
          <p className="w-full max-w-[400px] xs:text-center md:text-left text-white">
          Ademas de brindarle las mejores máquinas de ultima generación, desenvolvemos constantemente nuestras instalaciones para que usted tenga el ambiente mas confortable y un servicio amigable donde pueda escoger entre una variedad inmensa de opciones y diferentes promociones, incluyendo CHOPP FREE para todos nuestros clientes para tornar su experiencia mas especial y divertida
          </p>
        </div>

        <div className="flex justify-end xs:mt-10 md:mt-0">
          <img src={Machine2} />
        </div>
      </div>

      <div className="flex xs:flex-col md:flex-row gap-2 mt-16">
        <div className="xs:w-full md:w-2/6 flex flex-col gap-6 justify-center items-start pr-8">
          <h3 className="text-3xl text-white">Inmenso numero de opciones</h3>
          <p className="text-white">
          El mejor motivo para visitarnos es el ambiente acogedor y el excelente servicio. Usted puede dar sus primeros pasos en nuestras maquinas, siendo algunas de ellas nuestras tan famosas maquinas de BINGO Y RODILLO Y LAS TAN ACLAMADAS LINK KING
          </p>
        </div>
        <div className="xs:w-full md:w-4/6">
          <MachineSlider />
        </div>
      </div>
    </section>
  );
}
