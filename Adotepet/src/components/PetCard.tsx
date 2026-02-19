type PetCardProps = {
    nome: string;
    especie: string;
    porte: string;
    idade: string;
    localizacao: string;
    imagem: string;
};

function PetCard(props: PetCardProps){
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img 
          src={props.imagem}
          alt={props.nome} 
          className= "w-full h-96 object-cover "
          />

        <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{props.nome}</h3>
            <div className="flex gap-2 mb-3">

                <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-md text-sm">
                    {props.especie}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm border border-y-neutral-300">
                    {props.porte}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm border border-y-neutral-300">
                    {props.idade}
                </span>

            </div>
             <p className="text-gray-600 text-sm mb-4">📍 {props.localizacao}</p>

             <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                Ver Detalhes
             </button>
        </div>
      </div>
      
    );
}

export default PetCard;