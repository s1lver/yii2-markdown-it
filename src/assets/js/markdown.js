/**
 * Initial markdown-it
 */
let md = window.markdownit();

/**
 * Find button and bind action
 */
document.querySelectorAll('#markdown-container button').forEach(function(item) {
    let buttonKey = item.getAttribute('data-button');
    let actionBefore = item.getAttribute('data-before');
    let actionAfter = item.getAttribute('data-after');
    document.querySelectorAll('#markdown-container [data-button="' + buttonKey + '"]').forEach(function (element) {
        element.addEventListener('click', function() {
            getTextAreaSelection('markdown-content').setSelectedText(actionBefore, actionAfter);
        });
    })
});

document.getElementById('markdown-btn-visual').addEventListener('click', function() {
    let textarea = document.querySelector('#markdown-content');
    let html = md.render(textarea.value.replace(/\t/gi, ''));
    let output = document.querySelector('#markdown-output');
    output.style.height = textarea.offsetHeight + 'px';
    output.style.display = "";
    output.innerHTML = html;
    textarea.style.display = "none";
});

document.getElementById('markdown-btn-text').addEventListener('click', function(){
    let textarea = document.querySelector('#markdown-content');
    textarea.style.display = "";
    let output = document.querySelector('#markdown-output');
    output.style.display = "none";
});

/**
 * An array of object instances
 * @type {Array}
 */
let TextAreaSelectionObjects = [];
/**
 * The core to obtain a copy of the object
 * @param id
 * @returns {*}
 */
function getTextAreaSelection(id) {
    if (typeof(TextAreaSelectionObjects[id]) === "undefined") {
        TextAreaSelectionObjects[id] = new TextAreaSelectionHelper(id);
    }
    return TextAreaSelectionObjects[id];
}
/**
 * The constructor takes as an argument ID text area
 * @param id
 */
function TextAreaSelectionHelper(id) {
    this.target = document.getElementById(id);
    this.target.carretHandler = this;
    this.target.onchange = _textareaSaver;
    this.target.onclick = _textareaSaver;
    this.target.onkeyup = _textareaSaver;
    this.target.onfocus = _textareaSaver;
    if(!document.selection){
        this.target.onSelect = _textareaSaver;
    }
    this.start = -1;
    this.end = -1;
    this.scroll = -1;
    this.iesel = null;
}
/**
 * In the prototype write methods
 * @type {{getSelectedText: TextAreaSelectionHelper.getSelectedText, setSelectedText: TextAreaSelectionHelper.setSelectedText}}
 */
TextAreaSelectionHelper.prototype = {
    getSelectedText : function() {
        return this.iesel ? this.iesel.text.replace(/\t/gi, '') : (this.start >= 0 && this.end > this.start) ? this.target.value.substring(this.start,this.end) : "";
    },
    setSelectedText : function(text, secondtag) {
        text.replace(/\t/gi, '');
        if (this.iesel) {
            if (typeof(secondtag) === "string") {
                var l = this.iesel.text.length;
                this.iesel.text = text + this.iesel.text + secondtag;
                this.iesel.moveEnd("character", -secondtag.length);
                this.iesel.moveStart("character", -l);
            } else {
                this.iesel.text = text;
            }
            this.iesel.select();
        } else if (this.start >= 0 && this.end >= this.start) {
            var left = this.target.value.substring(0, this.start);
            var right = this.target.value.substr(this.end);
            var scont = this.target.value.substring(this.start, this.end);
            if (typeof(secondtag) === "string") {
                this.target.value = left + text + scont + secondtag + right;
                this.end = this.target.selectionEnd = this.start + text.length + scont.length;
                this.start = this.target.selectionStart = this.start + text.length;
            } else {
                this.target.value = left + text + right;
                this.end = this.target.selectionEnd = this.start + text.length;
                this.start = this.target.selectionStart = this.start + text.length;
            }
            this.target.scrollTop = this.scroll;
            this.target.focus();
        } else {
            this.target.value += text + ((typeof(secondtag) === "string") ? secondtag: "");
            if (this.scroll >= 0){
                this.target.scrollTop = this.scroll;
            }
        }
    }
};
/**
 * Event handler. Preserves allocation information and scroll position
 * @private
 */
function _textareaSaver() {
    if (document.selection) {
        this.carretHandler.iesel = document.selection.createRange().duplicate();
    } else if(typeof(this.selectionStart) !== "undefined") {
        this.carretHandler.start = this.selectionStart;
        this.carretHandler.end = this.selectionEnd;
        this.carretHandler.scroll = this.scrollTop;
    } else {
        this.carretHandler.start = this.carretHandler.end = -1;
    }
}