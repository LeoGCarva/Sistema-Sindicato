import { GeneralInfo } from "./generalInfo/GeneralInfo";
import { AddressInfo } from "./addressInfo/AddressInfo";
import { HistoryInfo } from "./historyInfo/HistoryInfo";

import { AiOutlineSave } from "react-icons/ai";
import { LuPen } from "react-icons/lu";
import { GrDocumentText, GrDocumentVerified } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { TbCashRegister } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";

import styles from "./css/Associate.module.css";
import { DependentInfo } from "./dependentInfo/DependentInfo";

export function Associate() {
  // UseState e UseRef para o modal //
  const [actionBtnModal, setActionBtnModal] = useState<boolean>(false);
  const [styleBtn, setStyleBtn] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // UseEffect apenas para fechar o modal quando clicado em outro lugar da tela //
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setActionBtnModal(false);
      }
    }

    if (actionBtnModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [actionBtnModal]);

  return (
    <div className={styles.associateContainer}>
      <div className={styles.generalInfo}>
        <div className={styles.mainInfoContent}>
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
            <a aria-label="Cadastro de contribuição">
              <TbCashRegister className={styles.lastIco} size={20} />
            </a>
          </div>

          <span className={styles.spanImg}>
            <img src="../../public/Finn.jpeg" alt="" />

            <div className={styles.actionsContainer}>
              <button
                className={styles.actionBtn}
                onClick={() => setActionBtnModal(!actionBtnModal)}
              >
                Ações <IoIosArrowDown />
              </button>
              {actionBtnModal ? (
                <div ref={modalRef} className={styles.actionsBtns}>
                  <button
                    className={styleBtn ? styles.success : styles.failure}
                  >
                    {styleBtn ? `Associado` : `Não Associado`}
                  </button>
                  <button
                    className={styleBtn ? styles.success : styles.failure}
                  >
                    {styleBtn ? `Com Acesso` : `Sem Acesso`}
                  </button>
                  <button
                    className={styleBtn ? styles.success : styles.failure}
                  >
                    {styleBtn ? `Termo Assinado` : `Termo não Assinado`}
                  </button>
                  <button className={styles.passBtn}>Zerar Senha</button>
                </div>
              ) : null}
            </div>
          </span>

          <span className={styles.principalInfo}>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Matricula" />
            <input type="text" placeholder="CPF" />
          </span>

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

          <input type="date" placeholder="Data de Nascimento" />
          <input type="date" placeholder="Data de Sindicalização" />
          <input type="text" placeholder="Ente" />

          <select name="Estado Civil" id="">
            <option value="default">Estado Civil</option>
            <option value="1">{`Solteiro(a)`}</option>
            <option value="2">{`Casado(a)`}</option>
            <option value="3">{`Separado(a)`}</option>
            <option value="4">{`Divorciado(a)`}</option>
            <option value="5">{`Desquitado(a)`}</option>
            <option value="6">{`Viuvo(a)`}</option>
            <option value="7">{`União Estavel`}</option>
            <option value="8">{`Outro`}</option>
          </select>
        </div>
      </div>

      <GeneralInfo />
      <AddressInfo />
      <HistoryInfo />
      <DependentInfo />
    </div>
  );
}
