import { FiChevronRight } from 'react-icons/fi';

const ChildCategories = ({childCategory}) => {
    const {title, grandChildCategories} = childCategory;
    return (
        <div className="group/child text-black flex justify-between items-center gap-10 py-1 px-2 hover:bg-blue-100 hover:text-blue-700">
            <a href="">{title}</a>
            <FiChevronRight className='invisible group-hover/child:visible' />
            <div className='absolute left-56 top-0 invisible bg-white group-hover/child:visible w-full h-full'>
                {
                    grandChildCategories.map(grandChildCategory => <a href='' className='text-black block gap-10 py-1 px-2 hover:bg-blue-100 hover:text-blue-700' key={grandChildCategory.id}>{grandChildCategory.title}</a>)
                }
            </div>
        </div>
    );
};

export default ChildCategories;