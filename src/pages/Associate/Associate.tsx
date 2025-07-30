import { HeaderAssociate } from "./HeaderAssociate";

import styles from "./css/Associate.module.css";

export function Associate() {
  return (
    <div>
      <HeaderAssociate />

      <div className={styles.generalInfo}>
        <div className={styles.generalContent}>
          <span className={styles.spanImg}>
            <img src="" alt="" />
          </span>

            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Matricula" />
            <input type="text" placeholder="CPF" />


            <select name="Situação" id="">
              <option value="default">Situação</option>
              <option value="1">Ativo</option>
              <option value="2">Aposentado</option>
              <option value="3">Pensionista</option>
              <option value="4">Lic. S.Remuneração</option>
            </select>

            <input type="text" placeholder="RG" />
            <input type="text" placeholder="Órgão Emissor" />
            <input type="text" placeholder="Sexo" />
        </div>
      </div>

      <div className={styles.addressInfo}></div>

      <div className={styles.historyInfo}></div>

      <div className={styles.dependetInfo}></div>
    </div>
  );
}
