---
name: gsd-goal
description: >-
  Use this skill when the user triggers a long-running GSD goal, asks for autonomous end-to-end milestone completion, or runs /goal with GSD.
---

# GSD /goal: Autonomous Milestone Delivery Engine

Execute an autonomous, multi-phase delivery goal that advances a project through all remaining milestone phases (Scoping → Phase Planning → Wave Execution → Verification) without halting for user prompts.

## Goal Execution Lifecycle

1. **Milestone Assessment**:
   - Inspect `.planning/ROADMAP.md` to identify all pending/incomplete phases.
   - Inspect `.planning/STATE.md` to determine current active phase.
   - Read `.planning/learned-context.md` to incorporate all established conventions.

2. **Phase Execution Loop**:
   For each remaining phase $P$ in the roadmap:
   
   - **Step A: Plan Generation**:
     - Create `.planning/phases/P/PLAN.md` with concrete task lists, file targets, and verification criteria.
   
   - **Step B: Wave Execution**:
     - Implement task changes sequentially or in parallel waves.
     - Enforce atomic git commits per completed task (`feat(phase-P): <task summary>`).
   
   - **Step C: Verification & Quality Gate**:
     - Run regression tests and check acceptance criteria.
     - If failures occur, perform immediate in-turn debugging and repairs.
     - Create verification report `.planning/phases/P/VERIFICATION.md`.
   
   - **Step D: State Transition**:
     - Update `.planning/ROADMAP.md` to mark Phase $P$ as complete (`[x]`).
     - Update `.planning/STATE.md` with completed progress.
     - Advance immediately to Phase $P+1$ without pausing for manual prompt input.

3. **Milestone Completion & Shipping**:
   - When all phases are completed:
     - Run full test suite and build verification.
     - Generate a final Milestone Summary in `.planning/MILESTONE-SUMMARY.md`.
     - Present an executive report to the user summarizing delivered capabilities and verification evidence.
