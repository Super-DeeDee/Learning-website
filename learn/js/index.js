window.addEventListener('load', function(){
    var text = document.querySelector('#myText');

text.onfocus = function() {
/*             console.log('获得焦点'); */
    if (this.value === '输入关键词'){
        this.value = '';
    }
    this.style.color = 'black'
}

text.onblur = function() {
/*             console.log('失去焦点'); */
    if (this.value === ''){
        this.value = '输入关键词';
    }
    this.style.color = '#999'
}
})