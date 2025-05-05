const STORAGE_KEY = "CLASIFICACION_F1";

export function saveResults(session) {
    const history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    history.push(session);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function getHistory() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
