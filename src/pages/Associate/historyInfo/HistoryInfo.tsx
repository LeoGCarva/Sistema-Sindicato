import { BiPlus } from "react-icons/bi";
import styles from "./HistoryInfo.module.css";
import { FaCirclePause, FaTrash } from "react-icons/fa6";

export function HistoryInfo() {
  return (
    <div className={styles.historyInfo}>
      <h2>Histórico</h2>

      <span className={styles.addSpan}>
        <button className={styles.addHistoryUp}>
          <BiPlus /> Histórico em Cima
        </button>
        <button className={styles.addHistoryDown}>
          <BiPlus /> Histórico em Baixo
        </button>
      </span>
      <div className={styles.historyWrapper}>
        <input type="text" placeholder="Ente" />
        <input type="text" placeholder="Matricula" />
        <input type="date" placeholder="Admissão Sindicto" />
        <input type="date" placeholder="Demissão Sindicato" />
        <input type="number" placeholder="Salario Base" />
        <input type="number" placeholder="Desconto" />
        <select name="" id="">
          <option value="default">Motivo da Demissão</option>
          <option value="none">Nenhuma</option>
          <option value="despesa">Contenção de Despesas</option>
          <option value="exonerada">Exonerada a Pedido</option>
          <option value="falecimento">Falecimento Nesta Data</option>
          <option value="mudanca-cidade">Mudança de Cidade/Estado</option>
          <option value="outros">Outros tipos de Rescisões</option>
          <option value="pedido">Pedido de Demissão - Pref</option>
          <option value="contrato">Termino de Contrato</option>
          <option value="razoes-particulares">Razões Particulares</option>
          <option value="mudanca-de-cargp">Mudança de Cargo/Ente</option>
          <option value="licenca">Licença por 2 anos </option>
        </select>
        <select name="" id="">
          <option value="default">Contribuição</option>
          <option value="none">Nenhuma</option>
          <option value="associativa">Associativa</option>
          <option value="assistencia">Assistencia</option>
        </select>
        <button className={styles.pauseBtn}>
          <FaCirclePause />
        </button>
        <button className={styles.trashBtn}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
