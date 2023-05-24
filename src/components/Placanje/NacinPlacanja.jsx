import { useState } from "react";

export default function NacinPlacanja({ onChangeHandler, formError }) {
  const [didUserTypeOnce, setDidUserTypeOnce] = useState(false);

  return (
    <fieldset className="nacin_placanja">
      <legend htmlFor="nacin_placanja" className="l_nacinplacanja">
        Način plaćanja:
      </legend>
      <div className="form-group">
        <div>
          <div>
            <input
              type="radio"
              name="Način plaćanja"
              onChange={(event) => {
                setDidUserTypeOnce(true);
                onChangeHandler(event);
              }}
              value="Kartica"
            />
            <label htmlFor="kartica">Kartica</label>
          </div>
          <div>
            <input
              type="radio"
              name="Način plaćanja"
              onChange={onChangeHandler}
              value="Pouzeće"
            />
            <label htmlFor="pouzece">Pouzeće</label>
          </div>
          {didUserTypeOnce && (
            <span className="non_valid">{formError.nacinplacanja}</span>
          )}
        </div>
      </div>
    </fieldset>
  );
}
