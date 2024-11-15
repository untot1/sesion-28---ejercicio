"use strict";

// URL de la API en Render
const apiUrl = "https://session-28-ejercicio-1.onrender.com/api/users";

async function loadUsers() {
    let response = await fetch(apiUrl);  // Cambié 'url' por 'apiUrl'
    if (response.status != 200) return [];
    let users = await response.json();
    return users;
}

function storeUser(user, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    
    xhr.open('POST', apiUrl);  // Cambié 'url' por 'apiUrl'
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function putUser(user, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    
    xhr.open('PUT', apiUrl);  // Cambié 'url' por 'apiUrl'
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function deleteUser(userId, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    
    xhr.open('DELETE', `${apiUrl}/${userId}`);  // Asegúrate de incluir el ID del usuario en la URL
    xhr.send();
    xhr.onload = () => getXhrResponse(xhr, on
