import { TiDelete } from 'react-icons/ti';
import { AiFillEdit } from 'react-icons/ai';
export default function List({ taskdata, handleRemove, handleEdit }) {
  return (
    <ul className="mt-6 mr-3">
      {taskdata.map((item) => (
        <li key={item.id} className="li">
          {item.taskval}
          <button
            type="button"
            onClick={() => handleRemove(item.id)}
            className="btn">
            <TiDelete />
          </button>
          <button
            type="button"
            onClick={() => handleEdit(item.id)}
            className="btn">
            <AiFillEdit />
          </button>
        </li>
      ))}
    </ul>
  );
}
