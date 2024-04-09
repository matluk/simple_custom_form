export default function NacinPlacanja({ register, errors }) {
  return (
    <fieldset className="nacin_placanja">
      <legend className="l_nacinplacanja">Način plaćanja:</legend>
      <div className="form-group">
        <div>
          <div>
            <input
              id="kartica"
              type="radio"
              name="Način plaćanja"
              value="Kartica"
              {...register("Način plaćanja", {
                required: "Odaberite način plaćanja",
              })}
            />
            <label htmlFor="kartica">Kartica</label>
          </div>
          <div>
            <input
              id="pouzece"
              type="radio"
              name="Način plaćanja"
              value="Pouzeće"
              {...register("Način plaćanja", {
                required: "Odaberite način plaćanja",
              })}
            />
            <label htmlFor="pouzece">Pouzeće</label>
          </div>
          {errors["Način plaćanja"] && (
            <span className="non_valid">
              {errors["Način plaćanja"].message}
            </span>
          )}
        </div>
      </div>
    </fieldset>
  );
}
