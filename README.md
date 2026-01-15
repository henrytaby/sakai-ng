# Sakai-ng

Angular 21 + PrimeNG 21 template for building modern web applications.

## 📋 Requirements

- **Node.js**: v18.19+ or v20.9+ or v22.0+ (Recommended: v22.14+)
- **npm**: v9.0+ (Recommended: v11.0+)

## 🚀 Tech Stack

- **Angular**: 21.1.0
- **PrimeNG**: 21.0.3
- **TypeScript**: 5.9.3
- **TailwindCSS**: 4.1.11
- **Chart.js**: 4.4.2

## 📦 Installation

```bash
npm install
```

## ⚙️ Development

### Development Server

Start a local development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you modify source files.

### Code Scaffolding

Generate a new component:

```bash
ng generate component component-name
```

For a complete list of available schematics:

```bash
ng generate --help
```

## 🏗️ Building

### Development Build

```bash
npm run build
```

### Production Build

```bash
npm run build:prod
```

Artifacts will be stored in the `dist/` directory.

## 🧪 Testing

### Run Unit Tests

```bash
npm test
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Run Tests in CI Mode

```bash
npm run test:ci
```

Tests use [Karma](https://karma-runner.github.io) and Jasmine. Coverage reports are generated in the `coverage/` directory.

## ✨ Code Quality

### Linting

```bash
# Check for linting errors
npm run lint

# Fix linting errors automatically
npm run lint:fix
```

### Formatting

```bash
# Check code formatting
npm run format:check

# Format code automatically
npm run format
```

### Security Audit

```bash
npm run audit:security
```

### Check for Updates

```bash
npm run update:check
```

## 📁 Project Structure

```
sakai-ng/
├── src/
│   ├── app/
│   │   ├── layout/          # Layout components
│   │   └── pages/           # Page components
│   ├── assets/              # Static assets
│   ├── app.component.ts     # Root component
│   ├── app.config.ts        # App configuration
│   ├── app.routes.ts        # Route definitions
│   └── main.ts              # Application entry point
├── dist/                    # Build output
├── node_modules/            # Dependencies
└── public/                  # Public assets
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for development |
| `npm run build:prod` | Build for production |
| `npm test` | Run unit tests |
| `npm run test:ci` | Run tests in CI mode with coverage |
| `npm run lint` | Check for linting errors |
| `npm run lint:fix` | Fix linting errors |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run audit:security` | Run security audit |
| `npm run update:check` | Check for outdated dependencies |

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev/)
- [PrimeNG Documentation](https://primeng.org/)
- [Angular CLI Reference](https://angular.dev/tools/cli)

## 📄 License

See [LICENSE.md](LICENSE.md) for details.
