[Reading 173 lines from start (total: 173 lines, 0 remaining)]

# GĂNG TAY — EGG SPEED & VALUE EXECUTION ENGINE v1.0

**Canonical:** Founder approved 2026-10-01
**Parent:** MỌC CÁNH 2 — Autonomous Value Engine

## Purpose
Eliminate slow, error-prone, UI-driven execution and move EGG from task completion to Accepted Value delivery.

## Origin — 16s Google Flow post-mortem
1. Excessive sequential browser operations.
2. Founder exposed to intermediate UI execution.
3. Spelling/input errors visible in browser.
4. Generation treated as completion instead of verified value.
5. Weak timeout/fallback/recovery.
6. Unnecessary waiting and repeated work.
7. Insufficient QA/evidence before ĐÂU A XEM.

## 28 Problems → GĂNG TAY Mechanisms
1. Flow operations → Value Job Definition
2. Browser as CPU → Browser = HAND only
3. Founder sees execution → Founder Visibility Layer
4. Uncontrolled typing → Validated Payload + Prompt Lock
5. No acceptance gate → Acceptance Gate
6. Generate = done → QA Loop
7. Sequential execution → Parallel Execution
8. No time budget → Execution Budget
9. Retry loops → Deadlock Breaker
10. Single provider → AI/Provider Router
11. Create ≠ Operate → Production Job Object
12. Unclear progress → State Machine
13. Restart from zero → Checkpoint + Resume
14. Done without proof → Evidence-first Delivery
15. QA only at end → Continuous Observation via MẮT TINH
16. Technical ≠ value success → Accepted Value Gate
17. Optimize completion → Time-to-Value Optimization
18. Re-think every step → Skills / Recipes / Policies
19. No fast path → Known-task Fast Path
20. Poor intervention → Founder Interruptibility
21. Ignore cost/latency → Quality × Speed × Cost × Reliability Router
22. Regenerate forever → Minimum Sufficient Quality
23. Fixed sleeps → Event/State-based Waiting
24. Unknown slowness → Execution Observability
25. Performance regression → Regression Tests
26. ĐÂU A XEM too early → Production Readiness Gate
27. Founder receives logs → Delivery Compiler
28. Fragmented agent → Autonomous Production System

## Execution Pipeline
FOUNDER INTENT → VALUE JOB → UNDERSTAND → PLAN → RESOURCE → ROUTE → PREPARE → EXECUTE → MẮT TINH → VERIFY → REPAIR → ACCEPTANCE GATE → DELIVERY COMPILER → ĐÂU A XEM → MEASURE → LEARN
## 10 HARD LAWS

### 01 — FOUNDER NEVER WAITS FOR UI OPERATIONS
No Founder waiting for click/type/load/retry sequences.

### 02 — BROWSER IS HAND, NEVER BRAIN
Browser is an actuator; planning, state, policy and business logic live outside the UI.

### 03 — NO UNCONTROLLED CRITICAL TYPING
Critical payloads: Draft → Validate → Lock → Execute.

### 04 — EVERY JOB HAS A TIME BUDGET
Target time, maximum time, retry budget, timeout and escalation threshold are mandatory.

### 05 — EVERY JOB HAS AN ACCEPTANCE GATE
A generated file is not Done. Only PASS → ACCEPTED → DELIVER counts.

### 06 — EVERY FAILURE HAS AN ESCAPE ROUTE
FAIL → DIAGNOSE → REPAIR → RETRY → FALLBACK → ESCALATE. No infinite retry.

### 07 — INDEPENDENT WORK MUST RUN IN PARALLEL
Execute independent work concurrently whenever safe.

### 08 — NEVER REPEAT ACCEPTED WORK
Checkpoint accepted stages; resume instead of unnecessary regeneration.

### 09 — FOUNDER SEES RESULT, NOT STRUGGLE
Show accepted artifact, relevant status/evidence, and only decisions requiring Founder input.

### 10 — NORTH STAR = ACCEPTED VALUE / TIME / COST
Optimize accepted value delivered per unit of time and cost, not tool calls or completion count.

## System Relationship
- GĂNG TAY = EXECUTE
- MẮT TINH = OBSERVE
- ĐÂU A XEM = DELIVER
- MỌC CÁNH 2 = AUTONOMOUS VALUE ENGINE

**Canonical principle:** EGG does not optimize for “doing the task”; EGG optimizes for creating Accepted Value as fast, reliably and economically as possible.


## EGG FLOW GATEWAY v1.0 — Browser Control Contract
GĂNG TAY MUST NOT call Google Flow directly.
Required route: GĂNG TAY -> EGG FLOW GATEWAY -> Chrome/CDP -> Google Flow.
Preflight: CDP -> Flow tab -> project -> auth -> composer input -> generation control.
Blocked states: NO_CDP, AUTH_REQUIRED, FLOW_UI_NOT_READY, FLOW_TAB_NOT_PROJECT.
No credit-spending action is allowed unless Gateway returns READY.
Gateway uses dedicated Chrome profile C:\Temp\EGGFlowProfile and CDP port 9335.
Gateway can repair only its own EGGFlowProfile Chrome processes.
Session persistence: Google login/session lives in the dedicated profile after one-time login.
Recovery: Gateway health/repair runs before a job; MCP JobStore remains the source of truth for in-flight jobs.
Resume contract: flow_generate_video with resume=true and job_id resumes an in-flight job after MCP/browser restart.
Do not regenerate an in-flight job merely because the browser disconnected.
Acceptance: browser connected + project open + composer discovered + generation control discovered.


## GĂNG TAY Runtime Binding — IMPLEMENTED 2026-10-01
GĂNG TAY now invokes Flow only through:
GĂNG TAY -> GANG-TAY-FLOW-GATEWAY -> EGG FLOW GATEWAY -> google-flow-mcp -> Chrome/CDP 9335 -> Google Flow.

Runtime entrypoint:
C:\Users\Pi Network\EGG\FLOW\GANG-TAY-FLOW-GATEWAY.cmd

Adapter:
C:\Users\Pi Network\EGG\FLOW\GANG-TAY-FLOW-GATEWAY.ps1

Rules enforced by adapter:
- Preflight Gateway before every Flow tool call.
- Block when Gateway is not healthy.
- Warm/connect the dedicated Flow session before tool execution.
- Force MCP to use CDP 9335 + C:\Temp\EGGFlowProfile.
- Flow generation remains behind auto_confirm; dry-run never spends credits.
- In-flight jobs remain resumable through google-flow-mcp JobStore.
- GĂNG TAY has no direct Flow/CDP route.

Acceptance evidence:
- flow_connect via Gateway: attached_existing=true, logged_in=true, cdp_port=9335.
- flow_generate_video via Gateway with auto_confirm=false: status=ready_for_confirmation, 0 credits spent.
- Gateway health after test: CDP=true, project=true, authRequired=false, composerInput=true.


## RED TEAM PASS — 2026-10-01
Findings fixed before packaging:
1. Gateway preflight previously relaunched Chrome on every call; fixed to reuse existing CDP and open project only when needed.
2. Flow project was hard-coded in the adapter; fixed so job project_url is propagated to Gateway.
3. Credit gate was too permissive: COMPOSER_IDLE could reach a credit-spending call. Generation now uses a two-phase safety gate: dry-run/prepare must return ready_for_confirmation before auto_confirm=true is allowed.
4. Dedicated EGGFlowProfile repair remains scoped to the dedicated Chrome process only.
5. PowerShell and Node syntax checks PASS.
6. Repeated Gateway health checks PASS without opening another main Chrome process.
7. Flow dry-run PASS: ready_for_confirmation, no generation, no credit spend.

## VERCEL RED TEAM STATUS — HISTORICAL BLOCKER RESOLVED
The earlier connector OAuth-scope blocker is retained as historical evidence only.
Current local Vercel runtime is authenticated and the intended Adapter path has passed read/deploy/verify smoke tests.
Final acceptance is recorded below under CROSS-PROVIDER FINAL BOUNDARY and VERCEL ADAPTER ACCEPTANCE.

## 16s VIDEO GATE
Vercel dependency is now resolved through the accepted Adapter path.
Flow infrastructure remains READY FOR PREPARE; paid 16s generation still requires its own explicit prepare/acceptance gate.

## CROSS-PROVIDER FINAL BOUNDARY — 2026-10-01
Final architecture locked:
- GĂNG TAY does not call Provider directly.
- GĂNG TAY calls Provider Gateway/Adapter.
- Flow uses Flow Gateway.
- Vercel uses Vercel Adapter/Gateway.
- MỌC CÁNH 2 sees only the Value Job Interface.
- MỌC CÁNH 2 does not know or depend on Flow, Vercel, model, worker, CLI, API, or browser implementation.

## VERCEL ADAPTER ACCEPTANCE — 2026-10-01
1. Vercel CLI authentication: PASS (vercel whoami returned authenticated account).
2. Project binding: PASS (new-skyward-chua-ngong, correct project/team IDs).
3. Adapter preflight + inspect: PASS.
4. Value Job bridge -> Vercel Adapter: PASS.
5. Preview deployment: PASS; production was not touched.
6. Preview URL HTTP verification: PASS.
7. Failure boundary: PASS; unsupported Value Job action blocked before Provider execution.
8. Recovery: PASS; valid preflight succeeded after failure.
9. Provider isolation: PASS; Flow Gateway contains no Vercel calls and Vercel execution is isolated behind its Adapter.

Canonical Vercel contract:
C:\Users\Pi Network\EGG\VERCEL\VERCEL-ADAPTER-CONTRACT-v1.0.md

Vercel is now ACCEPTED as a Provider Adapter path for GĂNG TAY cross-provider packaging.
