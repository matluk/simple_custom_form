export default function SazetakPodataka({formError, isSubmit, formData}) {
  return (
    <div className="sazetak_podataka">
      {Object.keys(formError).length === 0 && isSubmit && (
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
