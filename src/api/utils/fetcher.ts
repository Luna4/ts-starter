type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
    body?: any;
    method?: HttpMethods;
}

const defaultFetchOptions: Partial<FetchOptions> = {
    method: 'GET'
};

export const fecher = async <T>(url: string, options: FetchOptions = defaultFetchOptions): Promise<T> => {
    const response = await fetch(url, {
        method: options.method,
        body: options.body ? JSON.stringify(options.body) : options.body
    });

    if (response.status === 201 || response.status === 204) return {} as T;
    if (response.ok) return response.json();
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
        const errorResponse = await response.json();
        return Promise.reject(errorResponse);
    }
    return Promise.reject(response);
};

export const serializeObjectToParamString = (obj: any): string => {
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
};