import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-full h-96" >
                <div className="hero-content text-center">
                    <div className="max-w-md flex flex-col items-center justify-center">
                        <h1 className="text-5xl font-bold">Apprenez l'anglais</h1>
                        <p className="py-6">Petit site en react pour réviser ses TP / Acronymes</p>
                        <div className='grid grid-flow-col gap-3'>
                            <Link to="/tp" className="btn btn-wide btn-primary">TP</Link>
                            <Link to="/acronym" className="btn btn-wide btn-primary">Acronymes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
