import {Avatar, AvatarImage, AvatarFallback} from '../../ui/avatar';



export const PerfilInfo = ({usuario}: any)=>{
  const initials = usuario?.name?.[0]?.toUpperCase() ?? "U";
  console.log(usuario)

  return(
    <div>
       <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Avatar className="size-16 border border-[#dedad0] bg-[#1a1a18] text-[#fdfcf8]">
                {usuario?.avatar ? (
                  <AvatarImage src={usuario.avatar} alt={usuario.name} className="h-full w-full object-cover" />
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
    </div>
  )
}