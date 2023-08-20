import { useEffect } from 'react';

const UseScrollTop = (pathname) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[pathname])
};

export default UseScrollTop;