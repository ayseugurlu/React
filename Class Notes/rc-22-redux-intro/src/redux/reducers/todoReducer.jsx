
const initial = {
  gorevler: [
    { id: 0, yazi: "Redux Çalışıyoruz", completed: false },
    { id: 1, yazi: "köpekleri gezdir", completed: true },
  ],
};

const todoReducer = (state=initial,{type,payload}) => {
  switch (type) {
    case "EKLE":
      return {gorevler: [...state.gorevler, {id:3,yazi:payload,completed:false}]}

    case "SIL":
      return {gorevler: state.gorevler.filter((item)=>item !== payload)}
      
      
  
    default:
      return state
  }
  
}

export default todoReducer