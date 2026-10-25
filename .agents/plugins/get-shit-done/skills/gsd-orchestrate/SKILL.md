---
name: gsd-orchestrate
description: >-
  Use this skill when the user wants to coordinate the GSD workflow, create or review project roadmaps, or transition between GSD phases.
---

# GSD Workflow Orchestrator

Coordinate the structured GSD software delivery lifecycle: Discovery → Scoping → Roadmap → Phase Execution → Verification.

## Orchestration Flow

1. **State Evaluation**:
   - Check if `.planning/STATE.md` exists.
   - If not, check if `.planning/PROJECT.md` exists.
   - Determine current lifecycle status (Uninitialized, Planning, Executing Phase N, or Verifying).

2. **Route to Action**:
   - **Uninitialized**: Recommend or trigger `gsd-new-project` to draft `PROJECT.md`, `REQUIREMENTS.md`, and `ROADMAP.md`.
   - **Phase Planning Needed**: Guide phase scoping for next phase and generate `.planning/phases/XX-name/PLAN.md`.
   - **Ready for Execution**: Guide execution of planned tasks with atomic verification.
   - **Verification**: Run acceptance criteria checks and update `ROADMAP.md` status to complete.

3. **Status Reporting**:
   - Summarize active phase, progress percentage, completed milestones, and immediate next action.
