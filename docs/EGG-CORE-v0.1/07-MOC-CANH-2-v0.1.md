[Reading 63 lines from start (total: 63 lines, 0 remaining)]

# MỌC CÁNH 2 — Autonomous Value Engine v0.1

EGG tiến hóa từ hệ thống làm việc thành hệ thống theo đuổi Accepted Value.

Pipeline:
1. VALUE INTENT — nhận mục tiêu và biến thành outcome + metric.
2. VALUE CONTRACT — WHAT/WHO/ACCEPTANCE/TIME/COST/BOUNDARY.
3. RESOURCE DISCOVERY — tìm worker/model/tool/data/infrastructure.
4. RESOURCE ALLOCATION — phân bổ theo quality/speed/cost/risk.
5. MISSION PLANNING — tạo Mission Graph: task/dependency/owner/acceptance.
6. AUTONOMOUS EXECUTION — giao việc, thực thi, retry, chuyển worker, phục hồi.
7. REALITY CHECK — xác minh kết quả ngoài đời bằng evidence.
8. ACCEPTANCE GATE — QA + Red Team + Evidence; DONE không đồng nghĩa ACCEPTED.
9. DELIVERY — giao kết quả dùng được qua ĐÂU A XEM.
10. VALUE MEASUREMENT — đo MONEY/DELIVERY/ACCEPTANCE/TIME-COST/RELIABILITY/AUTONOMY.
11. LEARNING LOOP — ghi lại kết quả, lỗi, worker/model/tool, thời gian và chi phí.
12. AUTONOMOUS IMPROVEMENT — dùng learning để mission sau tốt hơn.

North Star:
ACCEPTED VALUE / UNIT OF TIME / COST

Core principle:
EGG không tối ưu cho “làm xong task”; EGG tối ưu cho “tạo ra Accepted Value”.

## Agent Fleet Layer binding — canonical 2026-10-03

MỌC CÁNH 2 step 6 AUTONOMOUS EXECUTION now routes fleet execution through:
GĂNG TAY → EGG AGENT FLEET LAYER → worker runtime.

The Agent Fleet Layer provides the 11 canonical orchestration primitives
defined in AGENT_FLEET/EGG-AGENT-FLEET-LAYER-v0.1.md.

It does not change VALUE CONTRACT, Decision Plane, Task State Machine,
Reality Check, Acceptance Gate, Delivery, or Founder authority.

Canonical rule:
fleet orchestration is subordinate to EGG Control Plane and Acceptance.

## Control Plane Core binding — canonical 2026-10-03

MỌC CÁNH 2 execution is governed by one Control Plane Core:
Mission State Contract
→ Roadmap Engine
→ Task State Machine
→ Decision Plane
→ GĂNG TAY
→ Reality / Evidence
→ Acceptance
→ Delivery

No second state system is permitted.

Evidence Spine links:
MISSION → TASK → DECISION → ACTION → RESULT → EVIDENCE → ACCEPTANCE.

Decision routing uses:
D0 deterministic → D1 fast decision → D2 reasoning → Founder authority.

JEV-27B/JEV-27B-VL remain optional decision workers only.
They do not own EGG state, policy, acceptance, or authority.

Proving mission:
CONTROL_PLANE/PROVING_GROUND/EDP-PROOF-001.md
