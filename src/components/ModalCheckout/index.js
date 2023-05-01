import { Modal, ModalOverlay, Infos } from "./styled";
import concluded from "../../assets/images/concluded.gif";

export default function ModalCheckout({ showModal, handleCloseModal, userName, form, total }) {
  return (
    <>
      <ModalOverlay />
      {showModal && (
        <Modal className="modal-content" showModal={showModal} key={showModal}>
          <ion-icon onClick={handleCloseModal} name="close-outline"></ion-icon>
          <img src={concluded} alt="concluded" />
          <h2>Pedido Concluido com Sucesso</h2>
          <Infos>
            <p>
              <strong>Nome: </strong> {userName}
            </p>
            <p>
              <strong>Endereço: </strong> {form.address}
            </p>
            <p>
              <strong>Número do cartão: </strong> {form.cardNumber}
            </p>
            <p>
              <strong>Forma de pagamento: </strong> {form.paymentMethod}
            </p>
            <p>
              <strong>Total Compra: </strong> {total.toFixed(2)}
            </p>
          </Infos>
        </Modal>
      )}
    </>
  );
}
