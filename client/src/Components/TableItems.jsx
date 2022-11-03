import React from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'


function TableItems({item}) {
    
    const {id} = useParams()
    
    return (
        <tbody className='border-b-2 border-gray-400' key={item._id}>
            <tr class="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.createdAt.slice(0,10)}
                </th>
                <td class="text-black py-4 px-6">
                    {item.product}
                </td>
                <td class="py-4 px-6">
                    {item.status !== "closed" ? (<p className='border-2 bg-green-500 px-5 rounded-full text-white text-center' >{item.status}</p>) 
                    :
                    (<p className='border-2 bg-red-500 px-5 rounded-full text-white text-center' >{item.status}</p>)}
                    
                </td>
                <td class="py-4 px-6">
                    <Link to={`/tickets/${item._id}`}>
                        <button className='border-2 bg-white text-black px-10 rounded-lg'>View</button>
                    </Link>
                    
                </td>
            </tr>
        </tbody>
    )
}

export default TableItems