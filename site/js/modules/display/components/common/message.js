export default function createMessage(target, messageType, messageText) {
    target.innerHTML = `<div class="message ${messageType}">${messageText}</div>`;
}