/*eslint-disable*/

import React, { useEffect, useState } from "react";
import "./CartTransferTwo.scss";
import { addBenevolentData } from "../../Store/Action/BenevolentAction";
import Swal from "sweetalert2";
import { CSpinner } from "@coreui/react";


const CartTransferTwo = ({ setBuyModal, setBuyModal1, setSuccsses, inputVal, childID, setInputVal }) => {
  const [error, setError] = useState('')
  const [loading,setLoading] = useState(false)



  useEffect(() => {
    if (!error?.message && error === 'ok') {
      setSuccsses(true);
      setInputVal({
        child_id: -1,
        name: "",
        surName: "",
        phoneNumber: "",
        mail: "",
      })
    } else if (error?.message) {
      if (error?.response?.status < 200 || error?.response?.status >= 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Որևէ սխալ կա փորցեք կրկին",
          showConfirmButton: false,
          timer: 2500
        }).then((res) => {
          setInputVal({
            child_id: -1,
            name: "",
            surName: "",
            phoneNumber: "",
            mail: "",
          })
          setError("")
        })
      }
    }

  }, [error])






  async function saveData() {
    await addBenevolentData(inputVal, setError,setLoading)
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
              <button disabled={loading} type="submit" className="saveBtn" onClick={() => { saveData() }} >
              {!loading?"Հաստատել":<CSpinner color="primary" />}

              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTransferTwo;
