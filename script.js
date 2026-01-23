/**
 * Optimized JavaScript for Portfolio
 * Includes: Terminal Typing, Matrix Reveal, and Footer Year
 */

class TerminalTyping {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.lines = [
            '# Full-Stack Engineering Lab',
            'systems = {',
            '    "frontend": ["HTML5", "CSS3", "JavaScript"],',
            '    "backend":  ["Python", "FastAPI", "PostgreSQL"],',
            '    "automation": ["Zoho CRM", "Zoho Creator"]',
            '}',
            '',
            'def create_solution(requirements):',
            '    print("Initializing Core Modules...")',
            '    return "Architecture Built! 🚀"',
            '',
            'create_solution("innovation")'
        ];

        this.currentLine = 0;
        this.currentChar = 0;
        this.typeSpeed = 25;
        this.lineDelay = 150;
        this.isTyping = false;
    }

    start() {
        if (this.isTyping) return;
        this.isTyping = true;
        this.type();
    }

    type() {
        if (this.currentLine >= this.lines.length) {
            this.showCursor();
            return;
        }

        const line = this.lines[this.currentLine];

        if (this.currentChar <= line.length) {
            const text = line.substring(0, this.currentChar);
            const formattedLine = this.formatLine(text);

            this.container.innerHTML = this.getFormattedOutput() + formattedLine + '<span class="terminal-cursor"></span>';

            this.currentChar++;
            setTimeout(() => this.type(), this.typeSpeed);
        } else {
            this.currentLine++;
            this.currentChar = 0;
            setTimeout(() => this.type(), this.lineDelay);
        }
    }

    formatLine(text) {
        let formatted = text;
        formatted = formatted.replace(/\b(print|def|class|import|from|return|if|in)\b/g, '<span class="keyword">$1</span>');
        formatted = formatted.replace(/(".*?")/g, '<span class="string">$1</span>');
        formatted = formatted.replace(/(#.*)/g, '<span class="comment">$1</span>');
        return formatted;
    }

    getFormattedOutput() {
        let output = '';
        for (let i = 0; i < this.currentLine; i++) {
            output += this.formatLine(this.lines[i]) + '<br>';
        }
        return output;
    }

    showCursor() {
        this.container.innerHTML += '<span class="terminal-cursor"></span>';
    }
}

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
    // 1. Terminal Skills Typing
    const termContainer = document.querySelector('.terminal-container');
    if (termContainer) {
        const terminal = new TerminalTyping('terminal-content');
        const terminalObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                terminal.start();
                terminalObserver.disconnect();
            }
        }, { threshold: 0.1 });
        terminalObserver.observe(termContainer);
    }

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
