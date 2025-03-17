# 📝 Vue Awesome Todo List

A minimal yet powerful Todo app with extensive customization options, built with Vue. 🚀

## 📸 Preview

## ✨ Features

**✅ Task Management**: Add, delete, and edit todos effortlessly.

**🎨 Custom Icons**: Assign a unique icon to each todo.

**🖊 Quick Editing**: A modal window allows users to add notes when editing a todo.

**📦 Drag & Drop**: Easily rearrange todos using drag & drop.

**📌 Auto-Sorting**: Completed tasks move to the bottom of the list and appear with a strikethrough and different color.

**📊 Task Statistics**: Displays the total, completed, and pending tasks at the top.

**📱 Responsive Design**: Optimized for both desktop and mobile.

**⚡ PWA (Progressive Web App)**: Install the app on your device and use it offline.

**💾 Persistent Storage**: Todos are saved in LocalStorage, so they remain even after refreshing the page.

## 🚀 Installation & Usage

```sh
# Install dependencies
pnpm install

# Run in development mode
pnpm dev
```

## 🖥 Technologies Used

- **Vue 3** + **Vite**
- **TypeScript**
- **Pinia** (State Management)
- **Tailwind CSS** (Styling)
- **PWA** (Installable Web App)

## 📑 Folder structure

```
.
├─ public
│  ├─ favicon.ico
│  └─ github.svg
├─ src
│  ├─ App.vue
│  ├─ main.ts
│  └─ types.d.ts
├─ .github
│  └─ workflows
│     └─ deploy.yaml              # CI/CD deployment workflow
├─ public
│  ├─ icons
│  │  ├─ image 1 ... 31.png       # Todo icons
│  │  └─ tick.png                 # Small icon at the bottom of the selected icon
│  └─ pwa
│     └─ icons.json               # PWA-related images
├─ src
│  ├─ assets
│  │  └─ main.css                 # Tailwind CSS file
│  ├─ components
│  │  ├─ Github.vue               # Link to the project's GitHub repository
│  │  ├─ Header.vue               # Top section of the box
│  │  ├─ SelectIconsList.vue      # List of selectable icons
│  │  ├─ Todos.vue                # Todos list
│  │  └─ TodosItem.vue            # Single item in the todos list
│  └─ stores
│     ├─ editModalStore.ts        # Pinia store for editing todos modal
│     └─ todoStore.ts             # Pinia store for managing todos
├─ public
│  └─ pwa
│     └─ ...                      # PWA required icons
└─ src
   └─ components
      ├─ EditModal
      │  ├─ index.ts
      │  ├─ index.vue
      │  └─ selectIcon.vue        # Select an icon inside the edit modal
      ├─ icons                    # UI icons
      │  ├─ IconCheck.vue
      │  ├─ IconPlus.vue
      │  ├─ IconSmile.vue
      │  └─ IconTrash.vue
      └─ TodoInput
         ├─ addButton.vue         # Add button for new todo
         ├─ index.ts
         ├─ selectIconButton.vue  # Button to select an icon
         ├─ textInput.vue         # Text input field
         └─ TodoInput.vue         # Main component that combines other components
├─ .gitignore
├─ .prettierrc
├─ env.d.ts
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
```

## 📜 License

This project is licensed under the **MIT License**.
