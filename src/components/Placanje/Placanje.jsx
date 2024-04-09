import { useForm } from "react-hook-form";
import { useState } from "react";
import Kontakt from "./Kontakt";
import Adresa from "./Adresa";
import NacinPlacanja from "./NacinPlacanja";
import PrihvacamUvjeteNarudzbe from "./PrihvacamUvjeteNarudzbe";
import SazetakPodataka from "./SazetakPodataka";
import style from "./placanje.module.css";

export default function Placanje() {
  const {
    register,
    formState: { errors, isValid },
    getValues,
    handleSubmit
  } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmitHandler = async (event) => {
    //event.preventDefault();
    console.log(event); // Handle your form data here
    if (isValid) {
      setIsSubmit(true);
    }
  };

  return (
    <div className={style.app}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <span className="span">
          Račun --&gt; <b>Plaćanje</b>
        </span>
        <Kontakt register={register} errors={errors} />
        <Adresa register={register} errors={errors} />
        <NacinPlacanja register={register} errors={errors} />
        <PrihvacamUvjeteNarudzbe register={register} errors={errors} />
        <div className={style.btn_div}>
          <button type="submit" className={style.btn}>
            Naruči
          </button>
        </div>
        {isSubmit && (
          <SazetakPodataka
            isValid={isValid}
            errors={errors}
            formData={getValues()}
          />
        )}
      </form>
    </div>
  );
}
