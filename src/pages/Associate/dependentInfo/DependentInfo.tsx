import { FaTrash } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
import styles from "./DependentInfo.module.css";

export function DependentInfo() {
  return (
    <div className={styles.dependentInfo}>
      <h2>Dependentes</h2>
      <span className={styles.addDependentSpan}>
        <button className={styles.addDependentBtn}>
          <BiPlus /> Adicionar Dependente
        </button>
      </span>
      <div className={styles.dependentWrapper}>
        <input type="text" placeholder="Nome" />
        <input type="date" placeholder="Data de Nascimento" />
        <select name="" id="">
          <option value="default">Sexo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outros">Outros</option>
        </select>
        <select name="" id="">
          <option value="default">Parentesco</option>
          <option value="conjuge">Cônjuge</option>
          <option value="filho">{`Filho(A)`}</option>
          <option value="enteado">{`Enteado(A)`}</option>
          <option value="tutelado">{`Tutelado(A)`}</option>
          <option value="outros">Outros</option>
          <option value="medico">Dep.Laudo Médico</option>
        </select>
        <input type="checkbox" name="" id="" className={styles.checkbox} />
        <button className={styles.trashBtn}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
