type CheckItemProps = {
  ok: boolean;
  label: string;
};

const CheckItem = ({ ok, label }: CheckItemProps) => (
  <div className="flex items-center gap-2 py-1 text-xs text-[#5e5e56]">
    <span className={`${ok ? "text-[#1a6e3c]" : "text-[#b42318]"} text-[13px]`}>
      {ok ? "✓" : "✗"}
    </span>
    {label}
  </div>
);

export default CheckItem;