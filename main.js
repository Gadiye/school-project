function showPage(p) {
    document.querySelectorAll('div').forEach(div =>{
        div.style.display = 'none';
    });
    document.querySelector('#${p}').style.display = 'flex';

}
document.addEventListener('DOMContentLoder',function(){
document.querySelectorAll('button').forEach(button => {
    button.onclick = functional() {
        showPage(this.dataset.p);
    }
})
})