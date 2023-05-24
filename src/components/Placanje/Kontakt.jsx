import {useState} from 'react';

export default function Kontakt({ onChangeHandler, formData, formError }) {
  const [didUserTypeOnce, setDidUserTypeOnce] = useState(false);

  return (
    <div>
      <p className="p_kontakt">Kontakt</p>
      <div className="kontakt">
        <div className="form-group">
          <input
            className="form-control"
            name="E mail"
            placeholder="Email adresa..."
            onChange={event => {
              setDidUserTypeOnce(true);
              onChangeHandler(event)
            }}
            value={formData["E mail"]}
          />
          {didUserTypeOnce && <span className="non_valid">{formError.email}</span>}
        </div>
      </div>
    </div>
  );
}
