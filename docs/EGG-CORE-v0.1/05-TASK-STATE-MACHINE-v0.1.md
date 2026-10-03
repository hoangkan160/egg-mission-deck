[Reading 39 lines from start (total: 39 lines, 0 remaining)]

# EGG Task State Machine v0.1
STATUS: CANONICAL
APPROVED: 2026-10-03

## Lifecycle
TODO -> READY -> IN_PROGRESS -> VERIFYING -> ACCEPTED -> DONE

## Failure and recovery
IN_PROGRESS -> FAILED
VERIFYING -> FAILED
FAILED -> REPAIR
FAILED -> RETRY
FAILED -> ROLLBACK
FAILED -> ESCALATE

## Transition rules
TODO -> READY requires dependencies satisfied.
READY -> IN_PROGRESS requires owner and execution authority.
IN_PROGRESS -> VERIFYING requires an execution result.
VERIFYING -> ACCEPTED requires Acceptance evidence.
ACCEPTED -> DONE requires delivery/closure evidence.
FAILED requires failure evidence.
Recovery transitions must preserve mission_id and task_id.

## Forbidden
- worker-created terminal DONE
- DONE without ACCEPTED
- ACCEPTED without evidence
- transition without audit event
- parallel state authorities

## Identity
mission_id
task_id
agent_id
session_id
run_id

Human labels are never identity keys.
