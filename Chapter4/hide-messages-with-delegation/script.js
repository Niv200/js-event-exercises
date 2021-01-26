document.getElementById("container").addEventListener("click", e => {
    if(e.target.className === 'remove-button'){
        let pane = e.target.closest('.pane');
        pane.remove();
    }
});