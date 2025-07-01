# Contributing to Giglance

Welcome to Giglance! We're thrilled to have you join our mission of turning contributors into confident developers. Before diving into the guidelines, let me share the core intention behind this project.

## Intention Behind Building This Project

Giglance embodies a unique philosophy that combines **real-world learning** with **meaningful contribution**:

1. **Professional Development Experience**: This isn't just another tutorial project. Giglance simulates the exact workflows, standards, and practices you'll encounter in professional software development teams. From test-driven development to CI/CD pipelines, you'll gain hands-on experience with industry-grade practices.

2. **Learn by Building**: We believe the best way to master modern web development is by building something real. Here, you'll work with the PERN stack (PostgreSQL, Express.js, React/Next.js, Node.js) while following enterprise-level development practices that prepare you for your career.

3. **Confidence Through Contribution**: Every feature you build, every test you write, and every code review you participate in builds your confidence as a developer. You'll leave this project not just with code contributions, but with the skills and mindset of a professional developer.

Our goal is simple: **Transform you from a contributor into a confident, industry-ready developer** who understands not just how to code, but how to engineer software professionally.

## Table of Contents

1. Code of Conduct
2. Setting up the Project
3. Development Workflow
4. Request for Changes/Pull Requests
5. Guidelines to Follow
6. Testing Requirements
 

## Code of Conduct

Giglance is committed to fostering an inclusive, respectful, and collaborative environment where everyone can learn and grow:

1. **Respect and Inclusivity**: Treat all community members with kindness and respect, regardless of their experience level or background.
2. **Constructive Communication**: Use welcoming, inclusive language and provide constructive feedback that helps others learn.
3. **Growth Mindset**: Embrace mistakes as learning opportunities and support others in their development journey.
4. **Professional Conduct**: Maintain behavior appropriate for a professional development environment - no harassment, trolling, or inappropriate conduct.
5. **Collaborative Learning**: Share knowledge freely and help create an environment where everyone can succeed.

We're building more than just software - we're building a community of confident developers.

Have a look at the detailed [Code of Conduct](https://github.com/upes-open/OSoC-25-Giglance/blob/main/.github/CODE_OF_CONDUCT.md)


## Setting up the Project

Follow these steps to set up Giglance locally:

### 1. Fork and Clone the Repository
```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/YOUR-USERNAME/giglance.git
cd giglance
```

### 2. Install Node Version
```bash
nvm install
nvm use
```

### 3. Install All Dependencies
```bash
yarn install-all
```

### 4. Set Up PostgreSQL Database
```bash
# Start PostgreSQL via Docker
docker-compose up -d
```

### 5. Configure Backend Environment
```bash
cd backend
touch .env
```

Add the following to .env:
```bash
DATABASE_URL="postgresql://postgresuser:postgrespassword@localhost:5432/db_postgres?schema=public"
```

### 6. Set Up Database Schema
```bash
# Generate Prisma client and create migrations to your database
yarn db:generate
yarn db:migrate dev --name init
```

### 7. Configure Frontend Environment
```bash
cd ../frontend
touch .env
```

Add the following to .env:
```env
NEXT_PUBLIC_SERVER_API_URL="http://localhost:5000"
```

### 8. Start the Development Servers
```bash
# From the project root
cd .. # to get back to the root folder from the frontend folder
yarn dev
```

🎉 **You're all set!** Visit:
- 🖥️ Frontend: `http://localhost:3000`
- ⚙️ Backend API: `http://localhost:5000`


## Development Workflow

Giglance follows a professional development workflow designed to teach you industry practices:

### Issue-Based Development
1. **Browse Issues**: Check the [Issues](https://github.com/upes-open/OSoC-25-Giglance/issues) tab for tasks labeled by difficulty (`easy`, `intermediate`, `advanced`)
2. **Claim an Issue**: Comment on an issue to request assignment before starting work. Please follow the [Code of Conduct](https://github.com/upes-open/OSoC-25-Giglance/blob/main/.github/CODE_OF_CONDUCT.md)
3. **Understand Requirements**: Read the issue description carefully and ask questions if needed

### Branch Strategy
```bash
# Always start from the latest main branch
git checkout main
git pull upstream main

# Create a feature branch with descriptive naming
git checkout -b feat/user-authentication
# or
git checkout -b fix/login-validation-bug
```

### Test-Driven Development (TDD)
For backend contributions, we follow TDD practices:

1. **Write Tests First**: Before implementing features, write test cases that define expected behavior
2. **Implement Features**: Write the minimum code needed to make tests pass
3. **Refactor**: Improve code quality while keeping tests green


## Request for Changes/Pull Requests

### Setting Up Git Remotes

1. **Add Remote Repositories**:
   ```bash
   # Add your fork as 'origin'
   git remote add origin https://github.com/YOUR-USERNAME/giglance.git
   
   # Add the main repository as 'upstream'
   git remote add upstream https://github.com/upes-open/giglance.git
   ```

2. **Verify Remotes**:
   ```bash
   git remote -v
   ```

### Creating a Pull Request

1. **Stay Updated**:
   ```bash
   git pull upstream main
   ```

2. **Push Your Changes**:
   ```bash
   git push origin your-feature-branch
   ```

3. **Open PR**: Create a pull request from your fork to the main repository following our PR template


## Guidelines to Follow

### 1. Issue Assignment
- **Always get assigned** to an issue before starting work
- Comment on the issue requesting assignment
- Wait for maintainer confirmation before proceeding

### 2. Commit Format
Follow conventional commit standards:
```bash
feat: add user authentication endpoint
fix: resolve login validation bug
update: enhanced profile page ui
remove: cleanup unnecessary files with knip
refactor: optimize database queries
```

### 3. PR Title Format
```
#123 - Add user authentication system
#456 - Resolve login validation issue
```

### 4. Code Quality Standards
- **TypeScript**: All code must be properly typed
- **ESLint**: Follow our linting rules
- **Prettier**: Code must be properly formatted
- **File Naming**: Use kebab-case (`user-service.ts`, not `UserService.ts`)
- **Git Hooks**: Husky will automatically validate your code before every commit

### Git Hooks (Automated Quality Control)

Our project uses **Husky** to maintain the highest code quality standards automatically:

#### 🔧 Pre-commit Hook (Runs automatically before each commit)
The pre-commit hook performs these checks in order:

1. **TypeScript Type Checking** 
   - Runs `yarn ts-check` to validate all TypeScript types
   - Ensures no type errors exist in frontend or backend
   - **Blocks commit if type errors are found**

2. **Code Formatting & Linting**
   - **Formats your code** using Prettier
   - **Fixes linting issues** with ESLint  
   - **Ensures consistency** across all contributions

3. **Quality Validation**
   - All checks must pass before commit is allowed
   - **No manual action needed** - it just works!

#### 📝 Commit Message Hook (Validates your commit messages)
- **Enforces our commit format** to maintain project history
- **Provides helpful feedback** if format is incorrect
- **Examples of valid commits**:
  ```bash
  feat: add user authentication endpoint
  fix: resolve login validation bug
  create: new files and directories
  add: additional functionalities
  refactor: optimize database queries
  update: enhance user profile UI
  remove: cleanup unused dependencies
  ```

### Type Checking Commands (Manual)
```bash
# Check types for entire project
yarn ts-check

# Check types for frontend only
yarn ts-check:frontend

# Check types for backend only
yarn ts-check:backend

# Watch mode for development
yarn ts-check:watch

# Clean and re-check types
yarn ts-check:clean
```

#### First-time Setup
After cloning the repository, Husky will be automatically set up when you run:
```bash
yarn install-all
```

#### Troubleshooting Git Hooks
If hooks aren't working:
```bash
# Reinstall husky
yarn prepare
# or
npx husky
```

#### Make hooks executable

```bash
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg

# Test the hooks manually
./.husky/pre-commit
```

#### What This Means for You
- **TypeScript errors are caught before commit** - no broken builds reach the repository
- **Your code gets formatted automatically** - no need to worry about spacing or semicolons
- **Commit messages are validated** - helps maintain a clean project history
- **Less back-and-forth in code reviews** - your code arrives properly formatted and type-safe
- **Learn professional practices** - this is exactly how real development teams work

#### Important Notes
- **Type checking runs on every commit** - this ensures zero TypeScript errors in the codebase
- **If type checking fails, your commit will be blocked** - fix the errors and try again
- **The process might take 10-30 seconds** - this is normal for thorough quality checking
- **All checks must pass** - there's no way to bypass these quality gates

**Don't worry if your first few commits get rejected** - the error messages will guide you to fix any issues!

#### Pro Tips
- Run `yarn ts-check` manually during development to catch issues early
- Use `yarn ts-check:watch` in a separate terminal while coding
- Fix TypeScript errors as you code rather than waiting for commit time
- The pre-commit hook is your friend - it ensures you never commit broken code!

### Writing Tests
- **Unit Tests**: Test individual functions and components
- **Integration Tests**: Test API endpoints and database interactions


## Getting Help

- 📖 **Documentation**: Check our detailed docs in the `/docs` folder
- 👥 **Community**: Join our community discussions

## Recognition

Contributors who consistently follow our guidelines and make meaningful contributions will be:
- Featured in our README
- Featured in our community network

---

**Remember**: Every contribution, no matter how small, is valuable. We're here to support your growth as a developer. Welcome to the OPEN community Giglance Project! 🚀

*Let's build something amazing together and turn you into a confident developer.*
