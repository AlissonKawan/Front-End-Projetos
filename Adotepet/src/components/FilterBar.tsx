function FilterBar() {
  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Pesquisar por nome..."
        className="border rounded-2xl border-zinc-300 px-4 py-2 w-96"
      />

      <select className="border rounded-xl px-4 py-3  border-zinc-300"> 
        <option>Todas as espécies</option>
        <option>Gatos</option>
        <option>Cachorros</option>
        <option>Passaros</option>
      </select>

      <select className="border rounded-xl border-zinc-300 px-5 py-3"> 
        <option>Todas os portes</option>
        <option>Pequeno</option>
        <option>Médio</option>
        <option>Grande</option>
      </select>

    </div>
  );
}

export default FilterBar;
