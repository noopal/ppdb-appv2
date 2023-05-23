import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const Home = ({ Sekolahs, Users }) => {
    console.log(Sekolahs);
    console.log(Users);
    return (
        <React.Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <p>sejarah sekolah</p>
            <p>{Sekolahs.sejarah_sekolah}</p>
            {Users.map((user) => (
                <p key={`Users_${user.id}`}>{user.name}</p>
            ))}
        </React.Fragment>
    );
};

Home.layout = (page) => <Layout user={page.props.user} children={page} />;

export default Home;
