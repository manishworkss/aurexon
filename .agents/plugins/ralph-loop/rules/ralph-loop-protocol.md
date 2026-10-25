# Ralph Loop Protocol & Operating Rules

When operating under the Ralph Loop plugin:

1. **Externalized Memory Only**:
   - The conversational context is ephemeral and must be treated as volatile.
   - All state, plan progress, and completed checkpoints must reside directly in:
     - `PRD.md` (Checklist of discrete, actionable tasks)
     - `progress.txt` (Append-only run log of completed work, errors encountered, and verification results)
     - Git commit history

2. **Single Atomic Task Focus**:
   - In each iteration, select **only the first unchecked task** (`- [ ]`) from `PRD.md`.
   - Do NOT try to solve multiple roadmap items in a single iteration. Solve one, verify it, commit it, log it, and advance.

3. **Verification Before Checkoff**:
   - Never mark a checkbox as completed (`- [x]`) without executing a verification command (e.g. unit test, compiler check, or script run).
   - If tests fail, diagnose and fix within the same task iteration or record the obstacle in `progress.txt` before retrying.

4. **Zero-Interruption Policy**:
   - Do not halt the iteration to ask the user trivial questions or ask for permission to continue to the next task.
   - Proceed continuously until all checklist items are complete or a critical unrecoverable blocker is reached.
