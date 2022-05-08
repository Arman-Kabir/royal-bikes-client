import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center mt-5 text-info'>My Blogs</h2>
            <div className='blogs-container container mt-3'>

                <div className='blog'>
                    <h3 className='text-center text-warning'>Difference between javascript and nodejs</h3>
                    <p>Javascript is a high-level programming language used to write scripts in any website
                        that runs in any browser javascript engine. For example- v8 engine,spider monkey etc. </p>
                    <p>Nodejs is a cross-platform and open-source javascript runtime environment that allows javascript
                        to run in server-side.
                    </p>
                    <p>Basically, JS was developed to run on websites.To run it every browser uses a javascript engine.Most famous
                        and fast browser engine is chrome v8 engine used in google chrome. Ryan Dhal a genius programmer took the chromes
                        v8 engine and wrote it in a way that it can run in server-side.
                    </p>
                    <p>Nodejs is based  on javascript</p>
                </div>

                <div className='blog'>
                    <h3 className='text-center text-warning'>When should you use nodejs and when should you use mongodb</h3>
                    <p>There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous
                         programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task
                        to be completed. In the meantime, NodeJS starts another job. When we do a project that has a lot of
                        ingoing and outgoing requests concurrently and every request may take some time. Nodejs is used in these kinds of project </p>

                        <p>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format.
                             MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. 
                             MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily.
                             When developer do a project that has to deal with lots of requests and database read/write, mongodb suits well
                             at these types of project</p>
                </div>

                <div className='blog'>
                    <h3 className='text-center text-warning'> Differences between sql and nosql databases.</h3>
                    <p>SQL databases are vertically scalable,while NoSQL databases are horizontally scalable.</p>
                    <p>SQL databases are table based,while NoSQL databases are document,key-value based.</p>
                    <p>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like
                        documents or JSON.</p>
                    <p>SQL databases are not suited for hierarchical data storage.While,NoSQL databases are best suited for hierarchical
                        data storage.</p>

                </div>

                <div className='blog'>
                    <h3 className='text-center text-warning'>What is the purpose of jwt and how does it work</h3>
                    <p>JWT- JSON Web Token is a standard used to create access tokens for an application.</p>
                    <p>The server generates a token that certifies the user identity, and sends it to the client.
                        The client will send the token  back to the server for every request,so the server knows the request comes from
                        a particular identity.
                        This process proves to be very effective in modern web apps, where after the user is authenticated we perform API
                        requests.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;