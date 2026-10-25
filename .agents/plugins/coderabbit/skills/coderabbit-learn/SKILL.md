---
name: coderabbit-learn
description: >-
  Use this skill when the user asks to learn or record review preferences, suppress specific CodeRabbit warnings, save team conventions, or when /learn is used in a CodeRabbit context.
---

# CodeRabbit /learn: Review Preference Learner

Capture developer feedback, team architectural conventions, false-positive suppressions, and review preferences so that future CodeRabbit reviews adapt to your codebase.

## Workflow

1. **Extract Learning Context**:
   - Analyze the immediate conversation history or user instruction to identify:
     - What was corrected or requested (e.g., "don't warn about missing docstrings in test files", "enforce immutable data models in service layers", "allow any type in migration scripts").
     - The target scope (global, file pattern, or directory).
     - The type of rule (`ENFORCE_PATTERN`, `SUPPRESS_WARNING`, `CUSTOM_CHECK`).

2. **Ensure Target Directory Exists**:
   - Target file: `.coderabbit/learned-rules.md` in the workspace root.
   - If `.coderabbit/` directory does not exist, create it.

3. **Format Learned Rule Entry**:
   Append an entry following this format:
   ```markdown
   ### [RULE-YYYYMMDD-###] <Descriptive Title>
   - **Scope**: `<glob pattern, e.g. tests/** or src/domain/**>`
   - **Type**: `SUPPRESSION | ENFORCEMENT | CONVENTION`
   - **Guideline**: <Clear explanation of what to enforce or ignore>
   - **Rationale**: <User-provided or inferred context on why this convention is adopted>
   - **Learned Date**: <YYYY-MM-DD>
   ```

4. **Verify and Confirm**:
   - Save the update to `.coderabbit/learned-rules.md`.
   - Provide a concise confirmation to the user summarizing:
     - The rule that was recorded.
     - The scope where it applies.
     - How it will affect future reviews.
