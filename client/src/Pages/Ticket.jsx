import React from 'react'
import TableItems from '../Components/TableItems'

function Ticket() {
    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <div className='flex justify-start sm:w-[60%]'>
                <button className=' border-2 w-[150px] h-[50px] rounded-xl text-center my-4'>Back</button>
            </div>
            
            <h1 className='my-4 font-bold text-2xl'>Tickets</h1>
            <div>
                <div class="overflow-x-auto relative">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Date
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Product
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Status
                                </th>
                                <th scope="col" class="py-3 px-6">

                                </th>
                            </tr>
                        </thead>

                        <TableItems />
                        <TableItems />

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Ticket