---
title: Pain Register
description: Tool to identify, track and mitigate technical or organisational bottlenecks, blockers and risks.
date: "2023-11-08"
type: Post
tags:
  - engineering management
---

## Summary

There at the 3 classes of problems that can prevent you and your team from continuously shipping great work:

1. **Risks** - uncertain events that could negatively impact a project.
2. **Bottlenecks** - a point in a process where the flow of work is constrained, causing an slowdown.
3. **Blockers** - obstacle that prevents progress on a task or a project and must be resolved before work can proceed.

Tracking them when they occur, how often they occur and how they affect your project can help your team by:

1. Spreading awareness to prevent them from repeating the next project.
2. Elevating their importance and need to be addressed to relevant stakeholders.
3. Enabling the leaders in your organisation to communicate impact measurably and make a strong case for change.

The resulting document where an engineering organisation's pain points are recorded and addressed over time is called the Engineering Pain Register.

## What Problem are We Solving and Why?

Unchecked risks, bottlenecks and blockers can limit the productivity of an engineering team, lead to negative business impact or result in missed deadlines.

### Risks

Risks can arise from a variety of sources such as:

- **technical issues**, eg: payment processing system not be able to scale to handle a increased volume of transactions during a massive sale campaign.
- **resource constraints**, eg: a team is understaffed and has to deliver multiple project which means any unplanned absences could lead to missed deadlines.
- **external influences**, eg: new legistlation on Data Protection may lead to a company being fined as their MVP is not compliant with the new rules.

### Blockers

Although arising from a variety of sources, blockers typically tend to be:

- **technical issues** - bug that prevents a feature from being released
- **dependencies** - availability of marketing images needed for a feature release is delayed due to insufficient capacity in an understaffed team.

### Bottlenecks

Usually a constrainted resource, such as a constant shortage of staff or a slow database query that increases overall latency.

## How

### Identify and Categorise

Group issues into risks, bottlenecks or blockers via regular assessments, periodic analysis of processes and reflecting on the team's feedback during retros.

### Assess Potential Impact

- Assess risks on likelihood and severity.
- Quantify the degree to which a bottleneck impedes progress.
- Assess cost or consequence of delays caused by blockers.

### Reduce Potential imapct

- **Mitigate** - Apply changes that reduce impact. Eg: Ask Marketing to stagger sending of email notifications of sales events to customers to control the amount of traffic that flows to the payment service.
- **Avoidance** - Bypass the problem. Eg: Ask the Payments Team to pre-scale and load test the payment processing system in advance.
- **Acceptance** - When mitigation is not worth the cost or not possible - acknowledge risks or bottlenecks and communicate to stakeholders. Eg: Payments System cannot be pre-scaled due to limited budget and Marketing does not have fine grained control due to tooling limitations.

### Monitoring

- Monitor to ensure that mitigation strategies are effective, and to identify any new issues that arise.
- Have regular check-ins with the project team, track project progress to identify and stay on top of potential issues.

### Report

- Further group issues into Management, Technical or Organisational.
- Attempt to resolve issues by directly communicating to dependent teams or stakeholders
- When further progress cannot be made, escalate to leadership to faciliatate resolution.

# In Practice

- Proactively record pain points. My team uses a Google Form to quickly record risks as we notice them in our day to day.
- Setup a recurring Risk Register Meeting. My team meets bi-weekly for 30 minutes to discuss issues in on going initiatives.
- Categorise and describe the pain point. Here's an example of a Risk Register.
- At the end of the meeting you should have a clear list of pain points that need to be monitored, discussed directly with stakeholders, brought to the attention of your organisation's engineering leaders or escalated via Management.
- At the end of each quarter present your findings and the frequency at which issues recur to your organisations leaders to enable mitigation on a larger scale.
