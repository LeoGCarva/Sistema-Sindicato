import styles from './css/Header.module.css'
import { IoExitOutline } from "react-icons/io5";

export function Header() {
    return(
        <header className={styles.header}>
            <h1>Perfil</h1>
            <IoExitOutline size={30} title='Sair' className={styles.exitIcon}/>
        </header>
    );
}