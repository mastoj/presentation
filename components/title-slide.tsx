type Props = {
  title: string;
  subtitle?: string;
  date: Date;
};

const TitleSlide = ({ title, subtitle, date }: Props) => {
  // To yyyy-MM-dd string
  const dateString = date.toISOString().split("T")[0];
  return (
    <div className="flex flex-col h-full w-full justify-center items-end gap-4 px-32">
      <h1 className="text-4xl text-right max-w-4xl">{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <p className="italic">
        <span>Tomas Jansson</span> - {dateString}
      </p>
    </div>
  );
};

export default TitleSlide;
