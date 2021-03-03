import React from 'react';
import BlogTheme100x85 from '../../../components/blog/BlogTheme100x85';
import BlogTheme370x270 from '../../../components/blog/BlogTheme370x270';
import CategoryTheme304x130 from '../../../components/category/CategoryTheme304x130';
import data from '../../../data/data.json';

const CategorySideBar = (props) => {
    return (
        <div className={"category-sitebar"}>
            <div className={"widget widget-category"}>
                <div className="widget-title">
                    <h6 className="title">Category</h6>
                </div>
                <div className={"row"}>
                    {data.category.map(item => (
                        <CategoryTheme304x130 data={item} className={"col-sm-6"} />
                    ))}
                </div>
            </div>
            <div className={"widget widget-category"}>
                <div className="widget-title">
                    <h6 className="title">Blog of Today</h6>
                </div>
                <div>
                    {data.blog4.map(item => (
                        <BlogTheme370x270 data={item} />
                    ))}
                </div>
            </div>
            <div className={"widget widget-category"}>
                <div className="widget-title">
                    <h6 className="title">Popular Blog</h6>
                </div>
                <div>
                    {data.blog3.map(item => (
                        <BlogTheme100x85 data={item} />
                    ))}
                </div>
            </div>
            <div class="widget widget-social">
                <h6 class="widget-title">Join to Us</h6>
                <ul class="social-area social-area-2">
                    <li>
                        <a class="facebook-icon" href="">
                            <i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a class="twitter-icon" href=""><i class="fa fa-twitter"></i></a>
                    </li>
                    <li><a class="youtube-icon" href=""><i class="fa fa-youtube-play"></i></a>
                    </li>
                    <li><a class="instagram-icon" href=""><i class="fa fa-instagram"></i></a>
                    </li>
                    <li><a class="google-icon" href=""><i class="fa fa-google-plus"></i></a>
                    </li></ul></div>

        </div>

    );
}
export default CategorySideBar;