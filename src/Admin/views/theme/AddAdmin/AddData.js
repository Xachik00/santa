import React, {  useEffect, useState } from 'react';
import { Button, FormGroup, FormLabel, FormControl, } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import CIcon from '@coreui/icons-react';
import { cilPlus, } from '@coreui/icons';
import { addWish } from '../../../../Store/Action/WishAction';
import uploadImageHandleradd from '../../../../Store/Action/UploadImageAction';
import './AddData.scss';
import { Eddditor } from './LinkEditor';
import Swal from 'sweetalert2';

const AdminAddData = () => {
    const [santa, setSanta] = useState({
        age: "",
        letter: "",
        full_name: "",
        birth: "",
    });
    const [img, setImg] = useState('');
    const dispatch = useDispatch();
    const [error,setError] = useState({})
    
useEffect(()=>{
    if(error==='ok'){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Տվըալները հաջողությամբ հաստատվել են",
            showConfirmButton: false,
            timer: 1500
          });
    }
    if(error?.response?.status<200||error?.response?.status>=400){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Որևէ սխալ կա փորցեք կրկին",
            showConfirmButton: false,
            timer: 1500
          });
    }
},[error])
    async function addToSave(e) {
        e.preventDefault();
        try {
            const obj = {
                ...santa,
                image: img,
            };
            await dispatch(addWish(obj,setError));
            setSanta({
                age: "",
                letter: "",
                full_name: "",
                birth: "",
            });
            setImg("");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="AdminAddData">

            <div className="body">
                <form autoCapitalize="off">
                    <h1>Ավելացնել Ցանկություն</h1>
                    <FormGroup className="flex items-center justify-between w-[50%] upload-image-label">
                        <FormLabel htmlFor="addPersonImage">
                            Ավելացնել Նկար <CIcon icon={cilPlus} />
                        </FormLabel>
                        <div className="imageContainer">{img && <img src={img} alt="uploading now images" className="uploaded-image" />}</div>
                        <FormControl
                            style={{ display: 'none' }}
                            type="file"
                            name="addPersonImage"
                            id="addPersonImage"
                            onChange={(e) => {
                                dispatch(uploadImageHandleradd(e, setImg));
                            }}
                            accept="image/*"
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel htmlFor="fullname">Անուն Ազգանուն</FormLabel>
                        <FormControl
                            type="text"
                            id="fullname"
                            placeholder="Անուն Ազգանուն"
                            required
                            value={santa?.full_name}
                            onChange={(e) => setSanta({ ...santa, full_name: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="birth">Ծննդավայր</FormLabel>
                        <FormControl
                            type="text"
                            id="birth"
                            placeholder="Ծննդավայր"
                            required
                            value={santa?.birth}
                            onChange={(e) => setSanta({ ...santa, birth: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="age">Տարիք</FormLabel>
                        <FormControl
                            type="number"
                            id="age"
                            placeholder="Տարիք"
                            required
                            value={santa?.age}
                            onChange={(e) => setSanta({ ...santa, age: e.target.value })}
                        />
                    </FormGroup>


                    <FormGroup className='mt-5' >
                    <Eddditor value={santa} setValue={setSanta} />
                    </FormGroup>
                    <FormGroup className="button">
                        <Button color="primary" onClick={(e) => addToSave(e)}>
                            Ուղարկել
                        </Button>
                    </FormGroup>
                </form>
            </div>
        </div>
    );
};

export default AdminAddData;
