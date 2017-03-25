import React from 'react';
import MdInfoOutline from 'react-icons/lib/md/info-outline';
import MdInfo from 'react-icons/lib/md/info';

export const PhoneInfo = ({isOpen, handleClose}) =>  (
    <span id="phone-info" onClick={handleClose}>
        {isOpen ? <MdInfo size={24} /> : <MdInfoOutline size={24} />}
    </span>
);