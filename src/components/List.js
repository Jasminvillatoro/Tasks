import { TiDelete } from 'react-icons/ti';
import { AiFillEdit } from 'react-icons/ai';
export default function List({ taskdata, handleRemove, handleEdit }) {
  return (
    <ul className="mt-6 mr-3">
      {taskdata.map((item) => (
        <li key={item.id} className="li flex justify-between items-center ">
          {item.taskval}
          <div className="flex items-center">
            <button type="button" onClick={() => handleRemove(item.id)}>
              <TiDelete color="red" size="1.5rem" />
            </button>
            <button type="button" onClick={handleEdit}>
              <AiFillEdit size="1.5rem" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
