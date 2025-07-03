import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'

import { ICONS } from '../../files.js'

// import 'primeicons/primeicons.css';



export default function Table({ data, fields, headers }) {
    const [globalFilter, setGlobalFilter] = useState('');


    // const columns = fields.map((field, i) => {
    //     if (headers[i] !== undefined || headers[i] !== null) return { field, header: headers[i] }
    //     return null
    // }).filter(Boolean) // this method still return the field even if its header is not given

    const columns = fields.reduce((acc, field, i) => {
        if (headers[i] !== undefined && headers[i] !== null) {
            acc.push({ field, header: headers[i] });
        }
        return acc;
    }, [])

    // header of table (where search bar exists)
    const renderTableHeader = () => {
        return (
            <div className="p-8 bg-[#F3F4F6]">
                <div className="flex relative w-min items-center gap-2">
                    <input
                        type="text"
                        placeholder="Keyword Search..."
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        className="border font-medium border-[#9EA2A8] outline-none text-neutral-600 bg-white rounded px-3 py-1.5 text-sm min-w-[250px]"
                    />
                    <img src={ICONS.TableSearchIcon} className='absolute right-2' alt="" />
                </div>
            </div>
        );
    };

    // action buttons
    const actionTemplate = (rowData) => {
        return (
            <div className="flex gap-3">
                <Button
                    icon="pi pi-eye"
                    className="p-button-rounded p-button-sm p-button-text"
                    // onClick={() => handleView(rowData)}
                    tooltip="View"
                />
                <Button
                    icon="pi pi-download"
                    className="p-button-rounded p-button-sm p-button-text"
                    // onClick={() => handleView(rowData)}
                    tooltip="Edit"
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-sm p-button-text"
                    // onClick={() => handleView(rowData)}
                    tooltip="Delete"
                />
            </div>
        )
    }

    return (
        <div className='rounded-2xl overflow-clip shadow-lg shadow-[rgba(0,0,0,0.2)] border-1 bg-[#F3F4F6] border-[#9EA2A8]'>

            <DataTable
                value={data}
                header={renderTableHeader}
                filterDisplay='row'
                globalFilterFields={["documentName", "dateUploaded"]}
                paginator
                rowsPerPageOptions={[5, 10, 15]}
                paginatorClassName='py-8 bg-white p-custom-paginator'
                rows={5}
                globalFilter={globalFilter}
                tableClassName='bg-white'
                style={{ boxShadow: "1px 1px 20px 2px lightgray" }}>
                {(columns || []).map((col, index) => (
                    <Column key={index}
                        field={col.field}
                        header={col.header}
                        headerClassName={`border border-b-0 border-l-0 border-[#9EA2A8] py-3 text-sm dm-sans-font text-nowrap font-semibold px-5`}
                        bodyClassName={`border border-l-0 border-gray-400 py-4 px-5 !text-sm dm-sans-font text-[#7A7F85] truncate max-w-[300px]`}
                    />
                ))}
                <Column
                    header={"Actions"}
                    body={(data) => actionTemplate()}
                    headerClassName={`border border-b-0 border-l-0 border-e-0 border-[#9EA2A8] py-3 text-sm dm-sans-font text-nowrap font-semibold px-5`}
                    bodyClassName={`border border-l-0 border-e-0 border-gray-400 py-4 px-5 !text-sm dm-sans-font text-[#7A7F85] truncate max-w-[300px]`}
                />
            </DataTable>
        </div>
    )
}


