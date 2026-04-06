import React from "react";

const Button5 = ({
    children,
    variant = "primary",
    loading = false,
    icon,
    onClick,
}) => {

    const baseStyle = "px-4 py-2 rounded text-white flex items-center gap-2";

    const variants = {
        primary: "bg-blue-500 hover:bg-blue-600",
        secondary: "bg-gray-500 hover:bg-gray-600",
        danger: "bg-red-500 hover:bg-red-600",
    };

    return (
        <button
            onClick={onClick}
            disabled={loading}
            className={`${baseStyle} ${variants[variant]} ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
            {loading && <span className="animate-spin">⏳</span>}

            {!loading && icon && <span>{icon}</span>}

            {children}

        </button>
    );
};

export default Button5;