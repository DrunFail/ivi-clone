import React, { useEffect, useState } from "react";
import useAxiosAuth from "../hooks/useAxiosAuth";

export default function TestUsers() {
    const [users, setUsers] = useState();
    const axiosAuth = useAxiosAuth();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const fetchUsers = async () => {
            try {
                const response = await axiosAuth.post("/api/roles", {
                    signal: controller.signal
                });
                isMounted && setUsers(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUsers();
        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    return (
        <div>
            {users?.length
                ? <div>{users.map(user => <p key={user.id}>{user?.name}</p>)}</div>
                : <div>no users</div>
            }
        </div>
    );
}
