self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SCHEDULE') {
        setTimeout(() => {
            self.registration.showNotification(event.data.title, {
                body: event.data.body,
                icon: 'logo.png'
            });
        }, event.data.delay);
    }
});