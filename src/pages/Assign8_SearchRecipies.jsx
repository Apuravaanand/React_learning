import React, { useEffect, useState } from 'react';

const Assign8_SearchRecipies = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [cache, setCache] = useState({});

    // Fetch API
    const fetchData = async () => {
        if(cache[input]){
            console.log("Chached result : " + input);
            setResult(cache[input]);
            return;
        }

        const res = await fetch(`https://dummyjson.com/products/search?q=${input}`);
        const data = await res.json();
        setResult(data?.products || []);
        // caching the input in object using state
        setCache((prev) => ({...prev, [input] : data?.products}));
    };

    // useEffect(() => {
        // console.log("Api : " + input);
    //     fetchData();
    // }, [input]);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Api call for : " + input);
            if (input) {
                fetchData();
                setShowResults(true);
            } else {
                setResult([]);
            }
        }, 400);

        return () => clearTimeout(timer);
    }, [input]);

    return (
        <div className="flex items-center justify-center flex-col px-10 py-20 ">

            <h2 className="text-4xl font-bold text-white mb-8">
                Auto Complete Search Bar
            </h2>

            <div className="bg-white rounded-xl shadow-lg w-full max-w-xl relative">

                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => setShowResults(true)}
                    onBlur={() => setShowResults(false)}
                    placeholder="Search products..."
                    className="w-full px-4 py-3 rounded-xl outline-none border"
                />

                {showResults && result.length > 0 && (
                    <div className="absolute w-full bg-white border mt-1 rounded-xl shadow-md max-h-60 overflow-y-auto">

                        {result.slice(0, 7).map((r) => (
                            <div
                                key={r.id}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 border-b last:border-none"
                                onMouseDown={() => {
                                    setInput(r.title);
                                    setShowResults(false);
                                }}
                            >
                                {r.title}
                            </div>
                        ))}

                    </div>
                )}

            </div>

        </div>
    );
};

export default Assign8_SearchRecipies;