import React from 'react'


function TableItems() {
    
    return (
        <tbody className='border-b-2 border-gray-400'>
            <tr class="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1/14/2022, 1:45:09 PM
                </th>
                <td class="text-black py-4 px-6">
                    Macbook Pro
                </td>
                <td class="py-4 px-6">
                    <p className='border-2 bg-green-500 px-5 rounded-full text-white text-center' >new</p>
                </td>
                <td class="py-4 px-6">
                    <button className='border-2 bg-white text-black px-10 rounded-lg'>View</button>
                </td>
            </tr>
        </tbody>
    )
}

export default TableItems