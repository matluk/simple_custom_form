import { useEffect, useState } from "react";
import Kontakt from "./Kontakt";
import Adresa from "./Adresa";
import NacinPlacanja from "./NacinPlacanja";
import PrihvacamUvjeteNarudzbe from "./PrihvacamUvjeteNarudzbe";
import SazetakPodataka from "./SazetakPodataka";
import style from "./index.module.css";

export default function Placanje() {
  const [formData, setFormData] = useState({
    "E mail": "",
    "Ime i prezime": "",
    Država: "",
    Adresa: "",
    "Način plaćanja": "",
    "Uvjeti narudžbe": "",
  });

  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeHandler = (event) => {

    if (event.target.name === "Uvjeti narudžbe") {

      let copy = { ...formData }

      if (event.target.checked) {
        copy["Uvjeti narudžbe"] = event.target.value;
      } else {
        copy["Uvjeti narudžbe"] = "";
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let err = {};

    if (formData["E mail"] === "") {
      err.email = "Unesite ispravan e-mail!";
    } else {
      let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(formData["E mail"])) {
        err.email = "Email nije valjan!";
      }
    }

    if (formData["Ime i prezime"] === "") {
      err.imeiprezime = "Obavezno unesite Vaše ime i prezime!";
    } else {
      let regex2 = /([a-zA-Z]+\s)+[a-zA-Z]+/;
      if (!regex2.test(formData["Ime i prezime"]))
        err.imeiprezime = "Ime i prezime nije valjano!";
    }

    if (formData["Država"] === "") {
      err.drzava = "Odaberite odgovarajuću državu!";
    }

    if (formData["Adresa"] === "") {
      err.adresa = "Obavezno unesite adresu!";
    } else if (formData["Adresa"].length < 6) {
      err.adresa = "Adresa mora biti dulja od 6 karaktera!";
    }
    if (formData["Način plaćanja"] === "") {
      err.nacinplacanja = "Odaberite željeni način plaćanja!";
    }
    if (formData["Uvjeti narudžbe"] === "") {
      err.uvjetinarudzbe = "Obavezno je prihvaćanje uvjeta narudžbe!";
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let isValid = validateForm();

    if (isValid) {
      setIsSubmit(true);
    } else if (formData["Uvjeti narudžbe"] === "") {
      alert("Morate prihvatiti uvjete narudzbe!");
    } else {
      alert("Invalid form!");
    }
  };

  return (
    <div className={style.app}>
      <form onSubmit={onSubmitHandler}>
        <span className="span">
          Račun --&gt; <b>Plaćanje</b>
        </span>
        <Kontakt
          onChangeHandler={onChangeHandler}
          formData={formData}
          formError={formError}
        />
        <Adresa
          onChangeHandler={onChangeHandler}
          formData={formData}
          formError={formError}
        />
        <NacinPlacanja
          onChangeHandler={onChangeHandler}
          formError={formError}
        />
        <PrihvacamUvjeteNarudzbe
          onChangeHandler={onChangeHandler}
          formData={formData}
          formError={formError}
        />
        <div className={style.btn_div}>
          <button className={style.btn}>Naruči</button>
        </div>
        <SazetakPodataka
          formError={formError}
          isSubmit={isSubmit}
          formData={formData}
        />
      </form>
    </div>
  );
}
