import { useState } from "react";

export default function Adresa({ onChangeHandler, formData, formError }) {
  const [didUserTypeOnce, setDidUserTypeOnce] = useState([false, false, false]);

  return (
    <>
      <p className="p_adresa">Adresa</p>
      <div className="adresa">
        <div className="form-group">
          <label htmlFor="imeiprezime" className="form-label">
            Ime i prezime:
          </label>
          <input
            className="form-control"
            name="Ime i prezime"
            onChange={(event) => {
              setDidUserTypeOnce((prev) => {
                const copy = [...prev];
                copy[0] = true;
                return copy;
              });
              onChangeHandler(event);
            }}
            value={formData["Ime i prezime"]}
          />
          {didUserTypeOnce[0] && (
            <span className="non_valid">{formError.imeiprezime}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="drzava"> Država:</label>
          <select
            className="form-select"
            name="Država"
            onChange={(event) => {
              setDidUserTypeOnce((prev) => {
                const copy = [...prev];
                copy[1] = true;
                return copy;
              });
              onChangeHandler(event);
            }}
            value={formData["Država"]}
          >
            <option value="">- Odaberi -</option>
            <option value="Hrvatska">Hrvatska</option>
            <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
            <option value="Slovenija">Slovenija</option>
            <option value="Crna Gora">Crna Gora</option>
            <option value="Srbija">Srbija</option>
          </select>
          {didUserTypeOnce[1] && (
            <span className="non_valid">{formError.drzava}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="adresa" className="form-label">
            Adresa:
          </label>
          <input
            className="form-control"
            name="Adresa"
            onChange={(event) => {
              setDidUserTypeOnce((prev) => {
                const copy = [...prev];
                copy[2] = true;
                return copy;
              });
              onChangeHandler(event);
            }}
            value={formData["Adresa"]}
          />
          {didUserTypeOnce[2] && (
            <span className="non_valid">{formError.adresa}</span>
          )}
        </div>
      </div>
    </>
  );
}
