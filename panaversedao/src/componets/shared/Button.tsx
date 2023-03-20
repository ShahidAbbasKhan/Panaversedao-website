const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-[#00616C] font-medium text-xl text-white rounded-full py-3 px-5  shadow-lg hover:scale-105 ">
      {text}
    </button>
  );
};

export default Button;
