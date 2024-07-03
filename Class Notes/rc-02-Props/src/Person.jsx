import Message from "./Message";


const Person = (props) => {

    //!destructing
    const {name, img, tel} = props;

    console.log(props);
  return (
    <div>
        <h1>{name}</h1>
        <img src={img} alt="" />
        <p>{tel}</p>




<Message isim={name} telefon={tel}/>
    </div>
  )
}

export default Person