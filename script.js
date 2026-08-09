// Initialize Lucide Icons
lucide.createIcons();

// Interactive Terminal Logic
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');

const commands = {
    'help': 'Available commands: <span class="text-osm-cyan">whoami, skills, projects, contact, clear</span>',
    'whoami': 'Operative: <span class="text-white font-bold">Aaron Capiral</span> | Lead Systems & Web Architect based in PH.',
    'skills': 'Core Stack: <span class="text-osm-cyan">Java, Lua, C#, JavaScript, CSS3, HTML5</span>',
    'projects': 'Featured: <span class="text-osm-cyan">Santa Rosa RP, La Provinsia RP, Periodica AI</span>',
    'contact': 'Transmit via email or inspect contact section below.',
    'clear': 'CLEAR'
};

if (terminalInput) {
    terminalInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const input = this.value.trim().toLowerCase();
            this.value = '';
            
            if (input === 'clear') {
                terminalOutput.innerHTML = '';
                return;
            }

            const response = commands[input] || `Command not recognized: '<span class="text-red-400">${input}</span>'. Type '<span class="text-osm-cyan">help</span>' for menu.`;
            
            const line = document.createElement('div');
            line.innerHTML = `<span class="text-osm-cyan">root@capiral-dev:~$</span> ${input}<br><span class="text-slate-300">${response}</span>`;
            terminalOutput.appendChild(line);
        }
    });
}

// Anti-Inspect Security Logic
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
        (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83))) {
        e.preventDefault();
    }
});