---
name: ralph-loop-run
description: >-
  Use this skill when the user asks to run an iteration of the Ralph Loop, execute tasks from PRD.md, or continue automated task processing.
---

# Ralph Loop Execution Runner

Execute tasks iteratively from `PRD.md` using the fresh-context externalized-memory loop.

## Execution Procedure

1. **Bootstrap Check**:
   - Verify `PRD.md` exists. If not, prompt the user to initialize one or draft a starter checklist based on current project goals.
   - Verify `progress.txt` exists; create it if missing.

2. **Select Next Task**:
   - Read `PRD.md` and find the first unchecked item: `- [ ] <Task Description>`.
   - If all tasks are checked, report completion to the user and stop.

3. **Execute Task**:
   - Read relevant codebase files required for the task.
   - Implement the minimal required changes to fulfill the task requirements.

4. **Verify**:
   - Run the appropriate test or verification command (e.g. `npm test`, `pytest`, `cargo test`, `go test`).
   - Confirm that existing tests pass and new functionality is verified.

5. **Commit & Log**:
   - Commit the changes to git:
     ```bash
     git add -A && git commit -m "feat/fix: <task description>"
     ```
   - Update `PRD.md` to mark the task completed: `- [x] <Task Description>`.
   - Append a timestamped entry to `progress.txt` detailing what was changed and verified.

6. **Next Iteration**:
   - If in continuous mode (or `ralph-loop-goal`), immediately advance to the next unchecked task without waiting.
