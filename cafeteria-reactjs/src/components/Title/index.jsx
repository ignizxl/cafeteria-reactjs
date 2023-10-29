import "./index.css";

export default function Title({ children }) {
  return (
    <div className="box-title">
      <h1>{children}</h1>
    </div>
  );
}
