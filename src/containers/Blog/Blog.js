import React, { Component } from 'react';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
//import NewPost from '../Blog/NewPost/NewPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import axios from '../../axios';

import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent( () => {
    return import('../Blog/NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () {

        return (
            <div className='Blog'>
                <header >
                    <nav>
                        <ul>
                            <li><NavLink 
                                to='/posts/'
                                exact
                                >Posts</NavLink></li>
                            <li><NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'}}
                                    exact
                                    >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path='/new-post' exact component={ AsyncNewPost }/> : null}
                    <Route path='/posts' component={ Posts }/>
                    <Redirect from='/' to='/posts'/>
                    {/*<Route render={() => <h1>Not Found!</h1>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;