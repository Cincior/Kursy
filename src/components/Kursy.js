import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';



function Kursy() {

  const [TablicaKursow, SetTablicaKursow] = useState([
    "Programowanie w C#",
    "Angular dla początkujących",
    "Kurs Django"
  ])

  const WyswietlInfo = () => {
    const ImieNazwisko = document.getElementById('nazwaUzytkownika').value;
    let NazwaKursu;
    let IndexKursu = document.getElementById('numerKursu').value;
    IndexKursu--;
    if (IndexKursu >= 0 && IndexKursu < TablicaKursow.length)
      NazwaKursu = TablicaKursow[IndexKursu];
    else
      NazwaKursu = "Nieprawidłowy numer kursu";
    console.log(ImieNazwisko + " " + NazwaKursu)
  }

  const DodajKurs = () =>
  {
    const Nazwa = document.getElementById('nazwaKursu').value
    SetTablicaKursow([...TablicaKursow, Nazwa]);
  }


  return (
    <div className='m-2'>
      <h2>Liczba kursów: {TablicaKursow.length}</h2>
      <ol>
        {
          TablicaKursow.map((kurs, index) =>
          (
            <li key={index}>{kurs}</li>
          ))
        }
      </ol>
      <form onSubmit={e => { e.preventDefault() }}>
        <div className='form-group'>
          <label htmlFor='nazwaUzytkownika'>Imię i nazwisko:</label>
          <input className='form-control' type={'text'} id='nazwaUzytkownika'></input>
        </div>
        <div className='form-group'>
          <label htmlFor='numerKursu'>Numer Kursu:</label>
          <input className='form-control' type={'text'} id='numerKursu'></input>
        </div>
        <button onClick={WyswietlInfo} className='btn btn-primary mt-3'>Zapisz do kursu</button>
      </form>
      <div className='mt-4'>
        <h3>Dodaj kurs:</h3>
        <form onSubmit={e => { e.preventDefault() }}>
          <div className='form-group'>
            <label htmlFor='nazwaUzytkownika'>Nazwa Kursu:</label>
            <input className='form-control' type={'text'} id='nazwaKursu'></input>
          </div>
          <button onClick={DodajKurs} className='btn btn-primary mt-3'>Dodaj</button>
        </form>
      </div>
    </div>
  );
}

export default Kursy;
