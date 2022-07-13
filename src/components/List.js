import { TiDelete } from 'react-icons/ti';
import { AiFillEdit } from 'react-icons/ai';
import { FcCheckmark } from 'react-icons/fc';
export default function List({
  taskdata,
  handleRemove,
  taskEditing,
  setTaskEditing,
  setEditingText,
  submitEdits,
}) {
  return (
    <ul className="mt-6 mr-3 ">
      {taskdata.map((item) => (
        <li
          key={item.id}
          className=" li flex justify-between items-center text-ellipsis overflow-scroll ">
          {item.id === taskEditing ? (
            <input
              type="text"
              className=" border-black shadow appearance-none border rounded px-1  text-gray-700  focus:outline-none "
              onChange={(e) => setEditingText(e.target.value)}
            />
          ) : (
            item.taskval
          )}
          <div className="flex items-center">
            {item.id === taskEditing ? (
              <button className="" onClick={() => submitEdits(item.id)}>
                <FcCheckmark size="1.5rem" />
              </button>
            ) : (
              <button type="button" onClick={() => setTaskEditing(item.id)}>
                <AiFillEdit size="1.5rem" />
              </button>
            )}

            <button type="button" onClick={() => handleRemove(item.id)}>
              <TiDelete color="red" size="1.5rem" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
