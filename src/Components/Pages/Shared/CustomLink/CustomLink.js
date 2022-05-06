import React from 'react';
import './CustomLink.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    fontWeight: match? "800": "600",
                    color: match ? "orange" : "white",
                    textDecoration: "none"
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && "*"}
        </div>
    );
}

export default CustomLink;