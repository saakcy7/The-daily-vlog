import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs]=useState([
        {title: 'My new website', body: 'lorem ipsum....', author: 'mario',id:1},
        {title: 'Welcome party', body: 'lorem ipsum....', author: 'yoshi',id:2}

    ]

    );
    return ( 
        <div className="home">
          <BlogList blogs={blogs} title="All-Blogs"/>
        </div>
     );
}
 
export default Home;