import { GetInfoUser } from "@/services/getInfoUser";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Usuario = {
  id: number;
  name: string;
  role: string;
  bio: string | null;
  regiao: string | null;
  profissao: string | null;
  avatar: string | null;
  skills: Array<{ id: number; name: string }>;
  services: Array<{
    id: number;
    title: string;
    description?: string | null;
    price: string | number;
    category?: string | null;
  }>;
};

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

  const initials = usuario?.name?.[0]?.toUpperCase() ?? "U";
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

        {/* COLUNA ESQUERDA - Perfil (mantido) */}
        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Avatar className="size-16 border border-[#dedad0] bg-[#1a1a18] text-[#fdfcf8]">
                {usuario?.avatar ? (
                  <img src={usuario.avatar} alt={usuario.name} className="h-full w-full object-cover" />
                ) : (
                  <AvatarFallback className="bg-[#1a1a18] text-base font-semibold text-[#fdfcf8]">{initials}</AvatarFallback>
                )}
              </Avatar>
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8a82]">Perfil</p>
                <h1 className="text-3xl font-semibold tracking-[-0.03em] text-[#1a1a18] font-[Fraunces,serif]">{usuario?.name || 'Usuário'}</h1>
                <p className="text-sm text-[#4a4a44]">{usuario?.profissao || 'Profissão não informada'}{usuario?.regiao ? ` • ${usuario.regiao}` : ''}</p>
              </div>
            </div>

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

        {/* COLUNA DIREITA - Resumo (mantido) */}
        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="space-y-4 p-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8a82]">Resumo</p>
              <h2 className="mt-2 text-lg font-semibold text-[#1a1a18]">Informações do prestador</h2>
            </div>

            <div className="space-y-3 text-sm text-[#4a4a44]">
              <div className="flex items-center justify-between border-b border-[#ece8df] pb-3">
                <span>Nome</span>
                <span className="font-medium text-[#1a1a18]">{usuario?.name || 'Usuário'}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#ece8df] pb-3">
                <span>Perfil</span>
                <span className="font-medium text-[#1a1a18]">{usuario?.role || 'Não informado'}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#ece8df] pb-3">
                <span>Região</span>
                <span className="font-medium text-[#1a1a18]">{usuario?.regiao || 'Não informado'}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#ece8df] pb-3">
                <span>Profissão</span>
                <span className="font-medium text-[#1a1a18]">{usuario?.profissao || 'Não informado'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Status</span>
                <span className="rounded-full bg-[#e8f5ee] px-3 py-1 text-xs font-semibold text-[#1a6e3c]">Conta ativa</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* COLUNA ESQUERDA - Habilidades */}
        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#aaa]">Habilidades</p>
              <span className="text-2xl text-[#aaa] cursor-pointer">+</span>
            </div>

            {skillCount === 0 ? (
              <>
                <div className="rounded-xl border border-dashed border-[#dedad0] bg-[#f4f4f1] p-4 text-center text-sm text-[#8a8a82]">
                  <div className="text-2xl">🔧</div>
                  <div className="mt-2">Nenhuma habilidade cadastrada</div>
                </div>
                <div className="mt-3 opacity-50 flex flex-wrap gap-2">{['+ Elétrica', '+ Pintura', '+ Limpeza'].map(s => (<span key={s} className="text-sm text-[#aaa] bg-[#f5f5f5] border border-dashed border-[#ccc] px-3 py-1 rounded-full">{s}</span>))}</div>
              </>
            ) : (
              <div className="flex flex-wrap gap-2">{usuario?.skills.map(skill => (<span key={skill.id} className="text-sm text-[#3c3489] bg-[#eeedfe] px-3 py-1 rounded-full">{skill.name}</span>))}</div>
            )}
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
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#ebebeb]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#aaa]">Serviços publicados</p>
              <span className="text-2xl text-[#aaa] cursor-pointer">+</span>
            </div>
            {serviceCount === 0 ? (
              <div className="p-6 text-center">
                <div className="text-3xl">📦</div>
                <p className="text-sm text-[#aaa] mt-3">Nenhum serviço publicado ainda</p>
                <button className="mt-3 bg-[#1a1a1a] text-white rounded-md px-4 py-2">Publicar primeiro serviço</button>
              </div>
            ) : (
              <div>{usuario?.services.map(service => (<div key={service.id} className="flex items-center gap-3 px-6 py-4 border-b border-[#ebebeb]"><div className="w-16 h-12 bg-[#cdd3df] rounded-md" /><div><p className="text-sm font-medium text-[#111]">{service.title}</p><p className="text-xs text-[#aaa]">R$ {service.price}</p></div></div>))}</div>
            )}
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

        {/* COLUNA ESQUERDA - Anúncios (meus anúncios) */}
        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none lg:col-span-1">
          <CardContent className="p-6">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8a82]">Anúncios</p><h2 className="mt-2 text-lg font-semibold text-[#1a1a18]">Meus anúncios</h2></div>
            {serviceCount > 0 ? (<div className="grid gap-4 mt-3">{usuario?.services.map(s => (<div key={s.id} className="flex items-start gap-4 rounded-lg border border-[#ece8df] bg-white p-4"><div className="w-24 h-16 bg-[#cdd3df] rounded-md shrink-0" /><div className="flex-1"><div className="flex items-center gap-2"><p className="font-medium text-[#1a1a18]">{s.title}</p><span className="ml-2 text-xs text-[#8a8a82]">{s.category || 'Categoria não informada'}</span></div><p className="text-sm text-[#4a4a44] mt-2">{s.description || 'Sem descrição adicionada.'}</p></div><div className="shrink-0 font-semibold text-[#1a1a18]">R$ {s.price}</div></div>))}</div>) : (<p className="rounded-xl border border-dashed border-[#dedad0] bg-[#f4f4f1] p-4 text-sm text-[#8a8a82] mt-3">Nenhum anúncio publicado ainda.</p>)}
          </CardContent>
        </Card>

      </main>
    </div>
  )
}