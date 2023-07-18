import { FiChevronRight } from 'react-icons/fi';
import ChildCategories from './ChildCategories';

const ParentCategories = ({ pCategory}) => {

    const { title, childCategories } = pCategory;
    return (

        <div className="flex justify-between items-center gap-10 group/parent py-1 px-2 hover:bg-blue-100 hover:text-blue-700">
            <a href="">{title}</a>
            <FiChevronRight className='invisible group-hover/parent:visible' />
            <div className='absolute left-56 top-0 invisible bg-white group-hover/parent:visible w-full h-full'>
                {
                    childCategories.map(childCategory => <ChildCategories key={childCategory.id} childCategory={childCategory}></ChildCategories>)
                }
            </div>
        </div>


    );
};

export default ParentCategories;