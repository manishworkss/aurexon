---
name: ralph-loop-learn
description: >-
  Use this skill when the user asks Ralph Loop to learn from a failure, persist build/test quirks, save an environment recovery pattern, or when /learn is used in a Ralph Loop context.
---

# Ralph Loop /learn: Execution Pattern & Failure Recovery Learner

Capture system quirks, test execution flags, flaky dependency handling, and environment nuances so future Ralph Loop iterations bypass known pitfalls automatically.

## Workflow

1. **Identify the Pattern to Learn**:
   - Analyze recent execution logs, user feedback, or debugging sessions to extract:
     - **Symptom/Trigger**: e.g., "Jest tests hang when Redis container is not running", "Need `NODE_OPTIONS=--openssl-legacy-provider`", "Always run `db:migrate` before testing module X".
     - **Resolution/Workaround**: The exact fix or pre-flight step that resolved the issue.
     - **Scope**: Whole project, specific test suites, or certain file types.

2. **Ensure Target Directory Exists**:
   - Create `.ralph/` in the workspace root if it doesn't already exist.
   - File target: `.ralph/learned-patterns.md`.

3. **Format Pattern Entry**:
   Append an entry following this format:
   ```markdown
   ### [PATTERN-YYYYMMDD-###] <Clear Title>
   - **Trigger / Symptom**: <What error or stall condition was observed>
   - **Workaround / Pre-flight**: <Exact shell command, flag, or code check to apply>
   - **Target Scope**: <Paths, test files, or environments impacted>
   - **Date Added**: <YYYY-MM-DD>
   ```

4. **Update PRD Guidance**:
   - If the learned pattern requires a permanent pre-flight rule for all future iterations, ensure it is added to the notes section of `PRD.md` or the loop configuration.
   - Confirm the learned pattern to the user with a concise summary.
