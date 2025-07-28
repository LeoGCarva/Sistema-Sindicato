import { useState } from "react";

import { LuEye, LuEyeClosed } from "react-icons/lu";
import styles from "./css/Login.module.css";

export function Login() {
    const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginContentContainer}>
        <div className={styles.titleDiv}>
          <h1>Fazer Login</h1>
        </div>

        <div className={styles.inputDiv}>
          <span className={styles.userInput}>
            <input type="text" name="" id="" placeholder="Usuário" />
          </span>
          <span className={styles.passInput}>
            <input type={showPass ? "password" : "text"} placeholder="Senha" />
            <button onClick={() => {setShowPass(!showPass)}}>
              {showPass ? <LuEyeClosed /> : <LuEye />}
            </button>
          </span>
          <span className={styles.keepLoginSpan}>
            <input type="checkbox" name="" id="" />
            <p>Manter conectado</p>
          </span>

          <button className={styles.loginBtn}>Entrar</button>
        </div>
      </div>
    </div>
  );
}
