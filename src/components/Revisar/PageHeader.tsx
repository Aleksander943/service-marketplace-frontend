type PageHeaderProps = {
  title: string;
  description: string;
};

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-[#1a1a18] [font-family:Fraunces,serif]">
        {title}
      </h1>
      <p className="mt-1.5 text-sm leading-relaxed text-[#8a8a82]">{description}</p>
    </div>
  );
};

export default PageHeader;