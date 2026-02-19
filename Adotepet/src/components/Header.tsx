type Props = {
  title: string
}

function Header(props: Props) {
  return (
    <header className="w-full">
      <div className="
        flex flex-col gap-4
        sm:flex-row sm:justify-between sm:items-center
      ">
        {/* Título */}
        <h1 className="text-xl sm:text-2xl text-red-600 font-bold text-center sm:text-left">
          {props.title}
        </h1>

        {/* Ações */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a
            href="#"
            className="flex items-center justify-center gap-2 text-gray-700 hover:text-red-600"
          >
            <span>📋</span>
            <span>Minhas Candidaturas</span>
          </a>

          <a
            href="#"
            className="
              px-4 py-2
              border border-red-600 text-red-600
              rounded-2xl
              text-center
              hover:bg-red-600 hover:text-white
              transition
            "
          >
            Entrar
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header