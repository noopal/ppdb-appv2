import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const Profile = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <h1>Profile</h1>
        </React.Fragment>
    );
};
Profile.layout = (page) => <Layout children={page} />;

export default Profile;
