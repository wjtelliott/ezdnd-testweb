window.onload = () => {

    // Hide our overlay
    document.querySelector('#overlay').style = 'display: none';

    // When we want to show our delete form
    document.querySelector('#deleteBtn').addEventListener('click', () => {
        document.querySelector('#overlay').style = 'display: block';
        document.querySelector('#window').style = 'display: block';
        //Scroll them back to the top
        window.scrollTo(0,0);
    });

    document.querySelector('#cancelDelete').addEventListener('click', () => {
        document.querySelector('#overlay').style = 'display: none';
        document.querySelector('#window').style = 'display: none'; 
    });
}

