import api from "../../util/api"

// GET
export const findAll = async () => {
    const response = await api.get("/voleio");
    return response.data;
}

// GET {ID}
export const findOneById = async (id) => {
    const response = await api.get(`/voleio/${id}`);
    return response.data;
}

// POST
export const createOne = async () => {
    const response = await api.post("/voleio");
    return response.data;
}

// PUT
export const updateOne = async (id) => {
    const response = await api.put(`/voleio/${id}`);
    return response.data;
}

// DELETE
export const deleteOne = async (id) => {
    const response = await api.delete(`/voleio/${id}`);
    return response.data;
}