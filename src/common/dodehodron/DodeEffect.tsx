const DodeEffect = () => {
  return (
    <div className="mil-dodecahedron">
      {[...Array(12)].map((_, i) => (
        <div key={i} className={`mil-pentagon face-${i + 1}`}>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
        </div>
      ))}
    </div>
  );
};

export default DodeEffect;
