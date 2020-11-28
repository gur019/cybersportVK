import API from "./api";
export async function getEvents() {
    return await API.get('/api/eventsApi');
}