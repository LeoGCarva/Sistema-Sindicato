import { AiOutlineSave } from "react-icons/ai";
import { GrDocumentText, GrDocumentVerified } from "react-icons/gr";
import { LuPen } from "react-icons/lu";

import styles from "./css/Associate.module.css";

export function HeaderAssociate() {
  return (
    <div className={styles.HeaderContainer}>
      <h2>
        <input type="text" value={'MMMMMM'} className={styles.associateNum}/>
        -
        <input type="text" value={'Leonardo Garcia de Carvalho'} className={styles.associateName}/>
      </h2>

      <div className={styles.iconAssociate}>
        <a aria-label="Salvar">
          <AiOutlineSave className={styles.firstIco} />
        </a>

        <a aria-label="Recadastrar">
          <LuPen className={styles.secondIco} />
        </a>
        <a aria-label="Registro">
          <GrDocumentText className={styles.thirdIco} size={18} />
        </a>
        <a aria-label="Termo de autorização">
          <GrDocumentVerified className={styles.forthIco} size={18} />
        </a>
      </div>
    </div>
  );
}
