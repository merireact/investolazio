document.addEventListener('DOMContentLoaded', () => {

    const cookiePopup = document.getElementById('cookie_popup');
    const acceptBtn = document.getElementById('cookie_accept_btn');
    const rejectBtn = document.getElementById('cookie_reject_btn');

    if (!cookiePopup) {
        return;
    }

    const cookieConsent = localStorage.getItem('investolazio_cookie_consent');

    if (!cookieConsent) {
        setTimeout(() => {
            cookiePopup.classList.add('is--visible');
        }, 1200);
    }

    const hidePopup = () => {
        cookiePopup.classList.remove('is--visible');
    };

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('investolazio_cookie_consent', 'accepted');
        hidePopup();
    });

    rejectBtn.addEventListener('click', () => {
        localStorage.setItem('investolazio_cookie_consent', 'rejected');
        hidePopup();
    });
});
