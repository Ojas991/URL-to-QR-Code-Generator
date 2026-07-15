function generateQR(){

    let url = document.getElementById("url").value;

    if(url === ""){
        alert("Please enter a URL");
        return;
    }

    document.getElementById("qrImage").src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
        + encodeURIComponent(url);
}