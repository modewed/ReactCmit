import React from 'react';

const List = (props) => {
    return (
        <ul>
            {props.list.map(li=>
                <li>{li}</li>
            )}
        </ul>
    );
};

export default List;