        // Script para fazer a troca de páginas com efeito de fade-out
        document.addEventListener("DOMContentLoaded", function() {
            const links = document.querySelectorAll(".nav-links a");

            links.forEach(link => {
                link.addEventListener("click", function(event) {
                    event.preventDefault(); // Evita que a página mude instantaneamente
                    document.body.classList.add("fade-out"); // Adiciona a animação
                    setTimeout(() => {
                        window.location.href = link.href; // Redireciona após o fade-out
                    }, 500);
                });
            });
        });

        document.addEventListener("mousemove", (event) => {
            // Verifica se o mouse está sobre um elemento que não seja o fundo
            let targetElement = event.target;
            if (targetElement !== document.body) return; // Só cria partículas se o mouse estiver no fundo
        
            let particle = document.createElement("div");
            particle.classList.add("particle");
        
            document.body.appendChild(particle);
        
            let x = event.clientX;
            let y = event.clientY;
        
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
        
            let size = Math.random() * 4 + 3; // Tamanhos entre 3 e 7px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
        
            setTimeout(() => {
                particle.remove();
            }, 800); // Partículas somem em 0.8s
        });
        
        
        function createParticle() {
            let particle = document.createElement("div");
            particle.classList.add("particle");
        
            let size = Math.random() * 4 + 2; // Partículas entre 2px e 6px
            let x = Math.random() * window.innerWidth;
            let duration = Math.random() * 5 + 3; // Tempo de animação entre 3 e 8 segundos
        
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}px`;
            particle.style.animationDuration = `${duration}s`;
        
            document.querySelector(".particle-container").appendChild(particle);
        
            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        }
        
        // Criar várias partículas de tempos em tempos
        setInterval(createParticle, 200);
        

        const canvas = document.getElementById("matrixCanvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const columns = Math.floor(canvas.width / 20);
        const drops = Array(columns).fill(0);
        
        function drawMatrix() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00FF00";
            ctx.font = "16px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(0x30A0 + Math.random() * 96);
                ctx.fillText(text, i * 20, drops[i] * 20);
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        setInterval(drawMatrix, 50);
        