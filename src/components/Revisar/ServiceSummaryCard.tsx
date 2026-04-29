import Badge from "./Badge";

type ServiceSummaryCardProps = {
  title: string;
  description: string;
  price: string;
  badges: { color: "blue" | "green"; label: string }[];
};

const ServiceSummaryCard = ({ title, description, price, badges }: ServiceSummaryCardProps) => {
  return (
    <div className="rounded-xl border border-[#dedad0] bg-white overflow-hidden">
      <div className="flex h-[92px] items-center justify-center bg-[#efece3] text-3xl">⚡</div>
      <div className="space-y-2 p-3.5">
        <div className="text-[10px] uppercase tracking-wider text-[#8a8a82]">Reformas</div>
        <div className="text-sm font-semibold text-[#1a1a18]">{title}</div>
        <div className="text-xs leading-relaxed text-[#6a6a62]">{description}</div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex gap-1">
              {badges.map((badge, index) => (
                <Badge key={index} color={badge.color}>
                  {badge.label}
                </Badge>
              ))}
            </div>
            <div className="text-[10px] text-[#d08d14]">
              ★★★★★ <span className="text-[#8a8a82]">(novo)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-[#1a1a18]">{price}</div>
            <div className="text-[10px] text-[#8a8a82]">/ servico</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSummaryCard;