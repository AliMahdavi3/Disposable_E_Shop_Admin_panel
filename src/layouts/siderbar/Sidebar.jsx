import React, { useContext } from 'react'
import {
    FaBars,
    FaRegTimesCircle,
    FaTachometerAlt,
    FaDollyFlatbed,
    FaDolly,
    FaFileContract,
    FaHeadset,
    FaImage,
    FaImages,
    FaLaptopCode,
    FaPencilAlt,
    FaIndent
} from 'react-icons/fa';
import { ActiveContext } from '../../context/ActiveContext';
import SidebarLinks from './SidebarLinks';
import Avatar from './Avatar';

const Sidebar = () => {

    const { handleSideBar, active } = useContext(ActiveContext);

    return (
        <div className={`overflow-x-hidden hide_scrollbar h-[calc(100vh-2rem)] sidebar my-3 md:ms-3 rounded-xl bg-white box_shadow ${active ? "active" : 'ms-3'}`}>
            <div className='ps-2 pt-2 menu_btn text-xl'>
                {
                    active ? (
                        <button onClick={handleSideBar} className='px-2 py-2 rounded-3'>
                            <FaBars className='text-mgreen' />
                        </button>
                    ) : (
                        <button onClick={handleSideBar} className='px-2 py-2 rounded-3'>
                            <FaRegTimesCircle className='text-rose-600' />
                        </button>
                    )
                }
            </div>

            <Avatar imageUrl="/assets/images/avatar.png" name='سیدعلی مهدوی' active={active} />

            <div className='hide_scrollbar scrollable_menu overflow-x-hidden pb-3'>
                <SidebarLinks path='/' icon={<FaTachometerAlt />} active={active} title="داشبورد" />
                <SidebarLinks path='/product' icon={<FaDollyFlatbed />} active={active} title="مدیریت محصولات" />
                <SidebarLinks path='/orders' icon={<FaDolly />} active={active} title="مدیریت سفارشات" />
                <SidebarLinks path='/blog' icon={<FaFileContract />} active={active} title="مدیریت وبلاگ" />
                <SidebarLinks path='/questions' icon={<FaIndent />} active={active} title="مدیریت سوالات" />
                <SidebarLinks path='/banners' icon={<FaImage />} active={active} title="مدیریت بنرها" />
                <SidebarLinks path='/slider' icon={<FaImages />} active={active} title="مدیریت اسلایدر" />
                <SidebarLinks path='/discount' icon={<FaLaptopCode />} active={active} title="مدیریت تخفیف ها" />
                <SidebarLinks path='/comments' icon={<FaPencilAlt />} active={active} title="مدیریت نظرات" />
                <SidebarLinks path='/feedback' icon={<FaHeadset />} active={active} title="پشتیبانی" />
            </div>

        </div>
    )
}



export default Sidebar
