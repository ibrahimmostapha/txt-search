function search() {
    const input = document.getElementById('search-input').value.trim().toLowerCase();
    const content = document.getElementById('content');
    
    if (input.length > 1){ // if the input lenght is 2 or more the search funtion is executed
        const regex = new RegExp(`(${input})`, 'gi'); // regular expression to find the searched items
        // remove old highlighted
        content.innerHTML = content.innerHTML.replace(/(<mark class="highlight">|<\/mark>)/gi, '');
        // highlight the searched items
        content.innerHTML = content.innerHTML.replace(regex, '<mark class="highlight">$1</mark>');
    } else{
        // remove all highlights if nothing to search
        content.innerHTML = content.innerHTML.replace(/(<mark class="highlight">|<\/mark>)/gi, '');
    }
}