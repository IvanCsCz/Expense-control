# Expense Control App

A simple and efficient budget and expense tracker built with React, TypeScript, and Vite. This application allows users to set a budget, record expenses across various categories, and monitor their spending through a visual progress bar.

## Features

- **Budget Management**: Set and track your overall budget.
- **Expense Tracking**: Add, edit, and delete expenses with details like name, amount, and date.
- **Categorization**: Categorize expenses (e.g., Food, Health, Savings, Leisure) for better organization.
- **Filtering**: Easily filter your expenses by category to see where your money goes.
- **Visual Progress**: Real-time visualization of budget usage with a circular progress bar.
- **Responsive Design**: Styled with Tailwind CSS for a modern, responsive look.

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useContext, useReducer)
- **Icons & UI**: Headless UI, Heroicons
- **Progress Bar**: React Circular Progressbar
- **Date Picking**: React Date Picker

## Getting Started

Follow these steps to get the project up and running locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd expense-control
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to the address shown in your terminal (usually `http://localhost:5173`).

### Building for Production

To create a production-ready build, run:
```bash
npm run build
```
The optimized files will be generated in the `dist` folder.

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the app for production.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run preview`: Previews the production build locally.
