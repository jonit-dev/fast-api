# Core Tech Stack

The goal of the selected dependencies below is to create a smooth and blazing fast development experience, where we don't get boggled down by the complexity of the tech stack, but instead can focus on the business logic.

## Framework

- **Express** (`express`)
  - The backbone for your Node.js application.

### Development Tooling

- **ts-node-dev** (`ts-node-dev`)
  - Efficient TypeScript execution and reloading.

### Code Architecture

- **Inversify** (`inversify`)
  - A powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript.
- **Inversify Express Utils** (`inversify-express-utils`)
  - A library that helps you write modular, testable and maintainable code with InversifyJS and Express.

### Code Quality

- **ESLint** (`eslint`)
  - Linter for JavaScript and TypeScript.
- **Prettier** (`prettier`)
  - Code formatter.
- **Husky** (`husky`)
  - Git hooks made easy.
- **Lint Staged** (`lint-staged`)
  - Run linters against staged git files.

### Database

- **NeDB** (`nedb`)
  - Lightweight, embedded NoSQL database, good for smaller-scale applications.

### Process Management

- **PM2** (`pm2`)
  - Advanced, production process manager for Node.js.

### Testing Framework

- **Vitest** (`vitest`)

  - Fast unit testing framework, well-suited for modern JavaScript applications.

- **Supertest** (`supertest`)
  - HTTP assertions made easy.

### Security

- **Helmet** (`helmet`)
  - Helps secure Express apps by setting various HTTP headers.
- **Rate Limit** (`express-rate-limit`)
  - Basic rate-limiting middleware for Express.
- **Cors** (`cors`)
  - Essential for configuring API to accept requests from different origins.

### Data Validation

- **class-validator/class-transformer** (`class-validator`, `class-transformer`)
  - Provides decorators for data validation and transformation.

### Logging

- **Winston** (`winston`)
  - A versatile logging library.
- **Morgan** (`morgan`)
  - HTTP request logger middleware for Node.js.

### Environment Variables

- **Dotenv** (`dotenv`)
  - Manages environment variables.

### Payments

- **Stripe** (`stripe`)
  - Payment processing platform.

## Transactional Emails

- **SendinBlue** (`@sendinblue/client`)
  - Transactional email service. We can rotate between providers to ensure we don't overflow the free plan.

## Other

- **Swagger** (`swagger`)

  - API documentation tool.

- **New Relic** (`newrelic`)
  - Application performance monitoring tool.
