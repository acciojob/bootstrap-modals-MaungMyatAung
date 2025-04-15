//your code here
 document.addEventListener('DOMContentLoaded', () => {
            const openModalButton = document.getElementById('open-modal');
            const newtonModal = new bootstrap.Modal(document.getElementById('newton-modal'));

            openModalButton.addEventListener('click', () => {
                newtonModal.show();
            });
        });
