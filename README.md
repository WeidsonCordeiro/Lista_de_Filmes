<p align="center">
 <img src="https://github.com/user-attachments/assets/d4f48daa-775f-4779-b9cd-f2320faf66ad" alt="image"/>
</p>

# Lista de Filmes

Este projeto é uma aplicação React que consome a API do The Movie Database (TMDb) para exibir uma lista de filmes, permitindo busca e visualização de detalhes dos filmes.

---

## 🚀 Funcionalidades

- Exibição dos melhores filmes (Top Rated).
- Busca de filmes por título.
- Visualização de detalhes dos filmes, incluindo orçamento, faturamento, duração e descrição.
- Carregamento visual (spinner).

---

## 🛠️ Requisitos

### 1. **Configuração do Arquivo `.env`**

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

## Variaveis

- VITE_API_KEY=SEU_API_KEY_AQUI
- VITE_API=https://api.themoviedb.org/3/movie
- VITE_SEARCH=https://api.themoviedb.org/3/search/movie

Nota: Substitua SEU_API_KEY_AQUI pela sua chave de API do TMDb. Você pode obter uma chave de API [aqui](https://www.themoviedb.org/settings/api)

---

### 2. **Instalação das Dependências**

Certifique-se de que você possui o Node.js instalado. Em seguida, execute:

- npm install

💻 Como Executar o servidor de desenvolvimento:

- npm run dev

📚 Melhorias Futuras
Adicionar Bootstrap

- npm install bootstrap
