// ====================================
// Specialized Animations Module
// ====================================

/**
 * Liquid Pulse Background (Disabled)
 */
/*
class LiquidBackground {
    constructor(containerClass) {
        this.container = document.querySelector(containerClass);
        if (!this.container) return;

        this.canvas = document.createElement('canvas');
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.particles = [];
        this.mouse = { x: 0, y: 0, active: false };
        this.numParticles = 50;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', debounce(() => this.resize(), 250));

        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.mouse.active = true;
        });

        this.createParticles();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.numParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 100 + 50,
                color: i % 2 === 0 ? 'rgba(0, 217, 255, 0.05)' : 'rgba(176, 38, 255, 0.05)',
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            // Gentler movement
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x < -p.radius) p.x = this.canvas.width + p.radius;
            if (p.x > this.canvas.width + p.radius) p.x = -p.radius;
            if (p.y < -p.radius) p.y = this.canvas.height + p.radius;
            if (p.y > this.canvas.height + p.radius) p.y = -p.radius;

            // Interaction
            if (this.mouse.active) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 300) {
                    p.x -= dx * 0.01;
                    p.y -= dy * 0.01;
                }
            }

            this.ctx.beginPath();
            const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
            grad.addColorStop(0, p.color);
            grad.addColorStop(1, 'transparent');
            this.ctx.fillStyle = grad;
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}
*/

/**
 * Constellation Hero Animation (Disabled)
 */
/*
class ConstellationHero {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.numStars = 100;
        this.connectionDistance = 150;
        this.mouse = { x: 0, y: 0 };

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', debounce(() => this.resize(), 250));

        window.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        this.createStars();
        this.animate();
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    createStars() {
        this.stars = [];
        for (let i = 0; i < this.numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.stars.forEach((s, i) => {
            s.x += s.vx;
            s.y += s.vy;

            if (s.x < 0) s.x = this.canvas.width;
            if (s.x > this.canvas.width) s.x = 0;
            if (s.y < 0) s.y = this.canvas.height;
            if (s.y > this.canvas.height) s.y = 0;

            // Draw connections
            for (let j = i + 1; j < this.stars.length; j++) {
                const s2 = this.stars[j];
                const dx = s.x - s2.x;
                const dy = s.y - s2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.connectionDistance) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(0, 217, 255, ${0.1 * (1 - dist / this.connectionDistance)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(s.x, s.y);
                    this.ctx.lineTo(s2.x, s2.y);
                    this.ctx.stroke();
                }
            }

            // Mouse connection
            const mdx = s.x - this.mouse.x;
            const mdy = s.y - this.mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 200) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = `rgba(176, 38, 255, ${0.2 * (1 - mdist / 200)})`;
                this.ctx.moveTo(s.x, s.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.stroke();
            }

            // Draw star
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 217, 255, ${s.opacity})`;
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}
*/

/**
 * Terminal Typing Animation
 * Types out code in terminal style
 */
// class TerminalTyping {
//     constructor(containerId) {
//         this.container = document.getElementById(containerId);
//         if (!this.container) return;

//         this.lines = [
//             '# Full-Stack Engineering Lab',
//             'systems = {',
//             '    "frontend": ["HTML5", "CSS3", "JavaScript"],',
//             '    "backend":  ["Python", "FastAPI", "PostgreSQL"],',
//             '    "automation": ["Zoho CRM", "Zoho Creator"]',
//             '}',
//             '',
//             'def create_solution(requirements):',
//             '    print("Initializing Core Modules...")',
//             '    return "Architecture Built! 🚀"',
//             '',
//             'create_solution("innovation")'
//         ];

//         this.currentLine = 0;
//         this.currentChar = 0;
//         this.typeSpeed = 25;
//         this.lineDelay = 150;
//         this.isTyping = false;
//     }

//     start() {
//         if (this.isTyping) return;
//         this.isTyping = true;
//         this.type();
//     }

//     type() {
//         if (this.currentLine >= this.lines.length) {
//             this.showCursor();
//             return;
//         }

//         const line = this.lines[this.currentLine];

//         if (this.currentChar <= line.length) {
//             const text = line.substring(0, this.currentChar);
//             const formattedLine = this.formatLine(text);

//             this.container.innerHTML = this.getFormattedOutput() + formattedLine + '<span class="terminal-cursor"></span>';

//             this.currentChar++;
//             setTimeout(() => this.type(), this.typeSpeed);
//         } else {
//             this.currentLine++;
//             this.currentChar = 0;
//             setTimeout(() => this.type(), this.lineDelay);
//         }
//     }

//     formatLine(text) {
//         let formatted = text;
//         formatted = formatted.replace(/(print|def|class|import|from|return|if|in)/g, '<span class="keyword">$1</span>');
//         formatted = formatted.replace(/(".*?")/g, '<span class="string">$1</span>');
//         formatted = formatted.replace(/(#.*)/g, '<span class="comment">$1</span>');
//         return formatted;
//     }

//     getFormattedOutput() {
//         let output = '';
//         for (let i = 0; i < this.currentLine; i++) {
//             output += this.formatLine(this.lines[i]) + '<br>';
//         }
//         return output;
//     }

//     showCursor() {
//         this.container.innerHTML += '<span class="terminal-cursor"></span>';
//     }
// }

/**
 * Skill Network Graph (Disabled)
 */
/*
class SkillNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.pulses = [];
        this.mouse = { x: -1000, y: -1000, active: false };

        // Organized by professional layers
        this.skills = [
            { name: 'HTML5 / CSS3', group: 'frontend', level: 0 },
            { name: 'JavaScript ES6+', group: 'frontend', level: 0 },
            { name: 'Python', group: 'backend', level: 1 },
            { name: 'FastAPI', group: 'backend', level: 1 },
            { name: 'PostgreSQL', group: 'database', level: 2 },
            { name: 'Zoho CRM', group: 'automation', level: 2 },
            { name: 'Zoho Creator', group: 'automation', level: 2 }
        ];

        // Unified Professional Palette (Electric Cyan)
        this.colors = {
            main: '#00E5FF'
        };

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', debounce(() => this.resize(), 250));

        this.canvas.parentElement.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
            this.mouse.active = true;
        });

        this.canvas.parentElement.addEventListener('mouseleave', () => {
            this.mouse.active = false;
        });

        this.createNodes();
        this.animate();

        // Slower, more intentional pulses
        setInterval(() => this.createPulse(), 2500);
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.createNodes();
    }

    createNodes() {
        this.nodes = [];
        const width = this.canvas.width;
        const height = this.canvas.height;

        // Group skills by level for a structured horizontal flow
        const levels = [0, 1, 2];
        levels.forEach(level => {
            const levelSkills = this.skills.filter(s => s.level === level);
            levelSkills.forEach((skill, index) => {
                const x = (width * 0.25) + (level * (width * 0.25));
                const y = (height * 0.2) + (index * (height * 0.6) / Math.max(1, levelSkills.length - 1));

                this.nodes.push({
                    x: x,
                    y: y,
                    baseX: x,
                    baseY: y,
                    vx: 0,
                    vy: 0,
                    name: skill.name,
                    group: skill.group,
                    level: skill.level,
                    radius: 4,
                    color: this.colors.main,
                    pulse: 0
                });
            });
        });
    }

    createPulse() {
        if (this.nodes.length < 2) return;
        const startIdx = Math.floor(Math.random() * this.nodes.length);
        const startNode = this.nodes[startIdx];

        // Connect to a node in the next level or same level
        const potentialTargets = this.nodes.filter((n, i) => i !== startIdx);
        if (potentialTargets.length === 0) return;

        const targetNode = potentialTargets[Math.floor(Math.random() * potentialTargets.length)];

        this.pulses.push({
            start: startNode,
            end: targetNode,
            progress: 0,
            speed: 0.003 + Math.random() * 0.005, // Slower for professional feel
            color: startNode.color
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update Physics (More stable/heavy feel)
        this.nodes.forEach(node => {
            const ax = (node.baseX - node.x) * 0.03;
            const ay = (node.baseY - node.y) * 0.03;
            node.vx += ax;
            node.vy += ay;

            if (this.mouse.active) {
                const dx = node.x - this.mouse.x;
                const dy = node.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    const force = (100 - dist) / 100;
                    node.vx += (dx / dist) * force * 1.5;
                    node.vy += (dy / dist) * force * 1.5;
                }
            }

            node.vx *= 0.85;
            node.vy *= 0.85;
            node.x += node.vx;
            node.y += node.vy;

            node.pulse = Math.sin(Date.now() * 0.002 + node.x * 0.01) * 0.5 + 0.5;
        });

        // Draw Connections (Precise, clean lines)
        this.ctx.setLineDash([2, 4]); // Professional dashed lines
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const n1 = this.nodes[i];
                const n2 = this.nodes[j];
                if (this.shouldConnect(n1.group, n2.group)) {
                    this.ctx.strokeStyle = 'rgba(154, 160, 166, 0.15)'; // Cool Gray subtle lines
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(n1.x, n1.y);
                    this.ctx.lineTo(n2.x, n2.y);
                    this.ctx.stroke();
                }
            }
        }
        this.ctx.setLineDash([]);

        // Draw Pulses (Professional data flow)
        this.pulses = this.pulses.filter(p => {
            p.progress += p.speed;
            if (p.progress >= 1) return false;

            const px = p.start.x + (p.end.x - p.start.x) * p.progress;
            const py = p.start.y + (p.end.y - p.start.y) * p.progress;

            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(px, py, 1.5, 0, Math.PI * 2);
            this.ctx.fill();
            return true;
        });

        // Draw Nodes (Sharp, geometric look)
        this.nodes.forEach((node) => {
            // Subtle glow
            this.ctx.shadowBlur = 10 * node.pulse;
            this.ctx.shadowColor = node.color;
            this.ctx.fillStyle = node.color;

            // Draw diamond shape for professional look
            this.ctx.beginPath();
            this.ctx.moveTo(node.x, node.y - node.radius * 1.5);
            this.ctx.lineTo(node.x + node.radius * 1.5, node.y);
            this.ctx.lineTo(node.x, node.y + node.radius * 1.5);
            this.ctx.lineTo(node.x - node.radius * 1.5, node.y);
            this.ctx.closePath();
            this.ctx.fill();

            this.ctx.shadowBlur = 0;

            // Refined Labels
            this.ctx.fillStyle = node.color;
            this.ctx.font = '700 11px "Space Grotesk"';
            this.ctx.letterSpacing = '1px';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(node.name.toUpperCase(), node.x, node.y - 15);
        });

        requestAnimationFrame(() => this.animate());
    }

    shouldConnect(g1, g2) {
        return true; // Simplified for unified look
    }
}
*/

/**
 * Matrix Reveal
 */
// class MatrixReveal {
//     constructor(elementOrId, finalText) {
//         if (typeof elementOrId === 'string') {
//             this.element = document.getElementById(elementOrId);
//         } else {
//             this.element = elementOrId;
//         }
//         if (!this.element) return;
//         this.finalText = finalText || this.element.textContent;
//         this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
//         this.revealed = false;
//     }

//     reveal() {
//         if (this.revealed) return;
//         this.revealed = true;
//         let count = 0;
//         const interval = setInterval(() => {
//             this.element.textContent = this.finalText
//                 .split('')
//                 .map((char, i) => {
//                     if (i < count) return char;
//                     return this.characters[Math.floor(Math.random() * this.characters.length)];
//                 })
//                 .join('');
//             count += 1 / 3;
//             if (count >= this.finalText.length + 1) {
//                 clearInterval(interval);
//                 this.element.textContent = this.finalText;
//             }
//         }, 30);
//     }
// }

// // Export
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = { TerminalTyping, MatrixReveal };
// }
