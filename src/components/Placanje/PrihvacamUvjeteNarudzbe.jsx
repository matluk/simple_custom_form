export default function PrihvacamUvjeteNarudzbe({ register, errors }) {
  return (
    <div className="p_u_n">
      <div className="form-group">
        <div>
            <input
              id="uvjeti"
              type="checkbox"
              name="Uvjeti narudžbe"
              value="Prihvaćam uvjete narudžbe"
              {...register("Uvjeti narudžbe", {
                required: "Morate prihvatiti uvjete narudžbe!",
              })}
            />
          <label htmlFor="uvjeti">Prihvaćam uvjete narudžbe</label>
        </div>
        {errors["Uvjeti narudžbe"] && (
          <span className="non_valid">{errors["Uvjeti narudžbe"].message}</span>
        )}
      </div>
    </div>
  );
}
