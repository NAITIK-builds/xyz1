const chatContainer = document.getElementById('chatContainer');
const stickyTimer = document.getElementById('stickyTimer');

const avatarAgent = 'images/agent.png';
const avatarUser = 'images/profile.png';

let currentStep = 0;

// Replicate the user's flow
const chatFlow = [
    {
        type: 'agent',
        messages: [
            "Hi 👋",
            "I'm Jennifer from <b>IN Health Benefits Direct</b>",
            "Want to find out if you qualify for the <b>$3,200 Senior Allowance Card?</b> Just answer one quick question!",
            "Are you on Medicare <b>Part A or Part B?</b>"
        ],
        options: [
            { text: "Yes", cols: 2 },
            { text: "No", cols: 2 }
        ]
    },
    {
        type: 'agent',
        messages: [
            "Okay, let me ask you one quick question.",
            "What is your age range?"
        ],
        options: [
            { text: "64 - 75", cols: 1 },
            { text: "76 and Older", cols: 1 }
        ]
    },
    {
        type: 'agent',
        messages: [
            "Are you a US Resident?"
        ],
        options: [
            { text: "Yes", cols: 1 },
            { text: "No", cols: 1 }
        ]
    },
    {
        type: 'agent',
        messages: [
            "🎉 <b>Congratulations!</b> 🎁",
            "You're <b>pre-qualified</b> for a <b>$3,200 Senior Allowance Card</b>",
            "Tap the number button below to call now to get your <b>$3,200 Senior Allowance Card!</b> It only takes 2 minutes. Make sure to mention to the agent that you're calling about the <b>$3,200 Senior Allowance Card.</b>",
            `<a href="tel:+18005551234" class="call-btn"><i class="fa fa-phone fa-shake"></i> Click To Call Now</a>`
        ],
        end: true
    }
];

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function processMessages(stepIndex) {
    const step = chatFlow[stepIndex];
    if (!step) return;
    
    showAgentTypingAndMessages(step);
}

async function showAgentTypingAndMessages(step) {
    const msgRow = document.createElement('div');
    msgRow.className = 'message-row agent';
    
    // Avatar
    const imgMsg = document.createElement('img');
    imgMsg.src = avatarAgent;
    imgMsg.className = 'avatar';
    imgMsg.alt = "Agent Avatar";
    
    const contentCol = document.createElement('div');
    contentCol.className = 'message-content';
    
    msgRow.appendChild(imgMsg);
    msgRow.appendChild(contentCol);
    chatContainer.appendChild(msgRow);

    // Initial typing
    const typingBubble = document.createElement('div');
    typingBubble.className = 'bubble agent typing-bubble';
    typingBubble.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    contentCol.appendChild(typingBubble);
    
    scrollToBottom();

    for (let i = 0; i < step.messages.length; i++) {
        await sleep(1500); // simulate typing delay
        
        // Remove typing
        typingBubble.remove();
        
        const textBubble = document.createElement('div');
        textBubble.className = 'bubble agent';
        textBubble.innerHTML = step.messages[i];
        
        // Re-trigger animation cleanly
        textBubble.style.animation = 'none';
        textBubble.offsetHeight; /* trigger reflow */
        textBubble.style.animation = null;

        contentCol.appendChild(textBubble);
        
        // Show next typing if more messages
        if (i < step.messages.length - 1) {
            contentCol.appendChild(typingBubble);
        }
        scrollToBottom();
    }

    // Now show options if they exist
    if (step.options) {
        await sleep(600);
        
        const optionGrid = document.createElement('div');
        optionGrid.className = 'options-grid ' + (step.options[0].cols === 2 ? 'cols-2' : 'cols-1');
        
        step.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.text;
            btn.onclick = () => handleOptionClick(opt.text, optionGrid, stepIndex);
            optionGrid.appendChild(btn);
        });
        
        contentCol.appendChild(optionGrid);
        
        scrollToBottom();
    }
    
    if (step.end) {
        // Disconnected Message matching design logic
        setTimeout(() => {
            const discRow = document.createElement('div');
            discRow.style.textAlign = 'center';
            discRow.style.color = '#9ca3af';
            discRow.style.fontSize = '0.8rem';
            discRow.style.margin = '20px 0';
            discRow.style.fontWeight = '500';
            discRow.style.borderTop = '1px solid #e5e7eb';
            discRow.style.paddingTop = '20px';
            discRow.textContent = 'Chat Closed';
            chatContainer.appendChild(discRow);
            scrollToBottom();
        }, 1500);

        // Show sticky timer smoothly
        setTimeout(() => {
            stickyTimer.classList.add('visible');
            startTimer();
        }, 2000);
    }
}

async function handleOptionClick(text, optionGrid, stepIndex) {
    // Hide buttons after click for a cleaner chat interface
    optionGrid.style.opacity = '0';
    setTimeout(() => {
        optionGrid.classList.add('hidden');
    }, 300);

    // Show User message immediately
    const msgRow = document.createElement('div');
    msgRow.className = 'message-row user';
    
    const contentCol = document.createElement('div');
    contentCol.className = 'message-content';
    
    const textBubble = document.createElement('div');
    textBubble.className = 'bubble user';
    textBubble.textContent = text;
    
    const imgMsg = document.createElement('img');
    imgMsg.src = avatarUser;
    imgMsg.className = 'avatar';
    imgMsg.alt = "User Avatar";
    
    contentCol.appendChild(textBubble);
    msgRow.appendChild(contentCol);
    msgRow.appendChild(imgMsg);
    
    chatContainer.appendChild(msgRow);
    scrollToBottom();
    
    await sleep(800);
    
    currentStep++;
    processMessages(currentStep);
}

// Timer logic matching the exact design
function startTimer() {
    // 3 minutes, 1 second = 181 seconds
    let totalSeconds = 181;
    
    const minTens = document.getElementById('minTens');
    const minOnes = document.getElementById('minOnes');
    const secTens = document.getElementById('secTens');
    const secOnes = document.getElementById('secOnes');

    const interval = setInterval(() => {
        totalSeconds--;
        
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        minTens.textContent = Math.floor(minutes / 10);
        minOnes.textContent = minutes % 10;
        secTens.textContent = Math.floor(seconds / 10);
        secOnes.textContent = seconds % 10;

        if (totalSeconds <= 0) {
            clearInterval(interval);
        }
    }, 1000);
}

// Ensure images are preloaded before start
const img1 = new Image();
img1.src = avatarAgent;
const img2 = new Image();
img2.src = avatarUser;

// Start automated chat flow gracefully
window.onload = () => {
    setTimeout(() => {
        processMessages(0);
    }, 1000);
};
