const ErrorMessage = ({error}: any) => {
  return (
    <span className="text-[12px] text-[#F31260] absolute -bottom-6 ">
      {error && error.message}
    </span>
  );
};

export default ErrorMessage;
