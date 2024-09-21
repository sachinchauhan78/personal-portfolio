document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const chatWindow = document.querySelector('.chat-window');

    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'user-message');
            messageElement.textContent = messageText;

            chatWindow.appendChild(messageElement);

            messageInput.value = '';

            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    }

    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
            event.preventDefault(); 
        }
    });
});