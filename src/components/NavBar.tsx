import {
  LuCalendar,
  LuClipboardList,
  LuCrown,
  LuMegaphone,
  LuUserPlus,
  LuUsers,
} from "react-icons/lu";
import { RiRefund2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./css/NavBar.module.css";

export function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <li className={styles.navBarli}>
        <LuCrown />
        <p>Administrativo</p>
        <IoIosArrowDown />
        <ul className={styles.dropDown}>
          <li>Cadastrar Prestador</li>
          <li>Cadastrar Bancos</li>
          <li>Cadastrar Especialidades Médicas</li>
          <li>Cadastrar Contas Bancarias</li>
          <li>Cadastrar de Crédito Mensal/Anual</li>
          <li>Pagamento Ativos Aposentados</li>
          <li>Buscar Histórico</li>
          <li>Cadastrar Novo Usuário</li>
        </ul>
      </li>
      <li className={styles.navBarli}>
        <LuUserPlus />
        <p>Sócios</p>
        <IoIosArrowDown />
        <ul className={styles.dropDown}>
          <li>Cadastro de Contribuição</li>
        </ul>
      </li>
      <li className={styles.navBarli}>
        <RiRefund2Line size={20} />
        <p>Reembolso</p>
      </li>
      <li className={styles.navBarli}>
        <LuCalendar />
        <p>Calendário</p>
      </li>
      <li className={styles.navBarli}>
        <LuMegaphone />
        <p>Comunicação</p>
        <IoIosArrowDown />
        <ul className={styles.dropDown}>
          <li>Notícias</li>
          <li>Eventos</li>
          <li>Benefícios</li>
          <li>Convênios</li>
        </ul>
      </li>
      <li className={styles.navBarli}>
        <LuUsers />
        <p>Colaboradores</p>
      </li>
      <li className={styles.navBarli}>
        <LuClipboardList />
        <p>Relatorios</p>
      </li>
    </div>
  );
}
