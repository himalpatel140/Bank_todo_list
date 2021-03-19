userList = localStorage.getItem('userList');
Bank.userList = userList ? JSON.parse(userList) : {};

function storeToLocal(data) {
    data = JSON.stringify(data);
    localStorage.setItem('userList', data);
    // console.log("DAat saved");
}

setInterval(function() {
    storeToLocal(Bank.userList);
}, 2000);