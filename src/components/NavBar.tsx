import styles from './css/NavBar.module.css';

export function NavBar() {
    return(
        <div className={styles.navBarContainer}>
            <p>Administrativo</p>
            <p>Sócios</p>
            <p>Reembolso</p>
            <p>Calendário</p>
            <p>Comunicação</p>
            <p>Colaboradores</p>
            <p>Relatorios</p>
        </div>
    );
}