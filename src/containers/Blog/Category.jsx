import React from 'react'
import Breadcrumb from '../../components/theme/Breadcrumb';
import Container from '../../components/theme/Container';
import CategorySideBar from './Area/SideBar';
import CategoryList from './Area/CategoryList';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';

const Category = (props) => {
    const params = useParams();
    const dataCategory = data.category.filter((item) => item.slug == params.categorySlug)[0];
    const categoryBlogs = data.blog.filter((item) => item.category_slug == params.categorySlug);
    return (
        <>
            <Breadcrumb data={[{ slug: 'cat-' + dataCategory.slug, title: dataCategory.name }]} title={dataCategory.name} />
            <Container>
                <div className="col-lg-9 pd-top-50">
                    <div className="row">
                        <CategoryList data={categoryBlogs} />
                    </div>
                </div>
                <div className="col-lg-3 pd-top-50">
                    <CategorySideBar />
                </div>
            </Container>
        </>

    );
}
export default Category;