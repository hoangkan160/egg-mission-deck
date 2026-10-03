# EGG COMMERCIAL HAND v0.1

Status: ACTIVE / PRE-SEND
Purpose: Minimize Founder interaction with Freelancer while preserving Founder Authority.

## Boundary
AUTH → DISCOVERY → QUALIFY → PROPOSAL → BID QUEUE → [FOUNDER AUTHORITY] → SEND

#01 AUTH
Persistent Freelancer browser profile + saved auth state.
Auth evidence: C:\Users\Pi Network\EGG\COMMERCIAL_HANDS\AUTH\freelancer-auth.json

#02 DISCOVERY
Search current Freelancer projects matching configured commercial capabilities. Capture project URL/ID, title, description, budget, status, client signals, timestamp.
No bid submission.

#03 QUALIFY
Apply deterministic policy first, then Decision Plane reasoning when needed. Required: explicit current request, production deliverable, budget/scope evidence, viable fit, no obvious red flags. Output QUALIFIED or REJECTED with evidence_refs and reason.

#04 PROPOSAL
Generate project-specific proposal from approved offers/capabilities. Preserve IP ownership principle: customer buys delivery/use/license; no core IP transfer unless separately contracted. Proposal status READY until Founder authority permits sending.

#05 BID QUEUE
Present only qualified, proposal-ready opportunities. Each item has project_id, proposal_id, price, rationale, evidence_refs, risk, authority_required, and send_status=NOT_SENT.

## Hard Laws
- Never claim a bid was sent without submission evidence.
- Never start delivery before deposit/payment evidence where applicable.
- Never mark acceptance without customer evidence.
- Never mark cash without payment evidence.
- Browser is HAND, not BRAIN.
- Founder sees decisions/results, not browser struggle.
- No new architecture layer; Commercial Hand is an EGG Hand capability.

## Current Mission
SALES-MISSION-001 / K Gallery first commercial proving ground.
