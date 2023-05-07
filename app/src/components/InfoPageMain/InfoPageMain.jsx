import React from "react";
import "./infoPageMain.css";
import lupaIcon from "../../img/lupa_24.png";
import graph1 from "../../img/img_charts/barras_chart.png";


function InfoPageMain() {
  return (
    <div className="main">
      <div className="lupa"><img src={lupaIcon} alt="" /></div>
      <div className="contentInfo">Analisis de los datos obtenidos</div>
      <hr />
      <div className="graphsInfo">
        <div className="info-1">
          <div className="graph-1"><img src={graph1} alt="" /></div>
          <div className="text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi facilis id architecto deleniti ut repellat voluptates voluptatibus maxime labore et nisi sed vitae, nam unde assumenda quos perferendis. Nobis?
          Hic voluptatum asperiores, nostrum ducimus repudiandae voluptas porro vero architecto consequatur? Hic amet praesentium voluptatibus quidem quas dolor vero quaerat debitis. Et aperiam inventore eligendi laudantium exercitationem dignissimos ipsum tempore.
          Ut molestiae inventore facere, voluptatum hic nobis necessitatibus nam deserunt officia minima. Suscipit cum temporibus tenetur itaque voluptatum placeat. A itaque veniam accusamus culpa excepturi odit atque, aperiam maiores accusantium.
          Voluptatibus voluptatem esse voluptatum provident tempora dignissimos earum, sapiente ex natus quasi tenetur totam rerum magnam deserunt! Sit nemo, libero dignissimos provident a, id ipsum voluptas, nulla quo autem impedit!
          Doloribus nihil eum odio nisi inventore. Quam sunt quaerat omnis provident minima, quidem odio eos quia dicta beatae? Tempora reprehenderit sequi vitae delectus, officia minima inventore omnis quaerat hic voluptatem!</div>
        </div>
        <div className="info-2">
          <div className="text-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi facilis id architecto deleniti ut repellat voluptates voluptatibus maxime labore et nisi sed vitae, nam unde assumenda quos perferendis. Nobis?
          Hic voluptatum asperiores, nostrum ducimus repudiandae voluptas porro vero architecto consequatur? Hic amet praesentium voluptatibus quidem quas dolor vero quaerat debitis. Et aperiam inventore eligendi laudantium exercitationem dignissimos ipsum tempore.
          Ut molestiae inventore facere, voluptatum hic nobis necessitatibus nam deserunt officia minima. Suscipit cum temporibus tenetur itaque voluptatum placeat. A itaque veniam accusamus culpa excepturi odit atque, aperiam maiores accusantium.
          Voluptatibus voluptatem esse voluptatum provident tempora dignissimos earum, sapiente ex natus quasi tenetur totam rerum magnam deserunt! Sit nemo, libero dignissimos provident a, id ipsum voluptas, nulla quo autem impedit!
          Doloribus nihil eum odio nisi inventore. Quam sunt quaerat omnis provident minima, quidem odio eos quia dicta beatae? Tempora reprehenderit sequi vitae delectus, officia minima inventore omnis quaerat hic voluptatem!</div>
          <div className="graph-2"><img src={graph1} alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default InfoPageMain;
