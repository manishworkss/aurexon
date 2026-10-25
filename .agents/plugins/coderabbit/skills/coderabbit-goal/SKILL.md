---
name: coderabbit-goal
description: >-
  Use this skill when the user triggers a long-running CodeRabbit goal, asks for an autonomous codebase-wide review and auto-remediation run, or runs /goal with CodeRabbit.
---

# CodeRabbit /goal: Autonomous Code Health & Remediation Runner

Execute an autonomous, multi-step code quality and security remediation goal without stopping after every task, working until all targeted issues are resolved and verified.

## Execution Protocol

1. **Phase 1: Codebase Audit & Backlog Formulation**:
   - Inspect git status and project structure.
   - Run existing linters, type checkers, and test suites to establish a baseline.
   - Perform a multi-file architectural scan to identify:
     - Security vulnerabilities (CWE, OWASP).
     - Performance/resource leaks.
     - Deprecated API usages or anti-patterns.
     - Unhandled error cases.
   - Generate `.coderabbit/GOAL-TASKS.md` containing an actionable checklist of remediation items ranked by severity (`CRITICAL`, `MAJOR`, `MINOR`).

2. **Phase 2: Autonomous Remediation Loop**:
   - For each checklist item in `.coderabbit/GOAL-TASKS.md`:
     1. Open and view the target file.
     2. Implement the clean drop-in fix using exact file editing tools.
     3. Execute the project's test suite / build command to verify no regressions were introduced.
     4. If tests fail, diagnose and fix immediately.
     5. Commit the fix with a descriptive message (e.g. `fix(security): resolve unescaped SQL parameter in user queries`).
     6. Mark the item as completed (`- [x]`) in `.coderabbit/GOAL-TASKS.md`.
     7. Proceed directly to the next item without stopping to ask for user input.

3. **Phase 3: Final Verification & Audit Report**:
   - Run full static analysis and unit tests to ensure 100% green build.
   - Generate a concise Code Health Audit Report summarizing:
     - Total items remediated (broken down by Critical, Major, Minor).
     - Test suite pass rate.
     - List of files modified.
