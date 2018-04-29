interface Parameters {
    url?: string,
    request?: Request,
    body?: any, //JSON.stringify(data), // must match 'Content-Type' header
    cache?: string, // 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials?: string, // include, same-origin, *omit
    headers?: Headers,
    method?: string, // *['delete', 'get', 'head', 'post', 'put', 'patch', 'request'].
    mode?: string, // no-cors, cors, *same-origin
    redirect?: string, // manual, *follow, error
    referrer?: string// *client, no-referrer
}

const headers = { 'Content-Type': 'application/json' } // TODO integrate token

const serializeObject = (obj: any) => {
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
}

const fecher = (url: string, options: any = { method: 'GET' }): Promise<Response> => {
    let endPointUrl = url;
    if (['delete', 'get', 'head'].indexOf(options.method.toLowerCase()) > -1) {
        const paramStr = (options.body && serializeObject(options.body)) || '';
        endPointUrl = `${url}?${paramStr}`
    }
    try {
        return fetch(endPointUrl, { headers, ...options })
    } catch (error) {
        console.error(error || 'api err...')
    }

}

export default fecher;