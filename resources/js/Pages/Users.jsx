import React from "react";

const User = ({ users, create_url }) => {
    console.log("users", users);
    return (
        <React.Fragment>
            <h1>Test</h1>
            {users.map((user) => (
                <ul key={user.id}>
                    <li>{user.id}</li>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                </ul>
            ))}
        </React.Fragment>
    );
};

export default User;
