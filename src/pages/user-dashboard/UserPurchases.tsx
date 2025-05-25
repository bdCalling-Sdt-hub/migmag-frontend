'use client'

import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';

interface Purchase {
    title: string;
    artist: string;
    license: 'EXCLUSIVE' | 'NON-EXCLUSIVE';
    contract: string;
    contractUrl: string;
    downloadable: boolean;
}

const initialPurchases: Purchase[] = [
    {
        title: 'Lost In The Night',
        artist: 'Barbie Mack',
        license: 'EXCLUSIVE',
        contract: 'TuneM-lostinthe...pdf',
        contractUrl: '/contracts/TuneM-lostinthe.pdf',
        downloadable: true,
    },
    {
        title: 'Lost In The Night',
        artist: 'Barbie Mack',
        license: 'NON-EXCLUSIVE',
        contract: 'TuneM-lostinthe...pdf',
        contractUrl: '/contracts/TuneM-lostinthe.pdf',
        downloadable: false,
    },
    {
        title: 'Lost In The Night',
        artist: 'Barbie Mack',
        license: 'NON-EXCLUSIVE',
        contract: 'TuneM-lostinthe...pdf',
        contractUrl: '/contracts/TuneM-lostinthe.pdf',
        downloadable: false,
    },
    {
        title: 'Lost In The Night',
        artist: 'Barbie Mack',
        license: 'NON-EXCLUSIVE',
        contract: 'TuneM-lostinthe...pdf',
        contractUrl: '/contracts/TuneM-lostinthe.pdf',
        downloadable: false,
    },
];

const PurchasesTable = () => {
    const [purchases, setPurchases] = useState(initialPurchases);

    const toggleDownload = (index: number) => {
        const updated = [...purchases];
        updated[index].downloadable = !updated[index].downloadable;
        setPurchases(updated);

        if (updated[index].downloadable) {
            downloadContract(updated[index].contractUrl, updated[index].contract);
        }
    };

    const downloadContract = (url: string, filename: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
    };

    return (
        <div className=" text-white py-6 ">
            <h2 className="text-[#9C9C9C] font-semibold mb-4 text-lg">Your purchases</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="text-[#E7F056] text-sm">
                        <tr className="border-b border-[#333]">
                            <th className="py-2 text-xs lg:text-[16px] text-[#E7F056]">TITLE</th>
                            <th className="py-2 text-xs lg:text-[16px] text-[#E7F056]">ARTIST</th>
                            <th className="py-2 text-xs lg:text-[16px] text-[#E7F056]">LICENSE</th>
                            <th className="py-2 text-xs lg:text-[16px] text-[#E7F056]">CONTRACT</th>
                            <th className="py-2 text-xs lg:text-[16px] text-[#E7F056]  "></th>
                            <th className="py-2 text-xs lg:text-[16px] text-[#E7F056]  ">DOWNLOAD</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm  ">
                        {purchases.map((item, index) => (
                            <tr key={index} className="border-b border-[#333] ">
                                <td className="py-4 text-[#FFFFFF] font-bold leading-6 text-xs lg:text-[16px] underline">
                                    {item.title}
                                </td>
                                <td className="py-4 text-[#818080] text-[16px] leading-6">
                                    {item.artist}
                                </td>
                                <td className="py-4">
                                    <span
                                        className={`px-3 py-1 text-xs font-semibold rounded-full ${item.license === 'EXCLUSIVE'
                                            ? 'bg-[#C7FF3F] text-black'
                                            : 'bg-[#4F4F4F] text-white'
                                            }`}
                                    >
                                        {item.license}
                                    </span>
                                </td>
                                <td className="py-4 text-[#818080] underline text-[16px] leading-6">
                                    {item.contract}
                                </td>

                                <td className="py-4   gap-3">
                                    <button
                                        className="text-xs px-3 py-1 rounded-full bg-[#2C2C2C] text-[#9C9C9C] border border-[#444]"
                                        onClick={() => downloadContract(item.contractUrl, item.contract)}
                                    >
                                        View contract
                                    </button>

                                </td>
                                <td className='   ' >
                                    <button
                                        onClick={() => downloadContract(item.contractUrl, item.contract)}
                                        className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-[#2C2C2C] text-[#9C9C9C] border border-[#444] hover:bg-[#3a3a3a] transition"
                                    >
                                        <FiDownload size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 text-right">
                    <button className="text-white underline">View All</button>
                </div>
            </div>
        </div>
    );
};

export default PurchasesTable;
