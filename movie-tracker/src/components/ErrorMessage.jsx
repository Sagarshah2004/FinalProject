const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center text-red-500 text-xl py-10">
      {message}
    </div>
  );
};

export default ErrorMessage;