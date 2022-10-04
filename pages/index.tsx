import type { NextPage } from "next";
import Head from "next/head";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const handleSubmit = () => alert("Sua conta foi registrada com sucesso!");

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <h1>Crie seu usuário para iniciar sua associação.</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          placeholder="Email"
          autocomplete={["@gmail.com", "@hotmail.com"]}
        />
        <InputField placeholder="Nome" />
        <InputField placeholder="Sobrenome" />
        <SelectField name="plan" options={["Básico", "Padrão", "Premium"]} />
        <button>Próximo</button>
      </form>
    </div>
  );
};

export default Home;
