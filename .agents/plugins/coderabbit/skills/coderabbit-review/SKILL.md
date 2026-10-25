---
name: coderabbit-review
description: >-
  Use this skill when the user asks for a CodeRabbit code review, PR review, diff analysis, or security and architectural review of current changes.
---

# CodeRabbit Code Review

Perform a deep, multi-pass code review mimicking CodeRabbit's automated PR review engine.

## Review Workflow

1. **Identify Target Changes**:
   - For unstaged/staged work: Run `git diff` or `git status` to see altered files.
   - For branch review: Run `git diff main...HEAD` (or target base branch).
   - If specific files are mentioned, inspect those files directly.

2. **Check Learned Preferences**:
   - Read `.coderabbit/learned-rules.md` or `.coderabbit.yaml` if present in the workspace.
   - Filter out known false positives or rules explicitly marked as ignored.

3. **Multi-Pass Analysis**:
   - **Pass 1 (Security & Safety)**: Secrets, injection vectors, authorization bypasses, OWASP Top 10 vulnerabilities.
   - **Pass 2 (Logic & Performance)**: Race conditions, memory leaks, unhandled exceptions, N+1 queries, asymptotic complexity regressions.
   - **Pass 3 (Maintainability & Tests)**: Test coverage gaps, API contract changes, dead code.

4. **Generate Output**:
   Structure the review output into:
   - **Executive Summary**: 2-3 sentences summarizing the intent and overall health of the changes.
   - **Action Items by Severity**:
     - `CRITICAL` / `MAJOR` / `MINOR`
     - File reference with clickable link: `[filename](file:///path/to/file#L10-L25)`
     - Explanation of the hazard
     - Suggested drop-in diff
   - **Praise & Observations**: Highlight well-crafted patterns or clean abstractions.
