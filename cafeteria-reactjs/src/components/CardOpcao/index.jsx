import { FaPencilAlt, FaTrash } from "react-icons/fa";
import "./index.css";

export default function CardOpcao({ nameItem, sourceImage }) {
  return (
    <div className="card">
      <div className="box-name-and-options">
        <span>{nameItem}</span>
        <div className="buttons-add-del">
          <button>
            <FaPencilAlt />
          </button>
          <button>
            <FaTrash />
          </button>
        </div>
      </div>
      <div className="box-image">
        <img src={sourceImage} alt={nameItem} />
      </div>
    </div>
  );
}
