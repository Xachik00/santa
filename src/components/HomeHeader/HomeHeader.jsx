import "./HomeHeader.scss"

const HomeHeader = ({setModal}) => {


  return (
    <div className='HomeHeader' style={{background:`url(/images/HomeHeaderBackground.png)`}} >
    <div className="container">
      <div className='contaRight' >
      <div className='title' >
        <p>Եղիր Հրեշտակ</p>
      </div>

      <div className="text">
        <p className='text1' >Ցանկանու՞մ եք մեկ օրով դառնալ հրեշտակ և իրականացնել երեխաների անհավանական թվացող երազանքները։ </p>
        <p className='text2' > Այս տարի ընտրել ենք Գեղարքունիքի մարզի Գանձակ, Ծաղկաշեն և Գեղարքունիք գյուղերի շուրջ 200 երեխաների։</p>
      </div>

      <div className="btn">
        <button onClick={()=>setModal(true)}>Եղիր Հրեշտակ</button>
      </div>
      </div>
      <div>

      

      </div>
      <div className='leftImage' >
        <img src="/images/leftImage.png" alt="left" />
      </div>
      

      </div>
      {/* <div className="centerImage">
        <img src='/images/deer.png' alt='deer' />
      </div> */}
    </div>
  )
}

export default HomeHeader
