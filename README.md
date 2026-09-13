# Financial Literacy App - Design Justification

A responsive React single-page application (SPA) prototype for a financial literacy learning platform targeting college students and early-career professionals. This document outlines the design decisions, user research, and iterative refinements that shaped the final product.

**Live Prototype:** [https://annabellebbaker.github.io/IS-551/](https://annabellebbaker.github.io/IS-551/)

---

## 1. Problem Statement & User Research

### Need

Students need reliable ways to learn financial content in short snippets to increase financial literacy. Many college students and young working professionals lack understanding of key financial terms (mortgage, 401k, Roth IRA). Currently, they rely on social media and family education, costing them years of potential investment growth and financial progress.

### Persona

**Primary User:** College students and young adults entering the workforce who:

- Have limited or no personal finance management experience
- Feel overwhelmed by financial complexity
- Want reliable, expert-curated information
- Learn best in manageable, short bursts

### Primary Capability

Users can get ahead on financial terminology and put money confidently into their future through a reliable source of information collected from different financial experts. The app provides digestible, actionable learning without overwhelming complexity.

### Fundamental Value

Users gain:

- **Literacy:** Applicable, manageable financial education tailored to their life stage
- **Empowerment:** Confidence to make informed decisions and take action on investments
- **Progress:** Clear tracking of achievement that motivates continued learning and celebrates growth

---

## 2. Three Core Screens

### Screen 1: Landing Page

**Primary Job:** Introduce the brand identity and make the primary capability immediately clear

**Why It Earned This Slot:** The landing screen establishes trust and signals exactly what users can do here—find bite-sized financial lessons from trusted experts.

**Design Question Addressed:** "What is this app, and why should I trust it to teach me about finances?"

**Key Features:**

- Dominant affordance sentence: "Learn financial literacy from real professionals in 5-minute lessons. Get ahead, invest confidently, earn certifications."
- Module grid organized by topic (401k, Roth IRA, Mortgage, Stocks)
- Immediate access to progress dashboard
- Vintage schoolhouse aesthetic with warm color palette

---

### Screen 2: Learning Module

**Primary Job:** Demonstrate the learning experience and show how knowledge becomes actionable

**Why It Earned This Slot:** Shows the core product working—education delivered in short, digestible bites with professional expertise and real-world applicability. This is where value is actually delivered.

**Design Question Addressed:** "What does learning look like here, and can I actually use this information right away?"

**Key Features:**

- Progress bar showing lesson completion
- Clear definition of financial concept
- Expert video placeholder
- Future value impact explanation
- "Try It Now" section with immediate, actionable steps
- Easy navigation back to home

---

### Screen 3: Progress & Achievement Dashboard

**Primary Job:** Visualize progress, reward completion, and motivate continued learning through the Zeigarnik Effect

**Why It Earned This Slot:** Demonstrates how users are celebrated for their effort. Shows material evidence of progress and achievement through certifications, level progression, and module completion tracking.

**Design Question Addressed:** "How am I progressing, and am I being rewarded for my effort?"

**Key Features:**

- Current level indicator with gradient background
- Overall completion percentage with progress bar
- Earned certifications as badges
- Completed and available modules with clear "Next Steps"
- Locked advanced modules (teaser for motivation)
- Optional profile settings

---

## 3. Design Question Plan

### Question: Need → "Tell me about the last time you were in this situation"

**Prediction:** User would feel overwhelmed by too many options and avoid action entirely

**Reality:** "I was overwhelmed by options for investment by both internet resources and family members. It didn't feel manageable so I just didn't do it at all."

**Implication:** Simplicity and manageable chunks are critical. The app must reduce decision paralysis.

---

### Question: Value → "If this problem were solved, what words describe the value?"

**Prediction:** User would want educational and motivational elements

**Reality:** "Literacy and empowering. I use these words because I would gain education in financial literacy that was applicable and manageable to me."

**Implication:** The app must bridge the gap between knowledge and action, with tailored relevance to their life stage.

---

### Question: Persona → "How often does this come up for you?"

**Prediction:** This is a recurring, high-anxiety situation

**Reality:** "This issue comes up very often, often in family situations. I have no idea how to manage finances with 401ks, retirement, investments. I usually tend to avoid and put off investment until I 'understand'."

**Implication:** Users need quick wins and progress feedback to break the avoidance cycle.

---

### Question: Capability → "What would you click first?"

**Prediction:** User would expect module selection, bite-sized lessons, and progress visibility

**Reality:** "I would click around on the modules. I would expect to see a learning progress bar, bite-size lessons, different modules I can do, and what level of financial literacy I have."

**Implication:** Progress visibility and modular learning are essential affordances—not nice-to-haves.

---

## 4. Design Justification & Evaluation

### First Read: Opening the Live Prototype

**Q: Does the landing screen signal primary capability and fundamental value at first glance?**

✅ **Yes.** The affordance sentence immediately signals what users can do ("Learn financial literacy from real professionals in 5-minute lessons") and why it matters ("Get ahead, invest confidently, earn certifications"). The module grid reinforces that learning is organized, manageable, and immediately accessible.

---

**Q: Does every element earn its place, or does anything compete?**

✅ **Yes, every element earns its place.** The four module cards are organized using **Gestalt proximity principle**—grouped together to show they belong as a set of choices. No competing CTAs distract from module selection. The "View My Dashboard" button is secondary and positioned below, not competing with the primary job.

---

**Q: What belongs together on each screen, and which Gestalt principle communicates it?**

**Screen 1 (Landing):**

- **Proximity:** Module cards grouped in a 2x2 grid signal "these are your learning options"
- **Similarity:** All cards share identical styling (border, shadow, hover state) → visual cohesion

**Screen 2 (Learning Module):**

- **Continuity:** Progress bar at top, definition, video, value explanation, action → logical flow
- **Proximity:** Related info grouped: "What Is It?" + definition together; "Try It Now" + actionable steps together

**Screen 3 (Dashboard):**

- **Proximity:** Completed modules grouped separately from available modules
- **Similarity:** Module cards in both sections match styling → communicate "same product family"
- **Contrast:** Completed modules have green accent; locked modules have disabled styling

---

**Q: Do screens 2 and 3 stay on mission, and can you return from everywhere?**

✅ **Yes.** Every screen has a back button in the top left (consistent placement). Screen 2 focuses solely on teaching one concept. Screen 3 focuses solely on celebrating progress. Neither screen tries to do multiple jobs.

---

**Q: What did the AI initially get wrong, and what changed?**

| Issue                   | AI's Initial Approach              | Problem                                                | Revision                                                                        |
| ----------------------- | ---------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| **Format**              | Static HTML description of screens | Not interactive; users couldn't experience the app     | Built a fully functional React SPA                                              |
| **Tone**                | Generic professional language      | Didn't match "chill schoolhouse vibe" brief            | Rewrote with conversational, encouraging tone                                   |
| **Typography**          | Used system fonts                  | Didn't match design spec (cursive + sans-serif)        | Integrated Homemade Apple (cursive) and Urbanist (sans-serif) from Google Fonts |
| **Progress Visibility** | No global progress indicator       | Missed the Zeigarnik Effect motivation (user feedback) | Added progress bar under header on ALL screens                                  |
| **Visual Hierarchy**    | Progress bar was global/persistent | Competed with affordance messaging                     | Moved to post-header, keeping it visible but secondary                          |

---

**Q: Which design decision motivated each change?**

### Change #1: React SPA Instead of Static HTML

**Motivation:** User research showed users expect to "click around on the modules" and see interactive feedback. The affordance sentence calls for action ("Get ahead"), which requires a functional prototype, not documentation.

**Course Vocabulary:** This addresses **discoverability** and **affordance**—users need to physically interact with the product to verify it works.

---

### Change #2: Progress Bar Under Header (Not Global Navbar)

**Motivation:** User research predicted users would want "to see what level of financial literacy I have" and "a learning progress bar." However, placing it above the affordance sentence would violate **visual hierarchy**—the landing screen's primary job is to signal capability and value, not celebrate progress.

**Solution:** Place the progress bar directly under the "FinLearn" header as a secondary visual element. This invokes the **Zeigarnik Effect** (unfinished tasks create psychological tension that motivates action) without competing with the primary affordance.

**Course Vocabulary:** This is a **visual hierarchy** and **affordance** decision—the progress bar is _available_ but _secondary_, supporting the primary job rather than competing with it.

---

### Change #3: Consistent Navigation Back to Home

**Motivation:** Screens 2 and 3 need to maintain the impression that this is one cohesive product, not three disconnected pages. A back arrow signals "return to your starting point."

**Course Vocabulary:** This uses **continuity** (Gestalt principle) and **signaling**—the back button creates a predictable, learnable navigation pattern.

---

## Before & After Comparison

### Initial Commit

📌 [Initial AI Output - Static HTML Documentation](https://github.com/annabellebbaker/IS-551/commit/29fd5b3f67872ad65b4a35adaceb13fc7471b35f)

**Problem:** The initial commit described three screens in Markdown, but provided no interactive experience. Users couldn't verify that the affordance actually worked—they had to take it on faith.

---

### Meaningful Revision (Commit)

📌 [React SPA Implementation + Progress Bar](https://github.com/annabellebbaker/IS-551/commit/9bd140dc9f6de6099cb740bc9a20cc7ec18d3448)

**Changes:**

- Converted to fully functional React SPA with working navigation
- Implemented progress bar under header on all three screens
- Applied correct typography (Homemade Apple cursive + Urbanist sans-serif)
- Built responsive mobile design

**Impact:** Users can now actually _experience_ the product and verify the affordance works. The progress bar solved the missing **Zeigarnik Effect** motivation that user research predicted was essential.

---

## Design System

### Color Palette

- **Brick Red** (#A0342D) - Primary action, headers, affordance box
- **Muted Emerald** (#2D5F4F) - Secondary action, borders, section titles
- **Warm Cream** (#F5E6D3) - Background, text contrast, vintage warmth
- **Success Green** (#4A7C59) - Progress indicators, completed state

### Typography

- **Headings & Product Name:** Homemade Apple (cursive, ADA adaptable)
- **Body Text:** Urbanist (clean sans-serif)
- **Hierarchy:** Size and weight differentiation creates visual flow

### Visual Style

- Vintage schoolhouse aesthetic with modern clarity
- Gestalt principles applied consistently across all screens
- Responsive design for mobile, tablet, desktop
- Clear visual grouping through proximity and similarity

---

## Key Takeaways

1. **Progress visibility matters.** User research predicted the need for progress tracking; the revised design places it prominently (but secondarily) on every screen.

2. **Simplicity reduces decision paralysis.** The module grid shows only what users need to see, avoiding overwhelming choice.

3. **Navigation must be predictable.** A consistent back button signals "this is one product" across all screens.

4. **Affordance comes first.** The landing screen's job is to signal capability and value, not celebrate achievement—that belongs on Screen 3.

5. **Gestalt principles create cohesion.** Proximity (module grouping), similarity (consistent card styling), and continuity (flow across screens) make the product feel unified.

---

## Deployment

This prototype is deployed to GitHub Pages and accessible at:
**[https://annabellebbaker.github.io/IS-551/](https://annabellebbaker.github.io/IS-551/)**

No login required. Works on any device with a modern web browser.

---

## Next Steps for Production

- [ ] Integrate real video content from financial professionals
- [ ] Add user authentication and persistent progress tracking
- [ ] Expand module library beyond 12 initial courses
- [ ] Implement actual certification issuance system
- [ ] Conduct user testing with target persona
- [ ] Refine based on learning analytics and user feedback
- [ ] Explore mobile-first redesign if app-based experience needed
