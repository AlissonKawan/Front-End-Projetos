type Props = {
  title: string;
};

function Header(props: Props) {
  return (
    <>
      <div className="flex justify-between items-center w-full">
        {/*lado esquerdo - titulo */}
        <h1 className="text-2xl text-red-600 font-bold">{props.title}</h1>

        <div className="flex items-center gap-6">
          {/*lado direito - link */}
        <a
          href="#"
          className="flex items-center gap-2 text-gray-700 hover:text-red-600">
          <span>📋</span>
          <span>Minhas Candidaturas</span>
        </a>
        {/*lado direito - link De entrar */}
        <a 
          href="#" 
          className="px-4 py-2 border border-red-600 text-red-600 rounded-2xl hover:bg-red-600 hover:text-white">
          <span>Entrar</span>
        </a>
      </div></div>
    </>
  );
}

export default Header;
