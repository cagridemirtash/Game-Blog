import React from 'react';
import CategorySideBar from './Area/SideBar';
import { useParams } from 'react-router-dom';
import BlogTheme1170x600 from '../../components/blog/BlogTheme1170x600';
import Breadcrumb from '../../components/theme/Breadcrumb';
import Container from '../../components/theme/Container';
import BlogTags from '../../components/blog/BlogTags';
import BlogShare from '../../components/blog/BlogShare';
import CommentUserCard from '../../components/comment/CommentUserCard';
import CommentForm from '../../components/form/CommentForm';
import data from '../../data/data.json';

const BlogDetail = (props) => {
    const params = useParams();
    const dataBlog = data.blog.filter((item) => item.slug == params.blogSlug)[0];
    console.log(data.comment);
    return (
        <>
            <Breadcrumb data={[{ slug: 'cat-' + dataBlog.category_slug, title: dataBlog.category }, { slug: dataBlog.slug, title: dataBlog.title }]} title={dataBlog.title} />
            <Container>
                <div className="col-lg-9 pd-top-50 mb-5">
                    <BlogTheme1170x600 data={dataBlog} />
                    <div className="mt-4 mb-4">
                        {dataBlog.content}
                    </div>
                    <div className="row">
                        <BlogTags className="col-sm-8" data={data.category} />
                        <BlogShare className="col-sm-4 text-right" />
                    </div>
                    <div class="blog-comment">
                        <div class="section-title">
                            <h4>3 Comments</h4>
                        </div>
                        {data.comment.map(item => (
                            <CommentUserCard data={item} className={item.comment_id && "nesting"} />
                        ))}
                    </div>
                    <CommentForm />
                </div>
                <div className="col-lg-3 pd-top-50">
                    <CategorySideBar />
                </div>
            </Container>
        </>

    );
}
export default BlogDetail;