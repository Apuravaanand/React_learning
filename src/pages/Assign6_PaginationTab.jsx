import React, { useEffect, useState } from "react";

function Assign6_PaginationTab() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // 1. Initialize state from URL or default to 1
    const [currentPage, setCurrentPage] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return parseInt(params.get("page")) || 1;
    });

    const itemsPerPage = 6;
    const maxVisible = 5;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // 2. Sync URL when page changes
    useEffect(() => {
        const url = new URL(window.location);
        url.searchParams.set("page", currentPage);
        window.history.pushState({}, "", url);
    }, [currentPage]);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Dynamic Page Window logic
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800">
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Recent Insights</h1>
                    <p className="mt-3 text-slate-500 font-medium italic">
                        Saved to URL — Page {currentPage} of {totalPages}
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {currentItems.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-blue-400"
                        >
                            <span className="text-xs font-bold text-blue-600 uppercase mb-2">Post #{item.id}</span>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 capitalize">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-3">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-white border border-slate-300 rounded-lg font-semibold text-sm transition-all hover:bg-slate-100 disabled:opacity-30 shadow-sm"
                    >
                        &larr; Prev
                    </button>

                    {startPage > 1 && (
                        <div className="flex items-center gap-2">
                            <button onClick={() => handlePageChange(1)} className="h-10 w-10 flex items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-sm font-medium">1</button>
                            <span className="text-slate-400">...</span>
                        </div>
                    )}

                    <div className="flex gap-1.5">
                        {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
                            const page = startPage + i;
                            const isActive = currentPage === page;
                            return (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`h-10 w-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all border ${isActive
                                            ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200"
                                            : "bg-white border-slate-300 text-slate-600 hover:border-blue-500 hover:text-blue-500"
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </div>

                    {endPage < totalPages && (
                        <div className="flex items-center gap-2">
                            <span className="text-slate-400">...</span>
                            <button onClick={() => handlePageChange(totalPages)} className="h-10 w-10 flex items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-sm font-medium">{totalPages}</button>
                        </div>
                    )}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-white border border-slate-300 rounded-lg font-semibold text-sm transition-all hover:bg-slate-100 disabled:opacity-30 shadow-sm"
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Assign6_PaginationTab;