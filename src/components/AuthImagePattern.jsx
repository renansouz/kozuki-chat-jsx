
const AuthImagePattern = ({ title, subtitle }) => {
  const pyramidRows = [1, 2, 3];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="mb-8 space-y-3">
          {pyramidRows.map((count, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-3">
              {[...Array(count)].map((_, i) => (
                <div
                  key={i}
                  className={`w-0 h-0 
                    border-l-[80px] border-r-[80px] border-b-[130px] 
                    border-l-transparent border-r-transparent 
                    border-b-primary/50 
                    ${i !== 0 ? "animate-pulse" : ""}
                    ${i !== 1 ? "animate-pulse" : ""}
                  `}
                ></div>
              ))}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
