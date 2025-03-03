import { useState, useEffect } from 'react';

export function usePortfolioData(username) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // In production, this would be an API call
                const response = await fetch('/FakeData.json');
                const jsonData = await response.json();
                
                if (username) {
                    const userData = jsonData.users.find(user => user.username === username);
                    setData(userData || null);
                } else {
                    setData(jsonData.users);
                }
                
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }

        fetchData();
    }, [username]);

    return { data, loading, error };
} 