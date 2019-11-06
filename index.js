const firstRow = [
    [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61],
    [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43]
];
const secondRow = [
    [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92],
    [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124]
];
const thirdRow = [
    [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39],
    [65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34]
];
const fourthRow = [
    [122, 120, 99, 118, 98, 110, 109, 44, 46, 47],
    [90, 88, 67, 86, 66, 78, 77, 60, 62, 63]
];

(function getTextarea() {
    const body = document.querySelector('body');
    const textarea = document.createElement('textarea');
    body.classList.add('container');
    textarea.classList.add('textarea');
    body.appendChild(textarea);
})();

(function generateKeyboard() {
    const keyCodeName = [
        ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
        ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete"],
        ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
        ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
        ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"]
    ];
    const sysKeys = ['Backspace', 'Tab', 'Del', 'CapsLock', 'Enter', 'Shift', '&#x25B2;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Alt', '&#x25C4;', '&#x25BC;', '&#x25BA;', 'Ctrl'];
    const keyboard = document.createElement('div');
    const body = document.querySelector('body');
    keyboard.classList.add('keyboard');
    body.appendChild(keyboard);