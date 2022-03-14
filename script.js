const uri = 'https://jsonplaceholder.typicode.com/users';

function getItems() {
    fetch(uri)   
        .then(response => response.json())
        .then(data => _displayItems(data))
}  

function _displayItems(data) {
    const tbody = document.getElementById('userInfo');
    tbody.innerHTML = '';
    data.forEach(item => {
        let tr = tbody.insertRow();

        let td1 = tr.insertCell(0);
        let textIdNode = document.createTextNode(item.id);
        td1.appendChild(textIdNode);

        let td2 = tr.insertCell(1);
        let textNameNode = document.createTextNode(item.name);
        td2.appendChild(textNameNode);

        let td3 = tr.insertCell(2);
        let textUserNode = document.createTextNode(item.username);
        td3.appendChild(textUserNode);
        
        let td4 = tr.insertCell(3);
        let textEmailNode = document.createTextNode(item.email);
        td4.appendChild(textEmailNode);

        let td5 = tr.insertCell(4);
        let textWebsiteNode = document.createTextNode(item.website);
        td5.appendChild(textWebsiteNode);
    });
    items = data;
}