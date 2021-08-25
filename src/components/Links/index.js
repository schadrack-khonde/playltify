import React from 'react'
import { Link } from 'react-router-dom';
const Links = ({Path, Page }) => {
    return (
        <>
            <Link to={Path}>
                {Page}
            </Link>
        </>
    )
};
export default Links;
