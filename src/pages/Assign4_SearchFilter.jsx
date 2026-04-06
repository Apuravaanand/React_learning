import React, { useState } from "react";

const Assign4_SearchFilter = () => {
    const [search, setSearch] = useState("");

    const users = [
        { name: "Apurava", age: 22 },
        { name: "Rahul", age: 25 },
        { name: "Priya", age: 23 },
        { name: "Aman", age: 21 },
        { name: "Rohit", age: 26 },
        { name: "Sneha", age: 24 },
    ];

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">

            <h1 className="text-2xl font-bold mb-5">User Search</h1>

            {/* Input */}
            <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-72 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Results */}
            <div className="mt-6 w-72">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                        <div
                            key={index}
                            className="bg-white p-3 rounded-lg shadow mb-3 flex justify-between"
                        >
                            <span className="font-medium">{user.name}</span>
                            <span className="text-gray-500">{user.age}</span>
                        </div>
                    ))
                ) : (
                    <p className="text-red-500 text-center mt-4">No users found</p>
                )}
            </div>

        </div>
    );
};

export default Assign4_SearchFilter;