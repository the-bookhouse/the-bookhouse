import { SelectStyled } from "./styled";

export default function CheckoutForm({ form, handleInputChange, submitForm, formCompleted }) {
  return (
    <form onSubmit={submitForm}>
      <SelectStyled
        required
        className="form-select"
        name="paymentMethod"
        value={form.paymentMethod}
        onChange={handleInputChange}
      >
        <option value="" disabled>
          {" "}
          Forma de pagamento
        </option>
        <option value="Débito">Débito</option>
        <option value="Credito">Crédito</option>
      </SelectStyled>
      <input
        required
        pattern="[0-9]{16}"
        type="text"
        placeholder="Número do cartão"
        name="cardNumber"
        value={form.cardNumber}
        onChange={handleInputChange}
      />
      <input
        required
        minLength={10}
        type="text"
        placeholder="Endereço"
        name="address"
        value={form.address}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={!formCompleted}>
        {" "}
        Finalizar Pedido{" "}
      </button>
    </form>
  );
}
