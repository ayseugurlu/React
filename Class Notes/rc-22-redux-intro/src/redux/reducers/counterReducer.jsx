

//! action sayfasini simdilik buraya aldik ders anlatimi icin
export const arttir=()=>({type:"ARTTIR",payload1:"Arttirildi"})

export const azalt=()=>({type:"AZALT"})

export const sifirla=()=>({type:"SIFIRLA",payload1:"Sifirlandi"})


// const counterReducer = (state={sayac:0, text1:""},action1) => {
const counterReducer = (state={sayac:0, text1:""},{type,payload1}) => {

  switch (type) {
    case "ARTTIR":
      return {sayac:state.sayac+1, text1:payload1}
    case "AZALT":
      return {sayac:state.sayac-1}
    case "SIFIRLA":
      return {sayac:0, text1: payload1}
      
  
    default:
      return state
    
  }

}

export default counterReducer