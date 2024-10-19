import React from 'react';

function CompletedList(props) {
  return (
    <li className='completed-item'>
      {props.items} {/* Show completed task */}
    </li>
  );
}

export default CompletedList;
