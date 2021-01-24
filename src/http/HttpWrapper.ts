export interface HttpResponse<T> extends Response {
    parsedBody?: T;
}

const HttpWrapper = {
    get: async <T>(
        path: string,
        params: any,
        args: RequestInit = {method: "get"}
    ): Promise<HttpResponse<T>> => {
        const pathWithParams = `${path}?${new URLSearchParams(params)}`;
        return await http<T>(new Request(pathWithParams, args));
    },

    post: async <T>(
        path: string,
        body: any,
        args: RequestInit = {method: "post", body: JSON.stringify(body)}
    ): Promise<HttpResponse<T>> => await http<T>(new Request(path, args)),

    put: async <T>(
        path: string,
        body: any,
        args: RequestInit = {method: "put", body: JSON.stringify(body)}
    ): Promise<HttpResponse<T>> => await http<T>(new Request(path, args)),

};

async function http<T>(
    request: RequestInfo
): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(
        request
    );
    response.parsedBody = await response.json();
    return response;
}

export default HttpWrapper;

