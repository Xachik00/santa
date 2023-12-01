/*eslint-disable*/

import React, { useEffect, useState } from "react";
import "./CartTransferTwo.scss";
import { addBenevolentData } from "../../Store/Action/BenevolentAction";
import Swal from "sweetalert2";


const CartTransferTwo = ({ setBuyModal, setBuyModal1, setSuccsses, inputVal, childID, setInputVal }) => {
  const [error, setError] = useState('')
  useEffect(() => {
    if (!error?.message && error === 'ok') {
      setSuccsses(true);
    } else if (error?.message) {
      if (error?.response?.status < 200 || error?.response?.status >= 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Որևէ սխալ կա փորցեք կրկին",
          showConfirmButton: false,
          timer: 1500
        }).then((res) => {
          setInputVal({
            child_id: childID?.id,
            name: "",
            surName: "",
            phoneNumber: "",
            mail: "",

          })
        })
      }
    }

  }, [error])







  async function saveData() {
    await addBenevolentData(inputVal, setError)
  }

  return (
    <div className="CartTransferTwo">
      <div className="modal">
        <div className="container">

          <div className="conta">
            <div className="topBlock">
              <div className="btnBack" onClick={() => { setBuyModal(true); setBuyModal1(false) }} >
                <img src="/images/LeftVector.png" alt="BackIcon" />
              </div>
              <p className="topTitle">Գնել առցանց</p>
              <div className="close" onClick={() => setBuyModal1(false)} >
                <img src="/images/CloseIcon.png" alt="CloseIcon" />
              </div>
            </div>
            <div className="mainMod">
              <div>
                <p className="title">Անցեք հղումներից մեկով եվ գնեք նվերը</p>
                <div className="link">
                  <div dangerouslySetInnerHTML={{ __html: childID.letter }} />
                </div>
              </div>
              <button type="submit" className="saveBtn" onClick={() => { saveData() }} >
                Հաստատել
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTransferTwo;
