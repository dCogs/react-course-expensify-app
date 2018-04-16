import React from 'react';
import { Link } from 'react-router-dom';

const AoiListItem = ({requestid, aoidescr }) => (
    <div>
            { requestid }
        &nbsp;{ aoidescr }
    </div>
);

export default AoiListItem;