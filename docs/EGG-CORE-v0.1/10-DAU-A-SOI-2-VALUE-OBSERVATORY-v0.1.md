[Reading 151 lines from start (total: 151 lines, 0 remaining)]

# ĐÂU A SOI 2 — VALUE OBSERVATORY v0.1

**Canonical:** Founder approved 2026-10-03
**Short name:** ĐÂU A SOI 2
**Layer:** Founder Value Observability
**Parent:** MỌC CÁNH 2 — Autonomous Value Engine

## Purpose

ĐÂU A SOI 2 is the Founder-facing observability layer for EGG.
It hides execution complexity and exposes VALUE, PRODUCT, EVIDENCE, ACCEPTANCE, MARKET, CUSTOMER and MONEY.

Core principle:

> BIỆT ĐỘI sees PROCESS.
> EGG sees EVIDENCE.
> Founder sees VALUE.

Founder should not need to inspect Mission, Task, Worker, Retry or Repair logs unless Founder Authority is required.

## Founder Surface

The primary surface is a one-screen Value Observatory containing:
- VALUE MAP
- VALUE CARDS
- EVIDENCE WALL
- VALUE TIMELINE
- PRODUCT ZOOM
- VALUE HEALTH
- VALUE LINEAGE
- VALUE DIFF
- VALUE RADAR
- FOUNDER ATTENTION
## Value State Model

Every Value Object moves through evidence-based states:
- BUILDING
- READY
- TESTING
- ACCEPTED
- DELIVERED
- VALUE_PROVEN
- BLOCKED
- FOUNDER_AUTHORITY_REQUIRED

No evidence means no accepted value.

## Acceptance Receipt

When a Value Object passes Acceptance Gate, EGG creates a compact VALUE RECEIPT containing:
- What was produced
- Acceptance status
- Evidence
- Market/customer signal
- Revenue when available
- Next value step
- Whether Founder action is required

## Founder Attention Budget

Founder attention is treated as a scarce resource.

Default:
- No Founder action required → do not interrupt.
- Autonomous repair/retry succeeds → hide the process.
- Authority boundary is reached → ask one explicit Founder decision.
- Never dump internal execution logs into the Founder surface.
## Value Lineage

Every accepted value must be traceable:

MONEY
↑
PRODUCT
↑
ASSET
↑
IP
↑
MISSION
↑
VALUE INTENT

## Value Timeline

Show only meaningful Value events:
- IP accepted
- Asset set accepted
- Product packaged
- Market test launched
- Customer evidence collected
- Transaction received
- Iteration accepted

Execution noise remains below the Founder surface.

## Product Zoom

“ĐÂU A XEM” behavior:
clicking a Product opens the actual product/value artifact first, not a process dashboard.

## Canonical Architecture

FOUNDER
→ ĐÂU A SOI 2
→ VALUE OBJECTS
→ EVIDENCE LAYER
→ ACCEPTANCE GATE
→ MỌC CÁNH 2
→ GĂNG TAY / EGG Hand
→ BIỆT ĐỘI / WORKERS

## Design Rule

The Founder asks:
“Cái gì đã thành VALUE?”
“Cái gì đang tạo VALUE?”
“Cái gì cần tôi quyết định?”

The system answers those questions without exposing unnecessary process detail.
## DUDU × SIBA Example

VALUE INTENT
→ DUDU + Siba Axolotls IP

VALUE OBJECTS
→ Character IP
→ Sticker Pack
→ Micro Stories
→ Content
→ Market Test
→ Customer
→ Revenue

Founder view:
- Product state
- Evidence
- Acceptance
- Market signal
- Customer signal
- Money
- Next value

## Hard Law

Founder does not monitor the swarm.
Founder observes accepted VALUE.

## Status

CANONICAL / APPROVED
