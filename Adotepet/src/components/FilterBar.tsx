function FilterBar() {
  return (
    <div
      className="
        flex flex-col gap-3
        sm:flex-row sm:items-center sm:gap-4
      "
    >
      {/* Input */}
      <input
        type="text"
        placeholder="Pesquisar por nome..."
        className="
          border border-zinc-300 rounded-2xl
          px-4 py-2
          w-full sm:w-72 md:w-96
          focus:outline-none focus:ring-2 focus:ring-red-500
        "
      />

      {/* Espécies */}
      <select
        className="
          border border-zinc-300 rounded-xl
          px-4 py-3
          w-full sm:w-auto
          focus:outline-none focus:ring-2 focus:ring-red-500
        "
      >
        <option>Todas as espécies</option>
        <option>Gatos</option>
        <option>Cachorros</option>
        <option>Pássaros</option>
      </select>

      {/* Porte */}
      <select
        className="
          border border-zinc-300 rounded-xl
          px-4 py-3
          w-full sm:w-auto
          focus:outline-none focus:ring-2 focus:ring-red-500
        "
      >
        <option>Todos os portes</option>
        <option>Pequeno</option>
        <option>Médio</option>
        <option>Grande</option>
      </select>
    </div>
  )
}

export default FilterBar