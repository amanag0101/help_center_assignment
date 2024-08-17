interface SectionCardProps {
  className?: string;
  title: string;
  description: string;
}

export const SectionCard = ({
  className = "",
  title,
  description,
}: SectionCardProps) => {
  return (
    <div className="bg-[#f4f6f8] border border-gray-400 rounded-md p-2">
      <p className={`${className} font-bold`}>{title}</p>

      <div className="bg-gray-400 w-full h-[1px]"></div>

      <p>{description}</p>
    </div>
  );
};
