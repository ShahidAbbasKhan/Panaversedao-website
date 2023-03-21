import { FC } from "react";
const QuarterBox: FC<{ header: string; descrp: string; numb: number }> = ({
  header,
  descrp,
  numb,
}) => {
  return (
    <div className="border rounded-md border-teal-700  shadow-lg shadow-teal-800 w-4/12 px-8 py-8 relative">
      <h4 className="text-lg font-bold">{header}</h4>
      <p className="mt-2 text-slate-800">{descrp}</p>
      <div className="absolute top-0 right-12 text-9xl font-bold text-gray-300 -z-20 hove:scale-110">
        {numb}
      </div>
    </div>
  );
};

export default QuarterBox;
