import React from "react";
import "./AboutComponent.scss";
const AboutComponent = () => {
  return (
    <div className="AboutComponent" id="Մեր մասին" >
      <div className="container">
        <div className="leftImages">
          <div className="aboutImage">
            <img src="/images/AboutImage.png" alt="AboutImage" />
          </div>
          <div className="aboutLogo">
            <img src="/images/ShunchLogo.png" alt="AboutImage" />
          </div>
        </div>

        <div className="rightText">
          <p className="title">Մեր մասին</p>
          <p className="text1">
            Շուրջ 15 տարի է Շունչ յոգայի կենտրոնի <strong>Եղիր Հրեշտակ</strong>
            նախաձեռնությունը մի նպատակի շուրջ է համախմբում բոլոր նրանց, ովքեր
            ցանկանում են մեկ օրով դառնալ հրեշտակ և իրականացնել երեխաների
            անհավանական <br/> <i> թվացող երազանքները։</i> 
          </p>
          <p className="text2">
           Հարցերի դեպքում զանգահարել ՝
            098/010 539964 <br/>  Սիրով՝ Շունչ
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
