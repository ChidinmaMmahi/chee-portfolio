## CheePortfolio – Developer Portfolio

**CheePortfolio** is a modern, single-page developer portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
It showcases professional experience, featured projects, technical skills, and contact details with smooth section-based navigation and subtle animations.

---

### 🚀 Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tooling**: Vite, ESLint, TypeScript

---

### 📁 Project Structure (High-Level)

- **`src/App.tsx`**: Sets up the router, global layout, header/footer, and page transition animation.
- **`src/pages/Home.tsx`**: Renders the main one-page layout by stitching together all sections.
- **`src/sections`**:
  - `Hero`: Intro section with primary profile information.
  - `About`: Short bio and overview.
  - `Skills`: Visual mapping of technical skills.
  - `Projects`: Showcases key projects from `projects/projectList.ts`.
  - `Experience`: Work history from `experience/experienceList.ts`.
  - `Contact`: Call-to-action/contact section.
- **`src/components`**: Reusable UI pieces such as `Header`, `Footer`, `Button`, `SectionLayout`, and `TypingText`.
- **`src/hooks`**: Custom hooks for active section tracking, smooth scrolling, and local storage.
- **`public`**: Static assets such as profile images, project screenshots, and resume PDF.

---

### 🔧 Getting Started

#### 1. Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node)

#### 2. Install Dependencies

In the project root:

```bash
npm install
```

#### 3. Run the Development Server

```bash
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your browser.

#### 4. Create a Production Build

```bash
npm run build
```

#### 5. Preview the Production Build

```bash
npm run preview
```

---

### 🧱 Key Content Sources

- **Projects**: Defined in `src/sections/projects/projectList.ts`.  
  Each project includes:
  - `image`: Screenshot path from `public/project-screenshots`.
  - `title`, `description`
  - `webhref`: Live demo link.
  - `githref`: GitHub repository.
  - `techStack`: Stack tags rendered in the UI.

- **Experience**: Defined in `src/sections/experience/experienceList.ts`.  
  Each item includes:
  - `jobDuration`
  - `jobTitle`
  - `employer`
  - `responsibilities`

You can edit these files to update the portfolio content without touching layout logic.

---

### 🎨 Customization

- **Branding & Text**: Update copy in the section components under `src/sections`.
- **Profile & Screenshots**: Replace images in `public/` and `public/project-screenshots/`.
- **Resume**: Swap out `public/resume.pdf` with your own file (keeping the same name or updating any links that reference it).
- **Theme & Layout**: Adjust Tailwind classes in components and layouts; animations are configured via Framer Motion in components like `App.tsx` and individual sections.

---

### 🧹 Code Quality

Lint the codebase with:

```bash
npm run lint
```

ESLint is configured for React + TypeScript and integrated with the Vite toolchain.

---

### 📄 License

This project is currently intended for personal portfolio use.  
If you plan to reuse or extend it for your own portfolio, feel free to fork and customize as needed.
