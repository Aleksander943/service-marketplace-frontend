import { NavBar } from "@/components/NavBar/navBar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";


export const Perfil = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const name = user.name || "Aleksander";
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part: string) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-[#ececea] pb-8">
      <NavBar />
      <main className="mx-auto grid max-w-[1280px] gap-6 px-7 py-7 lg:grid-cols-[1.35fr_0.85fr]">
        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Avatar className="size-16 border border-[#dedad0] bg-[#1a1a18] text-[#fdfcf8]">
                <AvatarFallback className="bg-[#1a1a18] text-base font-semibold text-[#fdfcf8]">
                  {initials || "A"}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8a82]">
                  Perfil
                </p>
                <h1 className="text-3xl font-semibold tracking-[-0.03em] text-[#1a1a18] [font-family:Fraunces,serif]">
                  {name}
                </h1>
                <p className="text-sm text-[#4a4a44]">
                  {user.role || "PRESTADOR"} • Membro da plataforma
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { value: "12", label: "Serviços publicados" },
                { value: "4.8", label: "Nota média" },
                { value: "98%", label: "Respostas" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-[#dedad0] bg-[#f4f4f1] p-4"
                >
                  <p className="text-2xl font-semibold text-[#1a1a18]">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-[#8a8a82]">{label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#dedad0] bg-[#fdfcf8] shadow-none">
          <CardContent className="space-y-4 p-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8a82]">
                Sobre
              </p>
              <h2 className="mt-2 text-lg font-semibold text-[#1a1a18]">
                Informações do prestador
              </h2>
            </div>

            <div className="space-y-3 text-sm text-[#4a4a44]">
              <div className="flex items-center justify-between border-b border-[#ece8df] pb-3">
                <span>Nome</span>
                <span className="font-medium text-[#1a1a18]">{name}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#ece8df] pb-3">
                <span>Perfil</span>
                <span className="font-medium text-[#1a1a18]">
                  {user.role || "PRESTADOR"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Status</span>
                <span className="rounded-full bg-[#e8f5ee] px-3 py-1 text-xs font-semibold text-[#1a6e3c]">
                  Conta ativa
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
