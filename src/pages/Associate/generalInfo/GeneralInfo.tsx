import styles from './GeneralInfo.module.css';

export function GeneralInfo() {
  return (
    <div className={styles.generalInfoContent}>
      <h2>Informações Gerais</h2>
      <div className={styles.generalInfoWrapper}>
        <select name="" id="">
          <option value="default">Instrução</option>
          <option value="nao-informado">Não Informado</option>
          <option value="nao-alfabetizado">Não Alfabetizado</option>
          <option value="ensino-fundamental">Ensino Fundamental</option>
          <option value="ensino-fundamental-incompleto">
            Ensino Fun./Incompleto
          </option>
          <option value="ensino-medio">Ensino Médio</option>
          <option value="esino-medio-incompleto">Ensino Médio/Icompleto</option>
          <option value="superior">Superior</option>
          <option value="superior-incompleto">Superio Incompleto</option>
          <option value="pos-graduado">Pós Graduado</option>
          <option value="mestrado">Mestrado</option>
          <option value="doutorado">Doutorado</option>
        </select>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="WhatsApp" />
        <input type="text" placeholder="Telefone Fixo / Celular" />
        <input type="text" placeholder="Chava Pix" />
        <select name="" id="">
          <option value="default">Banco</option>
          <option value="none">0 - Sem banco cadastrado</option>
          <option value="banco-do-brasil">1 - Banco do Brasil</option>
          <option value="santander">33 - Santander</option>
          <option value="uniprime">99 - Uniprime</option>
          <option value="cef">104 - CEF</option>
          <option value="bradesco">237 - Bradesco</option>
          <option value="bancred">239 - Bancred</option>
          <option value="nubank">260 - Nubank</option>
          <option value="itau">341 - Itau</option>
          <option value="picpay">380 - PIC PAY</option>
          <option value="sem-nome">694 - Sem Nome</option>
          <option value="sicred">748 - Sicred</option>
          <option value="credivista">748 - Sicred</option>
          <option value="bancoob">756 - Bancoob</option>
        </select>
        <input type="text" placeholder="Agencia do Banco" />
        <input type="text" placeholder="Conto Banco" />
        <input type="date" placeholder="Serv. Publi. Desde" />
        <input type="date" placeholder="Data da Aposentadoria" />
        <input type="date" placeholder="Recadastro" />
        <input type="text" placeholder="Cargo" />
        <input type="text" placeholder="Local de Trabalho" />
        <input type="text" placeholder="Departamento" />
        <input type="text" placeholder="Setor" />
        <input type="text" placeholder="Nome da Mãe" />
        <input type="text" placeholder="Nome do Pai" />
        <input type="text" placeholder="Observações" />
      </div>
    </div>
  );
}
