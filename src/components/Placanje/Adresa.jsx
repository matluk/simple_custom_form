export default function Adresa({ register, errors }) {
  return (
    <>
      <p className="p_adresa">Adresa</p>
      <div className="adresa">
        <div className="form-group">
          <label htmlFor="imeprezime" className="form-label">
            Ime i prezime:
          </label>
          <input
            id="imeprezime"
            className="form-control"
            name="Ime i prezime"
            {...register("Ime i prezime", {
              required: "Obavezno unesite Vaše ime i prezime!",
              pattern: {
                value: /([a-zA-Z]+\s)+[a-zA-Z]+/,
                message: "Ime i prezime nije valjano!",
              },
            })}
          />
          {errors["Ime i prezime"] && (
            <span className="non_valid">{errors["Ime i prezime"].message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="drzava"> Država:</label>
          <select
            id="drzava"
            className="form-select"
            name="Država"
            {...register("Država", {
              required: "Odaberite odgovarajuću državu!",
            })}
          >
            <option value="">- Odaberi -</option>
            <option value="Hrvatska">Hrvatska</option>
            <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
            <option value="Slovenija">Slovenija</option>
            <option value="Crna Gora">Crna Gora</option>
            <option value="Srbija">Srbija</option>
          </select>
          {errors["Država"] && (
            <span className="non_valid">{errors["Država"].message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="adresa" className="form-label">
            Adresa:
          </label>
          <input
            id="adresa"
            className="form-control"
            name="Adresa"
            {...register("Adresa", {
              required: "Obavezno unesite adresu!",
              minLength: {
                value: 6,
                message: "Adresa mora biti dulja od 6 karaktera!",
              },
            })}
          />
          {errors["Adresa"] && (
            <span className="non_valid">{errors["Adresa"].message}</span>
          )}
        </div>
      </div>
    </>
  );
}
