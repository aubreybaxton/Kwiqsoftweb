import apiClient from "./Api";


// ! Warning : Global API service methods

export const getData = (path: string) => {
    console.info('getData -- GET path', path);
    return apiClient.get(path);
}

export const postData = (path: string, data: FormData) => {
    console.info('postData -- POST path', path);
    console.info('postData -- POST data', data);
    return apiClient.post(path, data);
}

export const putData = (path: string, id: string, data: FormData) => {
    console.info('putData -- PUT path', path);
    console.info('putData -- PUT id', id);
    console.info('putData -- PUT data', data);
    return apiClient.put(path, data);
}
export const deleteData = (path: string, id: string) => {
    console.info('deleteData -- DELETE path', path);
    console.info('deleteData -- DELETE id', id);
    return apiClient.delete(path);
}