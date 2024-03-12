const ContainerError = ({ height = 85, unit = "vh" }) => {
  return (
    <div className={`h-[${height}${unit}] flex justify-center items-center`}>
      <h1>Please check your internet connection</h1>
    </div>
  );
};

export default ContainerError;
