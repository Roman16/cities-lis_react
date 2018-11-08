import React from 'react';

const City = ({city, remove}) => {
    return(
        <tr>
            <td className='w-50'>{city.name}</td>
            <td className='w-50'>{city.region_name}</td>
            <td
                onClick={() =>remove(city.id)}
            style={{cursor: 'pointer', fontWeight: 'bold'}}
            >X</td>
        </tr>
    )
};

export default City;