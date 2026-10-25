# Get Shit Done (GSD) Engineering Discipline & Protocols

When operating under the Get Shit Done (GSD) plugin:

1. **Spec-Driven Execution (No Vibecoding)**:
   - Never write production code without an explicit requirement or phase plan recorded in `.planning/`.
   - All tasks must map to a defined phase in `.planning/ROADMAP.md`.

2. **Artifact Hierarchy & Source of Truth**:
   - `.planning/PROJECT.md`: High-level vision, core user problems, and domain scope.
   - `.planning/REQUIREMENTS.md`: Detailed functional and non-functional acceptance criteria.
   - `.planning/ROADMAP.md`: Sequence of numbered phases (e.g. Phase 1, Phase 2).
   - `.planning/STATE.md`: Real-time project memory, active phase tracking, and recent decisions.
   - `.planning/phases/<phase_num>/PLAN.md`: Discrete task breakdown and verification criteria.

3. **Anti-Context-Rot Principle**:
   - To prevent context degradation, long sessions should reset or branch into fresh tasks.
   - Intermediate state is always flushed to disk before advancing to next phases.

4. **Wave-Based Execution & Verification**:
   - Independent tasks are executed in parallel or wave order.
   - Every phase must pass verification criteria before transitioning state to `DONE`.
