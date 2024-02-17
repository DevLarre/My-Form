function handlePlaceHolder(element, placeholder) {
    element.addEventListener('focus', function() {
        if (this.placeholder === placeholder) {
            this.placeholder = '';
        }
    });

element.addEventListener('blur', function(){
    if (this.placeholder === '') {
        this.placeholder = placeholder;
    }
});
}

handlePlaceHolder(nameField, 'Name required');
handlePlaceHolder(firstName, 'Last name required');
handlePlaceHolder(phone, '(xx) xxxx-xxxxx');
handlePlaceHolder(email, 'Type your e-mail');
handlePlaceHolder(state, 'Enter your State');
handlePlaceHolder(city, 'Enter your City');