import styles from "./AddressInfo.module.css";

export function AddressInfo() {
  return (
    <div className={styles.addressInfo}>
      <h2>Endereço</h2>
      <div className={styles.addressWrapper}>
        <input type="text" placeholder="CEP" className={styles.cepInput} />
        <input type="text" placeholder="Rua" className={styles.streetInput} />
        <input type="text" placeholder="Num" className={styles.numInput} />
        <input type="text" placeholder="Bairro" className={styles.blockInput} />
        <input type="text" placeholder="Cidade" className={styles.cityInput} />
        <input type="text" placeholder="Estado" className={styles.stateInput} />
        <input
          type="text"
          placeholder="Complemento"
          className={styles.complementInput}
        />
      </div>
    </div>
  );
}
