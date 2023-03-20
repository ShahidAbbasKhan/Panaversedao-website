const Button = ({ text }: { text: string }) => {
  return (
    <button className=" font-medium text-xl text-white rounded-full py-3 px-5   bg-teal-700 hover:bg-teal-900 duration-200">
      {text}
    </button>
  );
};

export default Button;
