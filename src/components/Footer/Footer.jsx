import React from "react";
import "./Footer.scss";
const Footer = () => {
  const items = [
    {
      id: 1,
      title: "Գլխավոր էջ",
    },
    {
      id: 2,
      title: "Նամակներ",
    },
    {
      id: 3,
      title: "Մեր մասին",
    },
    {
      id: 4,
      title: "Հետադարձ կապ",
    },
  ];
  return (
    <div className="Footer">
      <div className="container">
        <div className="topBlock">
          <div className="ImageLogo">
            <img src="/images/logo.png" alt="WebSiteLogo" />
          </div>
          <div className="pages">
            {items?.map((el) => {
              return (
                <div key={el?.id} className="items">
                  <a href={"#" + el?.title}> {el?.title} </a>
                </div>
              );
            })}
          </div>
          <div className="social">
            <div className="socialLogo">
              <img src="/images/facebook.png" alt="facebook" />
              <img src="/images/telegram.png" alt="telegram" />
            </div>
            <p className="tel">
              Հեռ․ <a href="tel:+37498548267">+37498548267</a>
            </p>
            <p className="mail">
              Էլ․ հասցե <a href="Shoonch@gmail.com">Shoonch@gmail.com</a>
            </p>
          </div>
        </div>
        
      </div>
      <div className="lineHr" ></div>

        <div className="companyLogo" >
          <img className="logo1" src="/images/companyLogo.png" alt="companyLogo" />
          <img className="logo2" src="/images/myLogo.png" alt="companyLogo" />
        </div>
    </div>
  );
};

export default Footer;
