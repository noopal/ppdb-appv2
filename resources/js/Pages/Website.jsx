import React from "react";
import { Helmet } from "react-helmet";
import NavbarWebsite from "../components/NavbarWebsite";
import HomeWebsite from "../components/HomeWebsite";
import ProfileSekolah from "../components/ProfileSekolah";
import JurusanWebsite from "../components/JurusanWebsite";
import BeritaWebsite from "../components/BeritaWebsite";
import FooterWebsite from "../components/FooterWebsite";

const Website = ({ jurusans, sekolahs }) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <NavbarWebsite />
                <HomeWebsite />
                <JurusanWebsite jurusans={jurusans} />
                {/* <BeritaWebsite /> */}
                <ProfileSekolah sekolahs={sekolahs} />
                <FooterWebsite />
            </div>
        </React.Fragment>
    );
};

export default Website;
