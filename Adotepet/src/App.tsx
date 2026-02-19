import "./index.css"
import Header from "./components/Header"
import FilterBar from "./components/FilterBar"
import PetCard from "./components/PetCard"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full bg-white shadow-md py-6 px-6">
        <div className="max-w-3xl mx-auto">
          <Header title="AdotePet ❤️" />
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl mb-6 text-red-600">Encontre seu novo amigo</h2>
          <FilterBar />
          
          {/* Grid com cards menores */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            <PetCard 
              nome="Max"
              especie="Cão"
              porte="Médio"
              idade="3 anos"
              localizacao="São Paulo, Brasil"
              imagem="/img/max.jpg"
            />

            <PetCard
              nome="Luna"
              especie="Gato"
              porte="Pequeno"
              idade="2 anos"
              localizacao="Xique-Xique, Brasil"
              imagem="/img/luna.jpg"
            />
            <PetCard
              nome="Thor"
              especie="Cão"
              porte="Grande"
              idade="5 anos"
              localizacao="Suzano, Brasil"
              imagem="/img/Thor.jpg"
            />
            <PetCard
              nome="Kratos"
              especie="Passaro"
              porte="Pequeno"
              idade="3 anos"
              localizacao="Mongaba, Brasil"
              imagem="/img/kratos.jpg"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App