import { GetInfoUser } from "@/services/getInfoUser";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { Usuario } from "./types/types";
import { PerfilInfo } from "./Cards/perfil";
import { ResumoPerfil } from "./Cards/resumo";
import { ServicesUser } from "./Cards/servicos";
import { HabilidadesUser } from "./Cards/habilidades";

export function InformacaoUsuario() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await GetInfoUser();
        setUsuario(response?.data ?? null);
      } catch (error) {
        console.log("Erro ao carregar as informações do usuário", error);
      }
    };

    getInfo();
  }, []);

  const serviceCount = usuario?.services.length ?? 0;
  const skillCount = usuario?.skills.length ?? 0;
  const completedFields = [
    usuario?.name,
    usuario?.role,
    usuario?.bio,
    usuario?.regiao,
    usuario?.profissao,
    usuario?.avatar,
    skillCount > 0 ? "skills" : null,
  ].filter(Boolean).length;
  const profileProgress = Math.round((completedFields / 7) * 100);


  return (
    <div className="min-h-screen bg-[#ececea] pb-8">
      <main className="mx-auto grid max-w-7xl gap-6 px-7 py-7 lg:grid-cols-[1.35fr_0.85fr]">
        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="p-6">
            <PerfilInfo usuario={usuario} />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[ { value: serviceCount, label: 'Serviços publicados' }, { value: skillCount, label: 'Habilidades' }, { value: `${profileProgress}%`, label: 'Perfil completo' } ].map(({ value, label }) => (
                <div key={label} className="rounded-xl border border-[#dedad0] bg-[#f4f4f1] p-4">
                  <p className="text-2xl font-semibold text-[#1a1a18]">{value}</p>
                  <p className="mt-1 text-sm text-[#8a8a82]">{label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="space-y-4 p-6">
           <ResumoPerfil usuario={usuario} />
          </CardContent>
        </Card>

        {/* COLUNA ESQUERDA - Habilidades */}
        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="p-6">
            <HabilidadesUser skillCount={skillCount} usuario={usuario} />
          </CardContent>
        </Card>

        {/* COLUNA DIREITA - Avatar upload */}
        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="p-6 text-center">
            {usuario?.avatar ? (<img src={usuario.avatar} alt="avatar" className="w-16 h-16 rounded-full object-cover mx-auto mb-3" />) : (<div className="w-16 h-16 rounded-full border border-dashed border-[#ccc] bg-[#f9f9f9] mx-auto mb-3 flex items-center justify-center"><span className="text-2xl">📷</span></div>)}
            <p className="text-sm text-[#888] mb-2">Sem foto de perfil</p>
            <button className="w-full bg-[#f5f5f5] border border-[#ddd] rounded-md py-2 text-sm text-[#555]">⬆️ Enviar foto</button>
          </CardContent>
        </Card>

        {/* COLUNA ESQUERDA - Serviços publicados */}
        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="p-0">
          <ServicesUser usuario={usuario} serviceCount={serviceCount} />
          </CardContent>
        </Card>

        {/* COLUNA DIREITA - Completude do perfil */}
        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#aaa] mb-3">Completude do perfil</p>
            <div className="flex justify-between mb-2"><span className="text-sm text-[#777]">{completedFields} de 7 campos preenchidos</span><span className="text-sm font-semibold text-[#111]">{profileProgress}%</span></div>
            <div className="h-2 bg-[#f0f0f0] rounded-full overflow-hidden mb-3"><div className="h-full bg-[#4f46e5]" style={{ width: `${profileProgress}%` }} /></div>
            <div className="flex flex-col gap-2 text-sm">{[{ done: true, label: 'Nome' }, { done: true, label: 'Status da conta' }, { done: !!usuario?.bio, label: 'Bio' }, { done: !!usuario?.regiao, label: 'Região' }, { done: !!usuario?.avatar, label: 'Foto de perfil' }, { done: skillCount > 0, label: 'Habilidades' }].map(({ done, label }) => (<div key={label} className={`flex items-center gap-2 ${done ? 'text-[#555]' : 'text-[#bbb]'}`}><span className={`${done ? 'text-[#1d9e75]' : 'text-[#ccc]'} text-base`}>{done ? '✓' : '○'}</span><span>{label}</span></div>))}</div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}