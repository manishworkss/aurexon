#!/usr/bin/env bash
# Ralph Loop autonomous task runner script
# Usage: ./ralph_loop.sh [max_iterations]

set -euo pipefail

MAX_ITERATIONS="${1:-25}"
PRD_FILE="PRD.md"
PROGRESS_FILE="progress.txt"

if [ ! -f "$PRD_FILE" ]; then
    echo "Error: $PRD_FILE not found in current directory."
    exit 1
fi

touch "$PROGRESS_FILE"
echo "=== Starting Ralph Loop (Max iterations: $MAX_ITERATIONS) ==="

count=0
while [ $count -lt $MAX_ITERATIONS ]; do
    # Check for remaining unchecked tasks
    if ! grep -q -- "- \[ \]" "$PRD_FILE"; then
        echo "All tasks in $PRD_FILE are complete!"
        break
    fi

    count=$((count + 1))
    echo "[Loop #$count] Picking next task from $PRD_FILE..."
    
    # Extract the next task description
    NEXT_TASK=$(grep -m 1 -- "- \[ \]" "$PRD_FILE" | sed 's/- \[ \] //')
    echo "Current task: $NEXT_TASK"

    # In CLI mode, invoke Antigravity or custom command runner
    echo "Running iteration for: $NEXT_TASK"
    # Placeholder for invoking agent CLI or local test runner
    # If using Antigravity CLI: agy run "ralph-loop-run"
    
    echo "Completed iteration #$count"
done

echo "=== Ralph Loop execution ended after $count iterations ==="
