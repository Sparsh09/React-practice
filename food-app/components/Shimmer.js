export const Shimmer = () => {
  return (
    <div>
      <div className="restrauant-list">
        {Array(10)
          .fill("")
          .map((v, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </div>
  );
};
