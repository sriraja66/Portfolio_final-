/**
 * Optimized JavaScript for Portfolio
 * Includes: Terminal Typing, Matrix Reveal, and Footer Year
 */



class MatrixReveal {
    constructor(elementOrId, finalText) {
        this.element = typeof elementOrId === 'string' ? document.getElementById(elementOrId) : elementOrId;
        if (!this.element) return;
        this.finalText = finalText || this.element.textContent;
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        this.revealed = false;
    }

    reveal() {
        if (this.revealed) return;
        this.revealed = true;
        let count = 0;
        const interval = setInterval(() => {
            this.element.textContent = this.finalText
                .split('')
                .map((char, i) => {
                    if (i < count) return char;
                    return this.characters[Math.floor(Math.random() * this.characters.length)];
                })
                .join('');
            count += 1 / 3;
            if (count >= this.finalText.length + 1) {
                clearInterval(interval);
                this.element.textContent = this.finalText;
            }
        }, 30);
    }
}

document.addEventListener('DOMContentLoaded', () => {


    // 2. Email Matrix Animation
    const emailContainer = document.getElementById('email-matrix');
    if (emailContainer) {
        const link = emailContainer.querySelector('a');
        if (link) {
            const matrix = new MatrixReveal(emailContainer, link.textContent);
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    matrix.reveal();
                    observer.disconnect();
                }
            }, { threshold: 0.5 });
            observer.observe(emailContainer);
        }
    }

    // 3. Footer Year
    const year = document.getElementById('current-year');
    if (year) year.textContent = new Date().getFullYear();

    console.log('✨ Portfolio Optimized: Terminal & Matrix Active.');
});
