import React from 'react';
import Td from 'features/QnA/components/Td';

const Tr = ({info, handleRemove, handleEdit}) => {
    return(
        <tbody>
            {
                info.map(item => {
                    return (
                        <Td key={item.id} item={item} handleRemove={handleRemove}
                        handleEdit={handleEdit}/>
                    )
                })
            }
        </tbody>
    );
};

export default Tr;

