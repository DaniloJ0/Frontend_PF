import React from "react";
import "../InfoPageMain/infoPageMain.css";
import lupaIcon from "../../img/lupa_24.png";
import AccHoraDia from "../../data/Charts/AccHoraDia";
import "./contentLugares.css";
import HeridosDiurnoNocturno from "../../data/Charts/Lugares/HeridosDiurnoNocturno";
import MuertosDiurnoNocturno from "../../data/Charts/Lugares/MuertosDiurnoNocturno";
import PromHeridosMeteorologico from "../../data/Charts/Lugares/PromHeridosMeteorologico";
import MuertosGeometria from "../../data/Charts/Lugares/MuertosGeometria";
import HeridosGeometria from "../../data/Charts/Lugares/HeridosGeometria";
import AccidenteCatgMuertes from "../../data/Charts/Lugares/AccidenteCatgMuertes";
import imgEnvigado_1 from "../../img/img_charts/img_envigado1.png";
import imgEnvigado_2 from "../../img/img_charts/img_envigado2.png";

function ContentLugares() {
  return (
    <div className="main">
      <div className="lupa">
        <img src={lupaIcon} alt="" />
      </div>
      <div className="contentInfo" id="tipoAcc">
        Analisis de accidentalidades en el otros lugares
      </div>
      <hr />
      <p>
        Estos datos fueron extraidos de toda Colombia desde el año 2012 a la
        actualidad.
      </p>
      <div className="contenido">
        <section className="sectiones">
          <div className="graphStart">
            <div className="graphs-1">
              <HeridosDiurnoNocturno />
            </div>
            <div className="graphs-1">
              <MuertosDiurnoNocturno />
            </div>
          </div>
          <p>
            Los graficos muestran la cantidad de heridos y muertos en los
            horarios diurnos y nocturnos, se puede observar que los accidentes
            diurnos tienen mayor cantidad heridos, sin embargo, los nocturnos
            tienen una mayor tasa de mortalidad. Esto puede deberse a factores
            como la poca visibilidad la cual reduce el tiempo de reaccion de los
            conductores en el tiempo de frenado por ejemplo por lo que esto
            podria aumentar la mortalidad de los accidentes.
            <br />
            <br />
            En este caso, seutilizó el análisis de chi-cuadrado para evaluar la
            relación entre las variables "Diurno/Nocturno" y "Gravedad" en los
            accidentes.
            <br />
            <br />
            Estadístico chi-cuadrado: 285.6129116059519 <br />
            Valor p:1.2387495118410036e-59
            <br />
            <br />
            Dado que el valor p es extremadamente bajo, podemos concluir que
            existe una asociación altamente significativa entre las variables
            "Diurno/Nocturno" y "Gravedad". Esto significa que las categorías de
            "Diurno/Nocturno" están relacionadas de manera no aleatoria con las
            categorías de "Gravedad". En otras palabras, el hecho de que un
            accidente ocurra durante el día o la noche tiene una influencia
            significativa en la gravedad del accidente.
          </p>
        </section>
        <section className="p-1">
          <div className="graph1">
            <PromHeridosMeteorologico />
          </div>
          <p>
            El granizo representa un factor de riesgo significativo en la
            ocurrencia de accidentes con heridos. Su presencia en las vías puede
            afectar la visibilidad, la tracción de los vehículos y la capacidad
            de respuesta de los conductores, aumentando así la probabilidad de
            accidentes y lesiones. <br />
            <br />
            Es necesario tomar medidas especiales de precaución y seguridad
            cuando se presentan condiciones de granizo. Esto puede incluir
            reducir la velocidad, aumentar la distancia entre vehículos,
            utilizar luces intermitentes y seguir las indicaciones de las
            autoridades de tránsito.
            <br />
            <br />
            Se debe mejorar la conciencia y la educación vial sobre cómo manejar
            en condiciones de granizo. Los conductores deben estar informados
            sobre las mejores prácticas de conducción y las medidas de seguridad
            específicas para enfrentar este tipo de condiciones climáticas
            adversas.
          </p>
        </section>
        <p className="contentInfo">
          Geometría de la vía del accidente
          <hr />
        </p>
        <section className="sectiones sect-2">
          <div className="graphStart">
            <div className="graphs-1">
              <MuertosGeometria />
            </div>
            <div className="graphs-1">
              <HeridosGeometria />
            </div>
          </div>
          <p>
            La geometría de la vía juega un papel importante en la gravedad de
            los accidentes. Independientemente de si hay muertos o heridos,
            ciertos tipos de geometría de la vía parecen tener un impacto
            similar en la cantidad de víctimas. <br />
            <br />
            Factores inherentes a ciertos tipos de geometría de la vía pueden
            aumentar el riesgo de accidentes graves. Por ejemplo, curvas
            pronunciadas, intersecciones peligrosas o tramos de vía estrechos
            pueden contribuir a la gravedad de los accidentes.
            <br />
            Las medidas de seguridad y prevención deben enfocarse en mejorar la
            infraestructura vial en áreas identificadas como más peligrosas en
            términos de geometría. Esto podría incluir mejoras en señalización,
            cambios en el diseño de la vía o implementación de medidas de
            control de velocidad.
            <br />
            <br />
            Es importante considerar la geometría de la vía al planificar y
            diseñar nuevas vías o al realizar mejoras en las vías existentes. La
            atención a los detalles de la geometría puede contribuir a la
            reducción de accidentes graves y a mejorar la seguridad vial.
          </p>
          <div className="graphStart">
            <div className="graphs-1">
              <AccidenteCatgMuertes/>
            </div>
            <div className="graphs-1">
              <HeridosGeometria />
            </div>
          </div>
        </section>
        <p className="contentInfo">
          Análisis de accidentalidades en Envigado
          <hr />
        </p>
        <section className="sectiones sect-2">
          <div className="graphStart">
            <div className="graphs-1">
              <img src={imgEnvigado_1} alt="" />
            </div>
            <div className="graphs-1">
              <img src={imgEnvigado_2} alt="" />
            </div>
          </div>
          <p>
            Al analizar los datos de la gravedad de los accidentes según los
            días de la semana, se pueden observar algunas tendencias
            interesantes. En primer lugar, los accidentes ocurren con mayor
            frecuencia los días laborables (de lunes a viernes), lo que sugiere
            que el tráfico y la congestión en la ciudad pueden ser factores
            contribuyentes. Además, los accidentes que resultan en solo daños
            parecen ser más comunes que los que resultan en heridos o muertos,
            lo que podría indicar que los conductores en general están teniendo
            más precaución y evitando accidentes más graves. En cuanto a la
            distribución de la gravedad de los accidentes por día de la semana,
            se puede observar que los domingos son el día de la semana con menos
            accidentes, aunque los accidentes que ocurren en este día parecen
            ser más graves en promedio. Los jueves, por otro lado, parecen ser
            el día de la semana con más accidentes graves en general, con un
            número significativamente mayor de heridos y muertos en comparación
            con otros días de la semana. Teniendo en cuenta esta información, se
            podrían tomar medidas para reducir los accidentes graves en ciertos
            días de la semana, como aumentar la presencia policial los jueves
            para hacer cumplir mejor las leyes de tráfico. Además, podría ser
            útil analizar las causas de los accidentes más comunes en días
            laborables para identificar los puntos críticos en la ciudad donde
            se necesitan medidas de seguridad adicionales. En resumen, esta
            tabla de contingencia proporciona información valiosa para tomar
            decisiones informadas sobre la seguridad vial en la ciudad.
          </p>
        </section>
      </div>
    </div>
  );
}

export default ContentLugares;
