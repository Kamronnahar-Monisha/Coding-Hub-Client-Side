import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog container my-5'>
            <div className="blog-box rounded custom-shadow p-5 w-75 mx-auto text-center my-5">
                <h3 className='theme-color fw-bold mb-4'>what is cors?</h3>
                <p className='text-muted'>
                    CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                </p>
            </div>
            <div className="blog-box rounded custom-shadow p-5 w-75 mx-auto text-center my-5">
                <h3 className='theme-color fw-bold mb-4'>
                    Why are you using firebase? What other options do you have to implement authentication?
                </h3>
                <p className='text-muted'>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    <br />
                    There are few other alternative if firebase.Like
                    <br />
                    1. Auth0
                    <br />
                    2. Okta
                    <br />
                    3. Keycloak
                    <br />
                    4. Amazon Cognito

                </p>
            </div>
            <div className="blog-box rounded custom-shadow p-5 w-75 mx-auto text-center my-5">
                <h3 className='theme-color fw-bold mb-4'>How does the private route work?</h3>
                <p className='text-muted'>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
            </div>
            <div className="blog-box rounded custom-shadow p-5 w-75 mx-auto text-center my-5">
                <h3 className='theme-color fw-bold mb-4'>What is Node? How does Node work?</h3>
                <p className='text-muted'>
                    Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
            </div>
        </div>
    );
};

export default Blog;