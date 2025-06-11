import { useEffect } from 'react';


const Contribute = () => {


    useEffect(() => {
        // For external URLs, we still need full page redirect
        window.location.replace("https://surveyheart.com/form/68148dbce327a67d7af73d1d");
    }, []);

    // Optional: show loading state for 1-2 seconds before redirect
    return <div>Redirecting to contribution page...</div>;
};

export default Contribute;