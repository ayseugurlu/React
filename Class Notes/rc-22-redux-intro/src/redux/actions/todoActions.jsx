export const ekle = (input) => ({
  type: "EKLE",
  payload: input,
});


export const sil=(gorev)=>({
    type: "SIL",
    payload: gorev
})

export const degistir=(id)=>({
  type:"DEGISTIR",
  payload: id
})