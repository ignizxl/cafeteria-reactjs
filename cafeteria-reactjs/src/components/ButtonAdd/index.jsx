import "./index.css";

export default function ButtonAdd({ children }) {
  return (
    <div className="container-button">
      <div className="box-button">
        <button className="button-add">{children}</button>
      </div>
    </div>
  );
}
