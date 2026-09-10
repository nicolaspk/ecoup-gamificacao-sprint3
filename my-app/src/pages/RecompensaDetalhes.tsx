import { useParams, useNavigate } from 'react-router-dom';

export default function RecompensaDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] border border-white/5 text-center max-w-[600px] mx-auto">
      <div className="text-[4rem] mb-[20px]">🎁</div>
      <h2 className="text-[#00f5c8] text-[2rem] font-bold mb-[20px]">Detalhes do Subsídio ID: {id}</h2>
      <p className="text-[#94a3b8] text-[1.1rem] mb-[40px]">
        Esta é uma rota dinâmica validada pelo sistema. Para resgatar este benefício, você precisará manter a sua pontuação no topo do ranking até o fechamento do ciclo mensal da SoulUp.
      </p>
      <button 
        onClick={() => navigate('/recompensas')} 
        className="bg-[#00f5c8] text-[#050816] py-[12px] px-[30px] font-bold rounded-[30px] uppercase hover:bg-[#00ddb3] cursor-pointer"
      >
        Voltar ao Catálogo
      </button>
    </section>
  );
}