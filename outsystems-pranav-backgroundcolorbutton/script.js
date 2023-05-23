function Change() {
    let colorHex = "0123456789ABCDEF"
    let color="#";
    for(let i=0;i<6;i++){
        let digit = colorHex.charAt(Math.floor(Math.random()*16));
        color+=digit; 
    }
    document.body.style.backgroundColor=color;
}