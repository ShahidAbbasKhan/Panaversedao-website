import { FC } from "react";
interface IProps {
  header: string;
  descrp: string;
  numb: number;
  haveBorder?: boolean;
}
const QuarterBox: FC<IProps> = ({
  header,
  descrp,
  numb,
  haveBorder = true,
}) => {
  return (
    <div
      className={`rounded-md border-teal-500  shadow-md shadow-teal-800 flex-1  items-stretch px-8 py-8 relative ${
        haveBorder && "border"
      }`}
    >
      <h4 className="text-lg font-bold">{header}</h4>
      <p className="mt-2 text-slate-800">{descrp}</p>
      <div className="absolute top-0 right-12 text-9xl font-bold text-gray-300 -z-20 ">
        {numb}
      </div>
    </div>
  );
};

export default QuarterBox;
