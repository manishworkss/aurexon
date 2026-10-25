---
name: ralph-loop-goal
description: >-
  Use this skill when the user triggers a long-running Ralph Loop goal, asks for unattended overnight execution of PRD.md tasks, or runs /goal with Ralph Loop.
---

# Ralph Loop /goal: Unattended Autonomous PRD Execution Goal

Run an autonomous, uninterrupted task completion loop that iterates through all tasks in `PRD.md`, commits tested code atomically, and does not stop until 100% of the checklist items are verified or an iteration cap is reached.

## Goal Execution Loop

1. **Pre-Flight Validation**:
   - Verify `PRD.md` exists and contains checklist items (`- [ ]`).
   - If `PRD.md` is empty or missing, generate an actionable PRD draft from current requirements and ask for confirmation before launching the unattended run.
   - Read `.ralph/learned-patterns.md` to load known environment quirks or required flags.
   - Count total pending tasks.

2. **Autonomous Iteration Engine**:
   - Begin loop (Iteration counter $i = 1$ to $N$, default cap: 25 iterations per session):
     1. **Locate Task**: Find the top-most unchecked task in `PRD.md`.
     2. **Execute**: Read relevant files, apply precise edits, and maintain clean code structure.
     3. **Verify**: Run the corresponding test suite (e.g. `npm test`, `pytest`, `cargo test`).
        - If tests fail, perform up to 3 self-correction attempts within this iteration.
        - If unresolved after 3 attempts, log the blocker in `progress.txt`, leave the item unchecked, and add a follow-up sub-item to investigate.
     4. **Commit**: 
        ```bash
        git add -A && git commit -m "feat(loop): completed task - <task title>"
        ```
     5. **Mark Done**: Update `PRD.md` line from `- [ ]` to `- [x]`.
     6. **Log Progress**: Append entry to `progress.txt`:
        ```text
        [YYYY-MM-DD HH:MM:SS] Iteration #i: Completed "<task title>" | Status: PASSED | Commit: <hash>
        ```
     7. **Check Termination**:
        - If unchecked tasks remain and iteration cap is not exceeded: immediately trigger next iteration without prompting the user.
        - If 0 unchecked tasks remain: break loop.

3. **Post-Goal Summary**:
   - Present a concise, triumphant completion summary:
     - Total tasks completed in this run.
     - Commits created.
     - Final test suite status.
     - Link to `[progress.txt](file:///path/to/progress.txt)`.
