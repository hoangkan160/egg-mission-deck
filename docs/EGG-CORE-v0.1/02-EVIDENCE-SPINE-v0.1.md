[Reading 47 lines from start (total: 47 lines, 0 remaining)]

# EGG Evidence Spine v0.1
STATUS: CANONICAL
APPROVED: 2026-10-03

## Purpose
Create one machine-linkable chain from intent to accepted reality.

MISSION
 -> TASK
 -> DECISION
 -> ACTION
 -> RESULT
 -> EVIDENCE
 -> ACCEPTANCE

## Required identity
mission_id
task_id
decision_id
action_id
result_id
evidence_id
acceptance_id
run_id

## Required evidence fields
timestamp
actor
source
type
claim
payload_ref
verification_status

## Rules
1. Every material action emits an event.
2. Every result links to its action.
3. Every evidence item links to the result it proves.
4. Acceptance links to the evidence set it consumed.
5. DONE is invalid when the chain is broken.
6. Evidence is append-only; corrections create a new event.
7. Files, logs, screenshots, HTTP responses and test output may be evidence.
8. Human claims without supporting evidence are observations, not acceptance proof.

## Canonical question
For any DONE task EGG must answer:
"What happened, what proves it, and which acceptance gate consumed that proof?"
