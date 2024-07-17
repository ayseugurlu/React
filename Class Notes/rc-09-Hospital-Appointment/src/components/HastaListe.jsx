import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const HastaListe = ({ hastalar, setHastalar, doktorlar }) => {
  return (
    <div>
      {hastalar.map((hasta) => (
        <div key={hasta.id}>
          {doktorlar.map((a) => a.doctorName === hasta.myDoctor && (
            <div
              className={hasta.isDone ? "trueStil" : "falseStyle"}
              onDoubleClick={() =>
                setHastalar(
                  hastalar.map((a) =>
                    a.id === hasta.id ? { ...a, isDone: !a.isDone } : a
                  )
                )
              }
            >
              {/* ilk önce hastalar dizisinde gezip 6 hastayı hasta name iyle bastırıyoruz, sonra onDoubleClick yaptığımız için hastalar dzisinde gezinme bitmiş oluyor, dolayısıyla onDoubleClick sonucu gelen setHastalar ile dizide yapacağım değişiklikte kimi tıkladığımı belirtmem gerekir. bu yüzden tamirci içinde hastalar da dolaşıp ekranda tıkladığım hasta mın id si ile dizide id si tutan hastanın, diğer bilgileri kalsın isDone ı, varolanın tersiyle değişsin */}
              <div>
                <h2>{hasta.text}</h2>
                <h4>{hasta.day}</h4>
                <h3>{hasta.myDoctor}</h3>
              </div>
              <div>
                <FaTimesCircle style={{ color: "red" }} />
              </div>
            </div>
      ))}
        </div>
      ))}
    </div>
  );
};

export default HastaListe;
