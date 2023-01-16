const qrbtn = document.getElementById("qrbtn");
const target = document.getElementById("target");

qrbtn.addEventListener('click', (e) => {
    e.preventDefault();
    clear();

    const url = document.getElementById("url").value.trim();
    const size = document.getElementById("size").value.trim();    
    // target.innerHTML = url;
    if(url === "") {
        alert("Please Enter an URL");
    } else { 
        showSpinner();
        setTimeout(() => {
            hideSpinner();
         generateQRcode(url, size);
        }, 1000);
    }

});

const generateQRcode = (url,size) => {
    const qrcode = new QRCode(target,{
        text: url,
        width: size,
        height: size
    });
}

const clear = () => {
    target.innerHTML = "";
};

const showSpinner = () => {
    document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
    document.getElementById("spinner").style.display = "none";
}

hideSpinner();