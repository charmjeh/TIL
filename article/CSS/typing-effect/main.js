const typingTextContainer = document.querySelector('.container')
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector(".cursor");

const textArray = ['hard', 'fun', 'a journey', 'LIFE'];
const typingDelay = 200; // 입력되는 시간(miliSecond)
const erasingDelay = 100; // 지우는 시간, 입력되는 시간은 지우는 시간보다 커야한다.
const newTextDelay = 2000; // 다음 텍스트가 나오기 전까지의 duration
let textArrayIndex = 0;
let charIndex = 0;

const type = () => {
    // 재귀함수 방식으로 아이템의 각 글자를 하나씩 출력
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing')
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex += 1;
        // type()으로 바로 실행되도록 하지 않도록 해야한다.
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove('typing')
        setTimeout(erase, newTextDelay);
    }
}

const erase = () => {
    // 문자가 아직 완전하게 지워지지 않았다면
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing')
        // 마지막 글자를 제외한 문자를 출력한다.
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
        // 문자가 모두 지워졌다면
    } else {
        cursorSpan.classList.remove('typing')
        // 다음 문자로 이동
        textArrayIndex++;
        // 모든 문자를 출력했다면 첫번쨰 문자를 출력하도록 인덱스 변경
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typingTextContainer) {
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    }
})