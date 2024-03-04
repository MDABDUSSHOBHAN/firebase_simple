import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    // const phones = useLoaderData();
    return (
        <div>

            <h2>This is Home Section</h2>
            <p>Phone Data</p>
            {/* {

                phones.map(phone=> <li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
            } */}
        </div>
    );
};

export default Home;