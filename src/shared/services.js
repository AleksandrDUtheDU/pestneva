import { useState, useCallback } from 'react';

import Spinner from '../widgets/Spinner';
import ErrorMesage from '../widgets/errorMessage/ErrorMesage';

export const usePostData = () => {
    const [process, setProcess] = useState('waiting');
    const request = useCallback(async (body) => {
        setProcess('loading');
        // pestneva\src\mailer\smart.php
        try {
            const response = await fetch('sendmail.php', {
                method: 'POST',
                // headers: {
                //     'Content-type': 'application/json'
                // },
                body: body
            });
            if (!response.ok) {
                throw new Error(`Could not fetch mailer/smart.php , status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        }

        catch (e) {
            setProcess('error');
            throw e;
        }
    }, [])

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);

    return { request, clearError, process, setProcess }
}



export const setContent = (process, Component) => {
    switch (process) {
        case 'waiting':
            return <Spinner />;
        case 'loading':
            return <Spinner />;
        case 'confirmed':
            return <Component />;
        case 'error':
            return <ErrorMesage />;
        default:
            throw new Error('Unexpected process state')
    }
}

