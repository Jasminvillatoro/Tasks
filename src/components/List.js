import React from 'react';

export default function List({ taskdata }) {
  return (
    <ul className="mt-6 mr-3">
      {taskdata.map((item) => (
        <li key={item.id} className="li">
          {item.taskval}
        </li>
      ))}
    </ul>
  );
}
