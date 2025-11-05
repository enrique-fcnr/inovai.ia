// Dados para o Roadmap Reativo (SEGUNDA VERSÃO - #roadmap)
const roadmapData = [
    { 
        id: 1, 
        title: 'Automação Interna & RH', 
        icon: 'Users', 
        description: 'Otimização de fluxos de trabalho internos, como onboarding, gestão de documentos e suporte de TI. Liberamos sua equipe para focar em tarefas estratégicas.' 
    },
    { 
        id: 2, 
        title: 'Automação Financeira & Contábil', 
        icon: 'Wallet', 
        description: 'Implementação de IA para previsão de fluxo de caixa, conciliação automática de contas e detecção de fraudes, garantindo precisão e conformidade.' 
    },
    { 
        id: 3, 
        title: 'Automação Comercial & Vendas', 
        icon: 'Target', 
        description: 'Uso de LLMs e machine learning para qualificação de leads, personalização de campanhas de marketing e otimização de funis de vendas.' 
    },
    { 
        id: 4, 
        title: 'Automação Operacional & Logística', 
        icon: 'Truck', 
        description: 'Otimização de cadeias de suprimentos, roteirização inteligente e monitoramento de qualidade na produção, reduzindo custos e tempo de entrega.' 
    }
];

// Função para atualizar o conteúdo do Roadmap Ágil (Segunda Versão - Chamada via onclick)
function updateRoadmap(stepId) {
    const steps = document.querySelectorAll('.roadmap-step');
    const detailContainer = document.getElementById('roadmap-details');
    const data = roadmapData.find(item => item.id === stepId);

    // Remove a classe ativa de todos os passos
    steps.forEach(step => {
        step.classList.remove('roadmap-step-active', 'bg-white', 'text-inova-accent-text'); // Remove classe de destaque
        step.classList.add('border-black/20', 'text-black');
    });

    // Adiciona a classe ativa ao passo clicado
    const activeStep = document.getElementById(`step-${stepId}`);
    if (activeStep) {
        activeStep.classList.add('roadmap-step-active', 'bg-white', 'text-inova-accent-text'); // Adiciona classe de destaque
        activeStep.classList.remove('border-black/20', 'text-black');
    }

    // Atualiza o conteúdo reativo
    detailContainer.innerHTML = `
        <div class="space-y-4 p-8 bg-white border border-inova-accent-border rounded-xl shadow-lg transition-all duration-300">
            <div class="flex items-center space-x-3 text-inova-accent-text">
                 <i data-lucide="${data.icon}" class="w-8 h-8"></i>
                <h3 class="text-3xl font-extrabold tracking-tight">${data.title}</h3>
            </div>
            <p class="text-gray-700 text-lg leading-relaxed">${data.description}</p>
        </div>
    `;
    // Redraw Lucide icons inside the dynamically inserted content
    // 'lucide' is available globally via CDN load in index.html
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializa Lucide icons para elementos estáticos
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
    
    // Inicia o roadmap ágil (Segunda Versão) no primeiro passo
    // Chamamos updateRoadmap globalmente após a definição da função
    updateRoadmap(1); 
    
    // --- Lógica do Roadmap (Versão Tabs Clássica - #roadmap-tabs) ---
    const tabs = document.querySelectorAll('.roadmap-tab');
    const contentArea = document.getElementById('roadmap-content');

    // Conteúdos para a Versão Tabs
    const roadmapSteps = {
        '1': {
            title: 'O Início: Definição de Valor',
            text: 'Nesta fase, realizamos workshops imersivos para mapear as dores e oportunidades. A AI não é o objetivo, mas a ferramenta para solucionar seus maiores desafios.',
            details: [
                'Análise de ROI e Viabilidade Técnica.',
                'Design de Solução (LLMs, Visão Computacional, etc.).',
                'Preparação de Dados.'
            ]
        },
        '2': {
            title: 'Construção: Excelência em Engenharia',
            text: 'Utilizamos metodologias ágeis (Agile/Scrum) para construir e iterar rapidamente seus modelos de AI, garantindo qualidade e alinhamento constante com seus objetivos.',
            details: [
                'Treinamento e validação de modelos.',
                'Integração em sistemas legados.',
                'Testes rigorosos de performance e segurança.'
            ]
        },
        '3': {
            title: 'Futuro: Escala e Otimização',
            text: 'Após o lançamento, focamos na sustentabilidade do projeto. Implementamos pipelines de MLOps para monitorar o desempenho, evitar *drift* e garantir o máximo retorno.',
            details: [
                'Monitoramento 24/7 (MLOps).',
                'Refinamento contínuo e A/B Testing.',
                'Suporte e treinamento para equipes internas.'
            ]
        }
    };

    // Função para atualizar o conteúdo (Primeira Versão - Tabs)
    const updateRoadmapTabs = (step) => {
        const stepData = roadmapSteps[step];
        
        // Efeito de fade-out/fade-in
        contentArea.style.opacity = 0;

        setTimeout(() => {
            // Atualiza o título e texto, usando a classe de gradiente para o título
            contentArea.innerHTML = `
                <h4 class="text-4xl font-extrabold mb-4 text-gradient">${stepData.title}</h4>
                <p class="text-lg mb-4 text-gray-700">${stepData.text}</p>
                <ul class="list-disc pl-5 text-gray-700 space-y-2">
                    ${stepData.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            `;
            contentArea.style.opacity = 1;
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
        }, 300);
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const step = this.getAttribute('data-step');

            // 1. Remove active state from ALL tabs and reset to standard inactive style
            tabs.forEach(t => {
                // Remove all active/accent classes
                t.classList.remove('active', 'bg-gradient-primary', 'text-white', 'shadow-lg'); 
                
                // Ensure standard inactive style: gray border and black text
                t.classList.add('border-gray-200', 'text-black');
                
                // Remove any border-related inline styles set previously
                t.style.borderColor = ''; 
                t.style.borderImage = '';
            });

            // 2. Add the active state to the clicked tab
            this.classList.add('active', 'bg-gradient-primary', 'text-white', 'shadow-lg');
            
            // The CSS rule 'border: none !important;' handles the border removal in the active state.
            
            // Ensure the inactive border/text is removed from the active one
            this.classList.remove('border-gray-200', 'text-black');

            updateRoadmapTabs(step); 
        });
    });

    // Inicializa o Roadmap (Primeira Versão) no primeiro passo
    // Força a ativação visual no carregamento
    const initialTab = document.getElementById('tab-1');
    if (initialTab) {
        initialTab.classList.add('active', 'bg-gradient-primary', 'text-white', 'shadow-lg');
        initialTab.classList.remove('border-gray-200', 'text-black');
        // The border removal is handled by the CSS rule .roadmap-tab.active
    }
    updateRoadmapTabs('1');


    // --- Lógica para o FAQ Interativo (Accordion com Transição e ARIA) ---
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {

        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Fecha todos os outros itens
            document.querySelectorAll('.faq-toggle').forEach(t => {
                if (t !== this) {
                    t.setAttribute('aria-expanded', 'false');
                    t.querySelector('.faq-icon').classList.remove('rotate-180');
                    t.nextElementSibling.classList.remove('open');
                }
            });

            // Abre ou fecha o item clicado
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
                icon.classList.add('rotate-180');
                content.classList.add('open');
            } else {
                this.setAttribute('aria-expanded', 'false');
                icon.classList.remove('rotate-180');
                content.classList.remove('open');
                
            }
        });
    });

    // --- NOVO: Lógica para Arrastar (Drag) o Carrossel de Logos ---
    const slider = document.getElementById('logo-track');
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('is-dragging');
            slider.style.cursor = 'grabbing'; // Força o cursor grabbing
            
            // Pega a posição inicial do mouse e o scroll atual
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('is-dragging');
            slider.style.cursor = 'grab'; // Retorna ao cursor grab
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('is-dragging');
            slider.style.cursor = 'grab'; // Retorna ao cursor grab
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault(); // Previne seleção de texto
            
            // Calcula o movimento
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Multiplicador para tornar o arrastar mais rápido
            
            // Define o novo scroll
            slider.scrollLeft = scrollLeft - walk;
        });
    }
    // Fim da lógica de Arrastar
});