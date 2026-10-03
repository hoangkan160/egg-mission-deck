[Reading 50 lines from start (total: 50 lines, 0 remaining)]

# EGG Decision Plane v0.1
STATUS: CANONICAL
APPROVED: 2026-10-03

## Purpose
Select the cheapest safe decision mechanism before invoking deeper reasoning.

## Decision ladder
D0 RULE
-> D1 FAST CLASSIFIER / SCORER
-> D2 SYSTEM 2 REASONING
-> FOUNDER

## Ten initial decisions
01 RDC_ONLINE
02 TASK_READY
03 RETRY
04 RECOVER
05 ROUTE
06 ESCALATE
07 QA_PASS
08 DEPLOY
09 ACCEPT
10 DONE

## Routing law
Use D0 when deterministic evidence is sufficient.
Use D1 when a bounded classification or scoring problem remains.
Use D2 when context, planning or diagnosis requires reasoning.
Use FOUNDER for high-risk, irreversible or authority-bound decisions.

## Output
decision_id
selected_action
probabilities when probabilistic
mechanism
confidence
evidence_refs
policy_refs
risk
authority
escalation

## Critical rule
Confidence is a signal, not authority.
No decision may execute without policy + evidence + authority gates.

## JEV boundary
JEV-27B/JEV-27B-VL is an optional worker candidate.
It is not the EGG Decision Plane and does not become canonical authority.
