import React from 'react';
import SideBar from '../Blog/Area/SideBar';
import { useParams } from 'react-router-dom';
import AuthorCard from '../../components/author/AuthorCard';
import Breadcrumb from '../../components/theme/Breadcrumb';
import Container from '../../components/theme/Container';
import data from '../../data/data.json';
import BlogTheme270x270 from '../../components/blog/BlogTheme270x270';

const Author = (props) => {
    const params = useParams();
    const dataAuthor = data.author.filter((item) => item.slug == params.authorSlug)[0];
    const dataBlog = data.blog.filter((item) => item.author_slug == params.authorSlug);
    return (
        <>
            <Breadcrumb data={[{ slug: 'author-' + dataAuthor.slug, title: dataAuthor.name }]} title={dataAuthor.name} />
            <Container>
                <div className="col-lg-9 pd-top-50 mb-5">
                    <AuthorCard data={dataAuthor} />
                    <div class="section-title pd-top-80"><h6 class="title">Articles By This Author</h6></div>

                    {dataBlog.map((item) => (
                        <BlogTheme270x270 data={item} />
                    ))}
                </div>
                <div className="col-lg-3 pd-top-50 mb-5">
                    <SideBar />
                </div>
            </Container>
        </>

    );
}
export default Author;