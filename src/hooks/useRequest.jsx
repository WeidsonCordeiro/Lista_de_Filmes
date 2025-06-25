import { useState, useEffect } from "react";

const useRequest = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                if (!res.ok) throw new Error(`Erro: ${res.status}`);

                const data = await res.json();
                if (isMounted) setData(data);

            } catch (err) {
                console.error('Fetch error:', err.message);
                if (isMounted) setError(err.message);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };

    }, [url]);

    return { data, loading, error };
};

export default useRequest;
