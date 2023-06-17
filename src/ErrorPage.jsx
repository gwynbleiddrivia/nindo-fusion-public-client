import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
        return (
                <div className="flex justify-around flex-col text-white align-items backdrop-blur w-full h-full">
                        <p className="text-7xl my-auto text-center">404 Error! </p>                                  
                        <img className="w-fit m-auto" src="https://i.ibb.co/NyfXfP3/20602785-6325254-copy-1.jpg" alt=""/>
                        <div className="my-auto">
                        <p className="mb-3 text-center">Ooops, you seem to be lost!!</p>
                        <p className="text-center"> Let's go <Link to="/"> <button className="btn btn-bordered border-white bg-transparent mx-1">Home</button> </Link> to find ourselves.</p>
                        </div>
                        <div className="">

                        </div>
                                </div>
        );
};

export default ErrorPage;

