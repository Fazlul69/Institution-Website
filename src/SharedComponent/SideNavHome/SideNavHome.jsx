import React from 'react';
import Director from '../../Component/Director/Director';
import ImportantLink from '../../Component/ImportantLink/ImportantLink';
import Anthem from '../../Component/Anthem/Anthem';
import Helpline from '../../Component/Helpline/Helpline';
import Visitor from '../../Component/Visitor/Visitor';

const SideNavHome = () => {
    return (
        <div>
            <Director />
            <ImportantLink />
            <Anthem />
            <Visitor/>
            <Helpline />
        </div>
    );
};

export default SideNavHome;