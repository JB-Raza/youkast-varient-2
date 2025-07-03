import React, {useEffect} from 'react'

import Table from '../../sections/dashboard/Table.jsx'

export default function ActivityPage() {


    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])
        
    return (
        <div className='px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-15'>
            <h3 className="inter-font text-[20px] sm:text[24px] md:text-[28px] mb-5 font-medium tracking-wide">Recent Activity</h3>
            <p className="inter-font text-[#838383] text-[16px] sm:text-[17px] tracking-wide flex gap-2 items-center">Recent Uploaded Documents <span className="bg-[#2D63C4] flex items-center justify-center h-[20px] w-[20px] rounded-sm text-sm text-white">{documents.length}</span></p>

            <div className="custom-container !mt-10">
                <Table
                    data={documents}
                    fields={["id", "documentName", "dateUploaded", "linkExpired"]}
                    headers={["ID", "Document Name", "Date Uploaded", "Link Status"]}
                />
            </div>
        </div>
    )
}




// sample data
const documents = [
    {
        id: 1,
        documentName: "Resume_JaneDoe.pdf",
        dateUploaded: "2024-08-15",
        linkExpired: "Live",
    },
    {
        id: 2,
        documentName: "ProjectProposal_April2024.docx",
        dateUploaded: "2024-08-10",
        linkExpired: "Expired",

    },
    {
        id: 3,
        documentName: "MarketingPlan_Q3.xlsx",
        dateUploaded: "2024-08-05",
        linkExpired: "Expired",

    },
    {
        id: 4,
        documentName: "Invoice_#12345.pdf",
        dateUploaded: "2024-08-02",
        linkExpired: "Expired",


    },
    {
        id: 5,
        documentName: "ProductManual_v2.pdf",
        dateUploaded: "2024-07-28",
        linkExpired: "Live",


    },
    {
        id: 6,
        documentName: "ReactJS.pdf",
        dateUploaded: "2024-07-28",
        linkExpired: "Expired",

    }
];
