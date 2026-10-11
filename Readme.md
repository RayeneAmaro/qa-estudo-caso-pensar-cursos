# 🔍 QA Case Study: Pensar Cursos

Este repositório contém um estudo de caso prático em **Quality Assurance (QA)** focado na análise exploratória, mapeamento de jornadas, escrita de cenários em Gherkin e automação de testes da área pública de catálogo da plataforma **Pensar Cursos**.

> **⚠️ Aviso:** Este projeto faz parte de um portfólio acadêmico e de estudos independentes em QA. Trata-se de uma análise realizada sobre uma plataforma pública, sem qualquer vínculo comercial, contratual ou oficial com a marca "Pensar Cursos". O objetivo é exclusivamente demonstrar competências técnicas em testes de software.

---

## 🚀 Sobre o Projeto
O objetivo principal foi avaliar o comportamento da interface e dos fluxos de navegação e busca, identificando pontos fortes, lacunas de usabilidade (UX) e estruturando tanto a validação manual quanto a automatizada com **Playwright**.

### 🛠️ Tecnologias e Ferramentas Utilizadas
* **Automação:** Playwright (TypeScript)
* **Gestão e Escrita:** Cenários estruturados em padrão Gherkin (*Dado / Quando / Então*)
* **Documentação:** Relatórios de testes, matrizes de execução e relatórios de bugs formatados / PDF

---

## 📂 Estrutura do Repositório

```text
├── docs/
│   ├── Evidencias/
│   │   ├── BUGS/                # Evidências dos pontos de atenção e melhorias de UX
│   │   └── CT/                  # Prints e evidências dos cenários executados
│   ├── Fluxo Pensar Cursos.png  # Fluxograma da jornada do usuário
│   └── Relatório de Testes.pdf  # Documentação completa do estudo de caso
└── tests/                       # Arquivos de teste automatizados (Playwright)