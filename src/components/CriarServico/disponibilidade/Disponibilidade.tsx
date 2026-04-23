import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const sectionClass = "border-white/10 bg-[#1f1f1f] text-white";
const fieldClass =
  "h-10 rounded-xl border-white/12 bg-[#2a2a2a] text-white placeholder:text-white/40 focus-visible:border-sky-400";
const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

export const Disponibilidade = () =>{
    return(
        <Card className={sectionClass}>
                <div className="mb-4">
                  <h3 className="text-base font-semibold text-white">Disponibilidade</h3>
                </div>
                <CardContent>
                  <div>
                    <Label className="mb-2 block text-sm font-medium text-white/80">Dias da semana</Label>
                    <div className="flex flex-wrap gap-2">
                      {dias.map((dia, index) => (
                        <button
                          key={dia}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                            index < 5
                              ? "border-sky-400/35 bg-sky-400/12 text-sky-300"
                              : "border-white/12 bg-[#2a2a2a] text-white/70"
                          }`}
                        >
                          {dia}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <Label className="mb-1.5 block text-sm font-medium text-white/80">Horario inicio</Label>
                      <Input type="text" placeholder="Ex: 08:00" className={fieldClass} />
                    </div>
                    <div>
                      <Label className="mb-1.5 block text-sm font-medium text-white/80">Horario fim</Label>
                      <Input type="text" placeholder="Ex: 18:00" className={fieldClass} />
                    </div>
                  </div>

                  <Separator className="my-4 bg-white/10" />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-white">Atendimento urgente</p>
                        <p className="text-xs text-white/50">Receba solicitacoes fora do horario padrao</p>
                      </div>
                      <span className="inline-flex h-6 w-11 rounded-full bg-white/18 p-1">
                        <span className="h-4 w-4 rounded-full bg-white" />
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-white">Atendimento online / remoto</p>
                        <p className="text-xs text-white/50">Aulas, consultorias e suporte por videochamada</p>
                      </div>
                      <span className="inline-flex h-6 w-11 justify-end rounded-full bg-sky-500 p-1">
                        <span className="h-4 w-4 rounded-full bg-white" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
    )
};