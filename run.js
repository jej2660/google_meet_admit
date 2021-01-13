function Admit() {
    for (let tag of document.getElementsByTagName('span')) {
        if (tag.innerHTML === '수락') {
            tag.click();
        }
    }
}
setInterval(Admit, 1000);
