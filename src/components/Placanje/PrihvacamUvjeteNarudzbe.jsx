import { useState } from "react";

export default function PrihvacamUvjeteNarudzbe({
  onChangeHandler,
  formError,
}) {
  const [didUserTypeOnce, setDidUserTypeOnce] = useState(false);
  return (
    <div className="p_u_n">
      <div className="form-group">
        <div>
          <input
            type="checkbox"
            name="Uvjeti narudžbe"
            value="Prihvaćam uvjete narudžbe"
            onChange={(event) => {
              setDidUserTypeOnce(true);
              onChangeHandler(event);
            }}
          />
          <label htmlFor="html">Prihvaćam uvjete narudžbe</label>
        </div>
        {didUserTypeOnce && <span className="non_valid">{formError.uvjetinarudzbe}</span>}
      </div>
    </div>
  );
}
