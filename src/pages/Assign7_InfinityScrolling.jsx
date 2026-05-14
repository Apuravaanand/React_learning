import React, { useState, useEffect, useRef } from "react";
import Loader from "../components/Loader";

const Assign7_InfinityScrolling = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);

    const fetchPhotos = async () => {
        if (loading) return;

        try {
            setLoading(true);

            const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=1`);

            const data = await res.json();

            setPhotos((prev) => [...prev, ...data]);
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    setPage((prev) => prev + 1);
                }
            },
            { rootMargin: "200px" }
        );

        if (loaderRef.current) observer.observe(loaderRef.current);

        return () => observer.disconnect();
    }, [loading]);

    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">

            {photos.map((photo) => (
                <div
                    key={photo.id}
                    className="h-screen w-full flex items-center justify-center snap-start bg-gray-200"
                >
                    <img
                        src={`https://picsum.photos/id/${photo.id}/800/400`}
                        alt="img"
                        loading="lazy"
                        className="w-full h-full object-contain object-center"
                    />
                </div>
            ))}

            <div ref={loaderRef} className="h-10 m-20 flex items-center justify-center">
                {loading && <p><Loader /></p>}
            </div>
        </div>
    );
};

export default Assign7_InfinityScrolling;