const Button = ({ text }: { text: string }) => {
  return (
    <button className=" font-medium text-xl text-white rounded-full py-3 px-5   bg-teal-800 hover:scale-105 duration-200">
      {text}
    </button>
  );
};

export default Button;
