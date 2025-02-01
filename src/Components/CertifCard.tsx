import React from 'react';


type CertificateCardProps = {
    image: string; 
    title: string; 
};

const CertificateCard: React.FC<CertificateCardProps> = ({ image, title }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-100 object-cover" />
            <div className="p-4">
                <h2 className="text-sm font-2xl text-center text-gray-1000 ">{title}</h2>
            
            </div>
        </div>
    );
};

export default CertificateCard;