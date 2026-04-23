import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const sectionClass = "border-[#dedad0] bg-[#fdfcf8] text-[#1a1a18]";
const fieldClass =
  "h-10 rounded-xl border-[#dedad0] bg-[#efece3] text-[#1a1a18] placeholder:text-[#8a8a82] focus-visible:border-[#1a1a18]";
const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

export const Disponibilidade = () =>{
    return(
        <Card className={sectionClass}>
                <div className="mb-4">
                  <h3 className="text-base font-semibold text-[#1a1a18] [font-family:Fraunces,serif]">Disponibilidade</h3>
                </div>
                <CardContent>
                  <div>
                    <Label className="mb-2 block text-sm font-medium text-[#4a4a44]">Dias da semana</Label>
                    <div className="flex flex-wrap gap-2">
                      {dias.map((dia, index) => (
                        <button
                          key={dia}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                            index < 5
                              ? "border-[#2350d4]/35 bg-[#eef1fc] text-[#2350d4]"
                              : "border-[#dedad0] bg-[#efece3] text-[#4a4a44]"
                          }`}
                        >
                          {dia}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <Label className="mb-1.5 block text-sm font-medium text-[#4a4a44]">Horario inicio</Label>
                      <Input type="text" placeholder="Ex: 08:00" className={fieldClass} />
                    </div>
                    <div>
                      <Label className="mb-1.5 block text-sm font-medium text-[#4a4a44]">Horario fim</Label>
                      <Input type="text" placeholder="Ex: 18:00" className={fieldClass} />
                    </div>
                  </div>

                  <Separator className="my-4 bg-[#dedad0]" />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-[#1a1a18]">Atendimento urgente</p>
                        <p className="text-xs text-[#8a8a82]">Receba solicitacoes fora do horario padrao</p>
                      </div>
                      <span className="inline-flex h-6 w-11 rounded-full bg-[#dedad0] p-1">
                        <span className="h-4 w-4 rounded-full bg-[#fdfcf8]" />
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-[#1a1a18]">Atendimento online / remoto</p>
                        <p className="text-xs text-[#8a8a82]">Aulas, consultorias e suporte por videochamada</p>
                      </div>
                      <span className="inline-flex h-6 w-11 justify-end rounded-full bg-[#2350d4] p-1">
                        <span className="h-4 w-4 rounded-full bg-[#fdfcf8]" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
    )
};