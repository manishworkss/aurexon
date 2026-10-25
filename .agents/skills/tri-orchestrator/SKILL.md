---
name: tri-orchestrator
description: >-
  Use this skill whenever the user asks to build any website, develop any web application, implement a new feature, or asks the plugins to decide what to do next with best strategic thoughts.
---

# Tri-Plugin Master Orchestrator (GSD + Ralph Loop + CodeRabbit)

Whenever tasked with building a website, web app, or software component, this skill autonomously orchestrates the Tri-Plugin Engine:

1. **GSD** structures the specifications, technical architecture, and roadmap.
2. **Ralph Loop** executes atomic tasks with fresh-context discipline.
3. **CodeRabbit** audits the diff, ensures security & high aesthetic quality, and remediates issues.
4. **Strategic Reasoning ("Best Thoughts")** evaluates the system state to determine the highest-leverage next move.

---

## Autonomous Execution Workflow

### Step 1: GSD Discovery & Spec Drafting
* Check if `PRD.md` and `.planning/ROADMAP.md` exist.
* If starting a new website or project:
  - Formulate design system tokens (palette, typography, layout, animations).
  - Draft `PRD.md` with prioritized, verifiable checklist items (`- [ ]`).
  - Set up `.planning/PROJECT.md` with core user value proposition.

### Step 2: Ralph Loop Atomic Implementation
* Pick the top-most unchecked task in `PRD.md`.
* Write production-quality code adhering to modern web craftsmanship:
  - Rich aesthetics (vibrant color balance, dark mode, glassmorphism, micro-interactions).
  - Semantic HTML5, accessible tags, responsive CSS flex/grid.
  - Interactive components.
* Verify the code (run local tests, lint, or syntax validation).
* Record the step in `progress.txt` and commit changes.

### Step 3: CodeRabbit Automated Quality & Security Gate
* Perform an automated multi-pass review on the code changes:
  - **Security**: No XSS vulnerabilities, no leaked keys, safe DOM manipulation.
  - **Performance**: Zero blocking scripts, optimized assets, smooth 60fps animations.
  - **Responsive Design**: Flawless display across mobile, tablet, and desktop viewports.
* If any issues are found, auto-remediate them immediately before advancing.
* Mark the task complete in `PRD.md` (`- [x]`).

### Step 4: "Best Thoughts" Strategic Next Step Synthesis
After completing each cycle, synthesize the next step using this structured summary:

```markdown
### 🧠 Tri-Plugin Decision & Next Thoughts
* ⚡ **GSD Strategic Status**: [Current Milestone / Phase progress]
* 🔄 **Ralph Loop Progress**: Completed task "[Task Name]" | Progress: X/Y tasks done
* 🐰 **CodeRabbit Audit**: Passed with [0 issues / auto-remediated X issues]
* 💡 **Best Thoughts (Why this next)**: [Strategic rationale explaining why the upcoming task delivers the most user value or unblocks dependent components]
* 🔮 **Next Action**: [The exact next task about to be executed]
```
