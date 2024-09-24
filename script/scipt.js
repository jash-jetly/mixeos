document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');

    // Automatically focus on the command input when the page loads
    commandInput.focus();

    // Create a custom cursor element
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.style.position = 'absolute'; // Ensure cursor is positioned correctly
    cursor.style.width = '15px'; // Adjust the size of the cursor block
    cursor.style.height = '35px'; // Adjust the size of the cursor block
    cursor.style.backgroundColor = 'white'; // Cursor color
    cursor.style.pointerEvents = 'none'; // Make sure cursor does not interfere with clicks
    cursor.style.zIndex = '1000'; // Ensure cursor is behind interactive elements
    document.body.appendChild(cursor);

    const commands = {
        'info': 'MIXE OS: \n'+
                'The Linux-based operating system that\'s like a lightweight superhero for low-spec PCs! 🌟.\n'+
                '  \n'+
                'Imagine your old, slow laptop got a fresh pair of running shoes and a supercharged energy drink. That’s MIXE OS for you! Built on the rock-solid Debian foundation, MIXE OS transforms sluggish machines into speedy, agile workhorses.\n'+
                '  \n'+
                'No more waiting ages for your computer to start up or dragging through your daily tasks. With MIXE OS, you\'ll be up and running in no time, as if your PC had a turbo boost. It\'s designed to breathe new life into your hardware, making it faster, smoother, and way cooler.\n'+
                '  \n'+
                'We know, your laptop isn’t exactly the Ferrari of the tech world – but that doesn’t mean it can\'t run like one! MIXE OS is here to ensure that even the most humble of machines can keep up with your high-speed ambitions.\n'+
                '  \n'+
                'So, dust off that old computer and give it a second chance with MIXE OS. Because even if it’s not new, it can still be fast, efficient, and a bit quirky – just like your favorite tech-savvy friend who knows how to fix anything with a little duct tape and a lot of ingenuity. 🚀🖥️ \n'+
                '  \n'+
                'Ready to give your old gear a new lease on life? MIXE OS is here to save the day, one slow PC at a time!',
        'features': 'Features:\n' +
                    '- **Lightweight Powerhouse**: MIXE OS is like a superhero for your old, slow PC. It makes your hardware run faster and smoother without needing a turbocharger. Forget about waiting ages for your machine to boot up – with MIXE OS, it\'s ready to go before you’ve even finished your coffee.\n' +
                    '  \n'+
                    '- **Sleek and Streamlined Design**: Who says efficiency can’t look good? MIXE OS sports a clean, minimalist design that’s easy on the eyes and on your system’s resources. It’s like giving your computer a stylish makeover without the need for any drastic surgery.\n' +
                    '  \n'+
                    '- **Debian-Based Stability**: MIXE OS is built on the reliable Debian foundation, giving you all the stability of Debian but with a lighter footprint. It’s like having a trusty old friend who’s always there for you, even when things get a bit hectic.\n' +
                    '  \n'+
                    '- **Customizable and User-Friendly**: Personalization is key! MIXE OS lets you tweak and adjust settings to fit your needs. Whether you want to turn your desktop into a productivity powerhouse or a cozy digital playground, MIXE OS has got you covered.\n' +
                    '  \n'+
                    '- **Speedy Performance**: We’ve dialed up the performance to 11. With optimized resource management, MIXE OS ensures that even your low-spec hardware can handle your daily tasks without breaking a sweat. It’s like getting a high-speed chase in a reliable old sedan.\n' +
                    '  \n'+
                    '- **Open Source Freedom**: MIXE OS embraces the open-source spirit, so you get all the benefits of transparency and community collaboration. It’s like being part of a big, happy tech family where everyone contributes to making the OS better for everyone.\n' +
                    '  \n'+
                    '- **Built-In Terminal Fun**: MIXE OS comes with a terminal interface that’s as fun as it is functional. Whether you\'re a command-line aficionado or just getting started, the terminal adds a touch of old-school tech charm to your modern computing experience.',
        'help': 'Available commands: info, features, jash jetly, developer, downloads, demo ,clear',
        'login': 'Username: mixe \n'+'Password: mixe',
        'hello': 'Hello',
        'clear': () => {
            output.innerHTML = '';
        },
        'jash jetly': () => {
            // Redirect the user to jash.html
            window.location.href = 'jash.html';
        },
        'developer': () => {
            // Redirect the user to jash.html
            window.location.href = 'jash.html';
        },
        'demo': () => {
                    window.open('https://www.youtube.com/watch?v=iDyTrx2uVY4', '_blank');
                },
        'download': () => {
            // Redirect the user to jash.html
            window.location.href = 'downloads.html';
        }
    };

    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim();
            commandInput.value = '';

            if (command in commands) {
                if (typeof commands[command] === 'function') {
                    commands[command]();
                } else {
                    output.innerHTML += `<p>${commands[command]}</p>`;
                }
            } else {
                output.innerHTML += '<p>Command not found. Type "help" for a list of available commands.</p>';
            }

            // Scroll to the bottom of the terminal
            output.scrollTop = output.scrollHeight;
        }
        if (e.key === 'Tab') {
            e.preventDefault(); // Prevent default tab behavior
            const typedCommand = commandInput.value.trim();
            const matchingCommands = Object.keys(commands).filter(cmd => cmd.startsWith(typedCommand));

            if (matchingCommands.length === 1) {
                commandInput.value = matchingCommands[0];
            }
        }
    });

    // Automatically refocus on the command input when the user clicks anywhere on the page
    document.addEventListener('click', () => {
        commandInput.focus();
    });

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });
});
