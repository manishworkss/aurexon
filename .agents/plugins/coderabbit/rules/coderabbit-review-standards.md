# CodeRabbit Review Standards & Guidelines

When conducting code reviews under the CodeRabbit plugin:

1. **High-Signal Focus**:
   - Prioritize security, concurrency bugs, data loss risks, logic bugs, performance bottlenecks, and breaking API changes.
   - Suppress trivial nitpicks (e.g., formatting already covered by linters/prettiers) unless explicitly requested.

2. **Actionable Feedback**:
   - Every identified issue must cite the exact file and line range.
   - Provide a clear explanation of *why* the current implementation is problematic and *what* could happen in production.
   - Provide an exact, drop-in replacement diff snippet whenever suggesting a code change.

3. **Severity Categorization**:
   - `CRITICAL`: Security vulnerabilities (e.g. SQLi, secret leaks), potential data corruption, crashes in hot paths.
   - `MAJOR`: Logic flaws, unhandled error conditions, severe memory or performance issues.
   - `MINOR`: Suboptimal idioms, code maintainability issues, missing test edge cases.
   - `INFO`: Commendations for elegant solutions or architectural observations.

4. **Review Memory & Learned Rules**:
   - Always check `.coderabbit.yaml` or `.coderabbit/learned-rules.md` in the repository root before reviewing to honor team-specific suppressions, style guides, and learned exceptions.
