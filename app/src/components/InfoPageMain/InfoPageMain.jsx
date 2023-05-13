import React from "react";
import "./infoPageMain.css";
import lupaIcon from "../../img/lupa_24.png";
import graph1 from "../../img/img_charts/Cluster.png";
import AccHoraDia from "../../data/Charts/AccHoraDia";
import HeridosTipoAcc from "../../data/Charts/HeridosTipoAcc";
import MuerteTipoAcc from "../../data/Charts/MuerteTipoAcc";
import AccTipoVehiculo from "../../data/Charts/AccTipoVehiculo";
import InfraccionesTipo from "../../data/Charts/InfraccionesTipo";
import CantidadInfraccion from "../../data/Charts/CantidadInfraccion";

function InfoPageMain() {
  return (
    <div className="main">
      <div className="lupa">
        <img src={lupaIcon} alt="" />
      </div>
      <div className="contentInfo" id="tipoAcc">
        Analisis por tipos de accidentes
      </div>
      <hr />
      <div className="graphsInfo">
        <div className="p-1">
          <div className="graph1">
            <AccHoraDia />
          </div>
          <p>
            Podemos observar que hay una mayor cantidad de accidentes en las
            horas laborales, lo cual sugiere que el tráfico durante esas horas
            es más denso y esto aumenta la probabilidad de accidentes. Esto
            podría implicar que se necesiten medidas para mejorar la seguridad
            vial en las horas pico del tráfico. Aumentar la presencia de la
            autoridad de tráfico en las horas punta para mejorar la vigilancia y
            el control del tráfico podria promover una mayor seguridad vial.
          </p>
        </div>
        <div className="p-2">
          <p>
            La gráfica nos muestra que el tipo de accidente más común es el
            choque, seguido por el atropello. Esta información puede ser útil
            para enfocar los esfuerzos de prevención de accidentes en estos dos
            tipos de accidentes. Por ejemplo, se pueden mejorar las
            señalizaciones en las intersecciones y se pueden tomar medidas para
            reducir la velocidad de los vehículos, lo que podría reducir la
            cantidad de choques. También se pueden tomar medidas para mejorar la
            visibilidad de los peatones y para educar a los conductores sobre la
            importancia de ceder el paso a los peatones, lo que podría reducir
            la cantidad de atropellos.
          </p>
          <div className="graph2">
            <HeridosTipoAcc />
          </div>
        </div>
        <div className="p-1">
          <div className="graph1">
            <MuerteTipoAcc />
          </div>
          <p>
            Comparando las graficas de heridos y muertos podemos ver que el
            atropello es mucho más mortal que los choques teniendo en cuenta la
            proporcion de choques con atropellos. Esto es importante para
            enfocar los esfuerzos de prevención en el atropello, lo que podría
            implicar medidas más drásticas como la instalación de pasos
            peatonales elevados y la reducción de la velocidad de los vehículos
            en zonas con alta afluencia de peatones. También se pueden tomar
            medidas para mejorar la seguridad de los peatones, como la
            implementacion de semaforos con la funcionalidad de cambiar el color
            si hay peatones que vana cruzar la calle.
          </p>
        </div>
      </div>
      <div className="sectiones" id="analisisAcc">
        <div className="contentInfoGeneral">
          Analisis Tipo de vehículos y medidas
        </div>
        <hr />
      </div>
      <div className="secondSection">
        <div className="p-1">
          <div className="graph1">
            <AccTipoVehiculo />
          </div>
          <p>
            El tipo de vehículo particular es el que tiene la mayor cantidad de
            accidentes en la ciudad, lo que sugiere que los conductores
            particulares podrían estar incurriendo en prácticas de conducción
            inseguras o negligentes, siguiendolos de manera cercana es el
            público, lo que sugiere que los conductores de transporte público
            podrían estar también incurriendo en prácticas de conducción
            inseguras o negligentes. La cantidad de accidentes registrados para
            los otros tipos de vehiculos es insignificante.
          </p>
        </div>

        <div className="p-3">
          <div className="graph3">
            <InfraccionesTipo />
          </div>
          <div className="graph3">
            <CantidadInfraccion />
          </div>
        </div>

        <div className="p-4">
          <p>
            De las anteriores graficas podemos obener que la infracción más
            común es el exceso de velocidad, lo que sugiere que los conductores
            están incumpliendo las normas de velocidad establecidas en las vías
            y poniendo en riesgo la seguridad vial. El segundo tipo de
            infracción más común es el estacionamiento en sitios prohibidos y de
            tercera el volarse los semafotos, lo que nos permie concluir que los
            conductores no están respetando las señales de tráfico y las
            restricciones de estacionamiento en la ciudad. El estacionamiento en
            sitios prohibidos puede ser peligrosa ya que obstruye el paso de
            otros vehículos y peatones, lo que aumenta el riesgo de accidentes y
            volarse los semaforos es especialmente peligrosa ya que puede
            aumentar significativamente el riesgo de colisiones en
            intersecciones y poner en peligro la vida de los conductores y
            peatones Ante estas problematicas se podría considerar la
            implementación de medidas más rigurosas para el control de
            velocidad, tales como cámaras de velocidad, radares de velocidad,
            controles más frecuentes, entre otros.
          </p>
          <div className="graph1">
            <img src={graph1} alt="" />
          </div>
          <p>
            Esta grafica es la clusterizacion de las clases de vehiculos segun
            la cantidad de vehiculos de este tipo que sufrieron accidentes. Cada
            punto representa la cantidad de accidentes ocurridos en un mes en
            los ultimos 9 años. Podemos ver que se crearon 4 clusteres, si los
            analizamos en orden empezamos por el primer cluster (Morado) que nos
            muestra varias clases de vehiculos que rondan una media de
            accidentes alrededor de los 300 accidentes. El segundo cluster
            (Amarillo) nos presenta un grupo marginado que son el de las
            motocicletas ya que no se asemejan a ninguno de los otros vehiculos
            en cuestion de accidentes.El tercer cluster (Verde) nos muestra un
            grupo muy interesante ya que los datos son muy parecidos enre los
            buses que predominantemene son los buses de transporte publico y
            camiones de transporte de cargas, por ultimo el cuarto cluster
            (Azul) que nos muestra la gran diferencia en la cantidad de
            accidentes que presentan los auomoviles particulares esto debido en
            gran parte ya que son el el vehiculo con mas unidades en la ciudad
            pero tambien debido a que es uno de los vehiculos a la par que las
            motocicletas en la que obtencion de la licensia no requiero mucha
            expertisia por pare de los conductores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoPageMain;
