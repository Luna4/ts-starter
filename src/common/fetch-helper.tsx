const headers = { 'Content-Type': 'application/json' } // TODO integrate token

const serializeObject = (obj: any) => {
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
}

const fecher = (url: string, options: any = { method: 'GET' }): Promise<any> => {
    let endPointUrl = url;
    if (['delete', 'get', 'head'].indexOf(options.method.toLowerCase()) > -1) {
        const paramStr = (options.body && serializeObject(options.body)) || '';
        endPointUrl = `${url}?${paramStr}`
    }
    try {
        return fetch(endPointUrl, { headers, ...options }).
        then(response => {
            return response.ok ? Promise.resolve(response.json()) : Promise.reject(response)
        })
    } catch (error) {
        console.error(error || 'api err...')
    }

}

export default fecher;