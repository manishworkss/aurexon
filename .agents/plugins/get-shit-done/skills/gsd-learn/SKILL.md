---
name: gsd-learn
description: >-
  Use this skill when the user asks GSD to learn an architectural convention, record a domain decision, update project memory, or when /learn is used in a GSD context.
---

# GSD /learn: Project Architecture & Convention Learner

Record critical project architectural patterns, domain constraints, technology decisions, and workflow adaptations directly into persistent GSD project memory.

## Learning Workflow

1. **Analyze Learning Context**:
   - Extract the core knowledge or decision from the immediate dialogue:
     - **Decision / Convention**: e.g., "Use SQLite with WAL mode for local storage instead of PostgreSQL", "API responses must follow JSON:API standard", "Use Zod schemas for all backend input validation".
     - **Domain Category**: `ARCHITECTURE | DATABASE | API_CONTRACT | TESTING | DEVOPS`.
     - **Applicable Phases**: Current phase, future phases, or global across milestone.

2. **Update Persistent Memory Files**:
   - **File 1: `.planning/learned-context.md`**:
     Append a structured convention block:
     ```markdown
     ### [CONVENTION-YYYYMMDD-###] <Title>
     - **Category**: `ARCHITECTURE | DATABASE | API_CONTRACT | TESTING | DEVOPS`
     - **Decision**: <What pattern or constraint is adopted>
     - **Context & Reason**: <Why this decision was made>
     - **Impact on Future Phases**: <How future phase planning must account for this>
     - **Date**: <YYYY-MM-DD>
     ```

   - **File 2: `.planning/STATE.md`**:
     - Update the **Decisions & Learnings** section with a concise 1-line summary to keep working memory up to date.

3. **Confirm to Developer**:
   - Provide a clean, structured confirmation of the recorded decision and how it will automatically constrain upcoming phase planning.
