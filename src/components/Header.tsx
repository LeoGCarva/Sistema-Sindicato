import {
  LuCalendar,
  LuClipboardList,
  LuCrown,
  LuMegaphone,
  LuUser,
  LuUserPlus,
  LuUsers,
} from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import styles from "./css/Header.module.css";
import { IoExitOutline, IoPerson, IoSearch } from "react-icons/io5";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navBarContainer}>
        <li className={styles.navBarli}>
          <a aria-label="Administrativo">
            <LuCrown />
          </a>
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
          <a aria-label="Sócios">
            <LuUser />
          </a>

          <ul className={styles.dropDown}>
            <li>Cadastro de sócios</li>
            <li>Cadastro de contribuição</li>
            <li>Reembolso</li>
          </ul>
        </li>
        <li className={styles.navBarli}>
          <a aria-label="Financeiro">
            <MdAttachMoney />
          </a>
        </li>
        <li className={styles.navBarli}>
          <a aria-label="Calendário">
            <LuCalendar />
          </a>
        </li>
        <li className={styles.navBarli}>
          <a aria-label="Comunicação">
            <LuMegaphone />
          </a>
          <ul className={styles.dropDown}>
            <li>Notícias</li>
            <li>Eventos</li>
            <li>Benefícios</li>
            <li>Convênios</li>
          </ul>
        </li>
        <li className={styles.navBarli}>
          <a aria-label="Colaboradores">
            <LuUsers />
          </a>
        </li>
        <li className={styles.navBarli}>
          <a aria-label="Relatórios">
            <LuClipboardList />
          </a>
        </li>
      </div>

      <span className={styles.spanBar}></span>

      <div className={styles.InputAndIconsContainer}>
        <span className={styles.collaboratoSpan}>
          <input
            placeholder="Pesquisar Colaborador"
            type="text"
            className={styles.searchCollaborator}
          />
          <IoSearch className={styles.searchBtn} size={20} />
        </span>
        <span className={styles.IconsSpan}>
          <IoPerson size={27} title="Perfil" className={styles.perfilIcon} />
          <IoExitOutline size={30} title="Sair" className={styles.exitIcon} />
        </span>
      </div>
    </header>
  );
}
