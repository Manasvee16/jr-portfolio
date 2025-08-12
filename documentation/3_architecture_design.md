# Architecture Design

## 1. System Architecture

### 1.1 High-Level Architecture
```
Next.js Application
├── App Router
├── Server-Side Components
├── Client-Side Components
└── Static Assets
```

### 1.2 Component Architecture
```
Portfolio Website
├── Layout
│   └── Theme Provider
├── Pages
│   └── Home
└── Components
    ├── Core Components
    │   ├── Hero Section
    │   ├── About Section
    │   ├── Skills Section
    │   ├── Experience Section
    │   ├── Projects Section
    │   ├── Achievements Section
    │   └── Contact Section
    ├── UI Components
    │   ├── Button
    │   ├── Card
    │   ├── Dialog
    │   └── Other Radix UI Components
    └── Shared Components
        ├── Particles
        ├── Floating Nav
        └── Footer
```

## 2. Directory Structure
```
jr-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── section components
│   └── ui/
├── hooks/
├── lib/
├── public/
└── styles/
```

## 3. Technical Architecture

### 3.1 Frontend Stack
- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS + CSS Modules
- **State Management**: React Hooks
- **Animations**: Framer Motion
- **UI Components**: Radix UI

### 3.2 Build and Bundling
- Next.js built-in bundler
- PostCSS for CSS processing
- TypeScript compilation

### 3.3 Performance Optimization
- Image optimization
- Code splitting
- Static generation

## 4. Component Design

### 4.1 Core Components
Each section component follows a similar structure:
```typescript
interface SectionProps {
  className?: string;
  // Additional props
}

export function Section({ className, ...props }: SectionProps) {
  return (
    <section className={cn("base-styles", className)} {...props}>
      {/* Component content */}
    </section>
  );
}
```

### 4.2 UI Components
Radix UI components are wrapped with custom styling:
```typescript
interface CustomComponentProps extends RadixComponentProps {
  variant?: "primary" | "secondary";
  // Additional props
}
```

## 5. Data Flow

### 5.1 Component Communication
- Props for parent-child communication
- Custom hooks for shared state
- Context for theme management

### 5.2 State Management
- Local component state with useState
- Complex state with useReducer
- Shared state with custom hooks

## 6. Design Patterns

### 6.1 Implemented Patterns
- Compound Components
- Render Props
- Custom Hooks
- Higher-Order Components
- Component Composition

### 6.2 Code Organization
- Feature-based structure
- Shared utilities
- Type definitions
- Constants and configurations
