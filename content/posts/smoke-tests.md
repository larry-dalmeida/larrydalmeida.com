---
title: Smoke Tests
description: Tool to identify, track and mitigate technical or organisational bottlenecks, blockers and risks.
date: "2023-11-19"
type: Post
tags:
  - testing
---

## Summary

Smoke tests are very minimal tests that check if your application can be build and run with the most crucial functionality needed before it's tested more thouroughly in the next phase of your build and deployment pipeline.

## What Problem are We Solving and Why?

Delivering an updated version of your application to customers involves the following phases:

1. Developing
2. Building
3. Testing
4. Deploying

Your testing phase may include the following types of tests:

1. Unit
2. Integration
3. UI Tests

If your application isn't healthy enough due to a newly introduced bug, example: issue with connecting to database due to invalid databse URL, then a significant amount of time and cost of cloud resources may be spent running integration and UI tests only for them to eventually fail.

Smoke tests are executed as early as possible during this the testing phase, usually after unit tests, to act as a gatekeeper, ensuring that the core functionalities are working as expected before proceeding with more comprehensive tests or deploying to a wider audience.

## Coming Soon

How to setup smoke tests in a CI/CD pipeline.