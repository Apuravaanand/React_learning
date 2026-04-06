
import React, { useEffect, useState } from "react";

function Assign6_PaginationTab() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const maxVisible = 7;

    // Fetch API data
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // Pagination Logic
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    // Dynamic Page Window (max 7 buttons)
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (loading) {
        return <h2 className="text-center mt-10">Loading...</h2>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">

            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">Posts</h1>

            {/* Data List */}
            <div className="w-full max-w-lg bg-white shadow rounded-lg p-5">
                {currentItems.map((item) => (
                    <div key={item.id} className="border-b py-3">
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.body}</p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-2 mt-6 flex-wrap justify-center">

                {/* Prev */}
                <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded bg-white hover:bg-gray-200 disabled:opacity-50"
                >
                    Prev
                </button>

                {/* Show first page + dots */}
                {startPage > 1 && (
                    <>
                        <button
                            onClick={() => setCurrentPage(1)}
                            className="px-3 py-1 border rounded bg-white"
                        >
                            1
                        </button>
                        {startPage > 2 && <span>...</span>}
                    </>
                )}

                {/* Page Numbers */}
                {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
                    const page = startPage + i;
                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 border rounded ${currentPage === page
                                    ? "bg-blue-500 text-white"
                                    : "bg-white hover:bg-gray-200"
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}

                {/* Show last page + dots */}
                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <span>...</span>}
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            className="px-3 py-1 border rounded bg-white"
                        >
                            {totalPages}
                        </button>
                    </>
                )}

                {/* Next */}
                <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded bg-white hover:bg-gray-200 disabled:opacity-50"
                >
                    Next
                </button>

            </div>
        </div>
    );
}

export default Assign6_PaginationTab;