import CheckItem from "./CheckItem";

type ChecklistProps = {
  items: { label: string; ok: boolean }[];
};

const Checklist = ({ items }: ChecklistProps) => {
  return (
    <div className="rounded-xl border border-[#dedad0] bg-[#f8f6f1] p-3.5">
      <div className="mb-2 text-sm font-semibold text-[#1a1a18]">
        Checklist de publicacao
      </div>
      {items.map((item, index) => (
        <CheckItem key={index} ok={item.ok} label={item.label} />
      ))}
    </div>
  );
};

export default Checklist;