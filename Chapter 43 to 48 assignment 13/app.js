
//Q: no 1
function greet(username) {
    Swal.fire({
        title: 'Thank You!',
        text: 'Welcome ' + username + ' to our website 😊',
        icon: 'success',
        confirmButtonText: 'OK'
    });

}   
 //Q: no 2
function add() {
    Swal.fire({
        title: 'Thank You!',
        text: 'Thanks for purchasing this mobile set 😊',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
function remove() {
    Swal.fire({
        title: 'Thank You!',
        text: 'Are u sure you want to remove this item from cart?',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
//Q: no 3
function deleteBtn(e) {
    var row = e.parentNode.parentNode;
    row.remove()
}
//Q: no 4
function beforeImg(e) {
    e.src = "https://data.textstudio.com/output/sample/animated/6/5/9/4/copy-1-14956.gif"
}
function afterImg(e) {
    e.src = "img/Screenshot 2026-02-22 205013.png"
}