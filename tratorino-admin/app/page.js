import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white flex flex-col justify-center w-screen">
      <img className="h-full bg-[#f7a833] rounded-[48px]" alt="Logo tratorino" src="logo-tratorino-1.svg" />
      <div className="absolute bottom-4 w-screen">
        <div className="flex gap-1 flex-col px-8">
          <label> Usuário </label>
          <input
            type="text"
            placeholder=""
            className="border border-solid border-skylight h-[40px] w-full rounded-md ps-4"
          />
          <label> Senha </label>
          <input
            type="text"
            placeholder=""
            className="border border-solid border-skylight h-[40px] w-full rounded-md ps-4"
          />
          <div className="text-[#f7a833] text-[14px]">Esqueceu sua senha?</div>
          <button className="py-[10px] bg-[#f7a833] rounded-[48px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
