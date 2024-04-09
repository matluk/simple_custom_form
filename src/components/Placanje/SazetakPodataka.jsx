export default function SazetakPodataka({ isValid, errors, formData }) {
  return (
    <div className="sazetak_podataka">
      {Object.keys(errors).length === 0 && isValid && (
        <div className="msg">
          {Object.entries(formData).map(([key, value]) => (
            <p key={key}>
              {key} : {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
