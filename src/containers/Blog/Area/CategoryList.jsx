import React from 'react'
import BlogTheme370x270 from '../../../components/blog/BlogTheme370x270';

const CategoryList = (props) => {
    const { data } = props;
    console.log(data);
    return (
        data.map(item => (
            <BlogTheme370x270 className={"col-sm-4"} data={item} />
        ))
    );
}
export default CategoryList;