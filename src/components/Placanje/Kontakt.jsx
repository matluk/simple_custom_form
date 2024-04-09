export default function Kontakt({ register, errors }) {
  return (
    <div>
      <p className="p_kontakt">Kontakt</p>
      <div className="kontakt">
        <div className="form-group">
          <label htmlFor="kontaktMail">Email adresa:</label>
          <input
            id="kontaktMail"
            className="form-control"
            name="E mail"
            placeholder="Email adresa..."
            {...register("E mail", {
              required: "Unesite ispravan e-mail!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email nije valjan!",
              },
            })}
          />
          {errors["E mail"] && (
            <span className="non_valid">{errors["E mail"].message}</span>
          )}
        </div>
      </div>
    </div>
  );
}
