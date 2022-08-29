import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

const Subscribe = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscribe, { loading }] = useCreateSubscriberMutation()

  const handleSubscription = async (e: FormEvent) => {
    e.preventDefault();

    await createSubscribe({
      variables: {
        name,
        email
      }
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center justify-end">
      <div className="flex w-full max-w-[1100px] justify-between">
        <div className="max-w-xl">
          <Logo />
          <h1 className="text-4xl my-8">
            Construa uma <strong className="accent">aplicação completa</strong>,
            do zero, com <strong className="accent">React JS</strong>
          </h1>
          <p className="text-gray-200">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <form
          onSubmit={e => handleSubscription(e)}
          className="flex flex-col gap-2 bg-gray-700 p-8 border-2 border-gray-500 rounded -mb-16 z-10"
        >
          <span className="text-2xl font-bold mb-4">
            Inscreva-se gratuitamente
          </span>
          <input
            type="text"
            className="input"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="input"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 font-bold p-4 rounded mt-4 hover:bg-green-300 transition-colors uppercase text-sm disabled:opacity-50"
          >
            Garantir minha vaga
          </button>
        </form>
      </div>
      <img src="./src/assets/code-mockup.png" alt="" />
    </div>
  );
};

export default Subscribe;
