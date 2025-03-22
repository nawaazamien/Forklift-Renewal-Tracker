# 🚀 Agile Planning Document

## 1. 📝 User Story Creation

Below is a table of user stories derived from the functional requirements and use cases. Each story follows the format:  
*"As a [role], I want [action] so that [benefit]."*

| **Story ID** | **User Story**                                                                                     | **Acceptance Criteria**                                                                 | **Mapped Requirement** | **Priority** |
|--------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------------------------------|--------------|
| 🔴 US001     | As a forklift operator, I want to register my license so that I can track its renewal status.      | License details are stored, and a confirmation message is displayed.                   | FR1: Register License                  | High         |
| 🔴 US002     | As a forklift operator, I want to update my license information so that it remains accurate.       | Updated license details are saved, and a success message is shown.                     | FR2: Update License Information        | High         |
| 🔴 US003     | As a forklift operator, I want to receive email reminders so that I don’t miss my renewal date.    | Email reminders are sent 30 days and 7 days before expiration.                         | FR3: Receive Email Reminders           | High         |
| 🟡 US004     | As a forklift operator, I want to receive SMS reminders so that I can stay informed on the go.     | SMS reminders are sent 30 days and 7 days before expiration.                           | FR4: Receive SMS Reminders             | Medium       |
| 🔴 US005     | As an operations manager, I want to view compliance reports so that I can monitor operator status. | Compliance reports are displayed with accurate and up-to-date data.                    | FR5: View Compliance Reports           | High         |
| 🔴 US006     | As an operations manager, I want to add or remove operators so that I can manage the workforce.    | Operators can be added or removed, and changes are reflected in the system.            | FR6: Add/Remove Operators              | High         |
| 🟡 US007     | As an IT administrator, I want to perform security audits so that the system remains secure.       | Security audit results are displayed after the audit is performed.                     | FR8: Perform Security Audits           | Medium       |
| 🟡 US008     | As an HR department member, I want to update operator records so that compliance is maintained.    | Operator records are updated, and changes are saved successfully.                      | FR7: Update Operator Records           | Medium       |
| 🟡 US009     | As a safety inspector, I want to access compliance reports so that I can ensure safety regulations are met. | Compliance reports are downloadable in PDF format.                                     | FR5: View Compliance Reports           | Medium       |
| 🔴 US010     | As a system admin, I want user data encrypted with AES-256 so that security compliance is met.     | All user data is encrypted, and no breaches occur during testing.                      | NFR1: Data Security                    | High         |

---

## 2. 📋 Product Backlog Creation

The user stories are prioritized using the **MoSCoW** method and include effort estimates (story points).

| **Story ID** | **User Story**                                                                                     | **Priority (MoSCoW)** | **Effort Estimate (Story Points)** | **Dependencies** | **Mapped Requirement** |
|--------------|---------------------------------------------------------------------------------------------------|-----------------------|------------------------------------|------------------|----------------------------------------|
| 🔴 US001     | As a forklift operator, I want to register my license so that I can track its renewal status.      | Must-have             | 3                                  | None             | FR1: Register License                  |
| 🔴 US002     | As a forklift operator, I want to update my license information so that it remains accurate.       | Must-have             | 2                                  | US001            | FR2: Update License Information        |
| 🔴 US003     | As a forklift operator, I want to receive email reminders so that I don’t miss my renewal date.    | Must-have             | 3                                  | US001            | FR3: Receive Email Reminders           |
| 🟡 US004     | As a forklift operator, I want to receive SMS reminders so that I can stay informed on the go.     | Should-have           | 2                                  | US001            | FR4: Receive SMS Reminders             |
| 🔴 US005     | As an operations manager, I want to view compliance reports so that I can monitor operator status. | Must-have             | 3                                  | US001, US002     | FR5: View Compliance Reports           |
| 🔴 US006     | As an operations manager, I want to add or remove operators so that I can manage the workforce.    | Must-have             | 3                                  | None             | FR6: Add/Remove Operators              |
| 🟡 US007     | As an IT administrator, I want to perform security audits so that the system remains secure.       | Should-have           | 2                                  | None             | FR8: Perform Security Audits           |
| 🟡 US008     | As an HR department member, I want to update operator records so that compliance is maintained.    | Should-have           | 2                                  | US001            | FR7: Update Operator Records           |
| 🟡 US009     | As a safety inspector, I want to access compliance reports so that I can ensure safety regulations are met. | Should-have           | 3                                  | US005            | FR5: View Compliance Reports           |
| 🔴 US010     | As a system admin, I want user data encrypted with AES-256 so that security compliance is met.     | Must-have             | 5                                  | None             | NFR1: Data Security                    |

**Justification for Prioritization:**  
- **Must-have stories** (🔴) are critical for the MVP, aligning with stakeholder success metrics like compliance tracking and timely reminders.  
- **Should-have stories** (🟡) enhance usability and security but are not essential for the initial release.  

---

## 3. 🏃 Sprint Planning

### 🎯 **Sprint Goal:**  
Deliver the core functionality for license registration, updates, and compliance tracking to create an MVP. This sprint focuses on enabling forklift operators to register and update their licenses, receive email reminders, and allowing operations managers to view compliance reports. These features form the foundation of the system and address the primary needs of its users.

### ✅ **Selected User Stories for Sprint 1:**  
- US001: Register license.  
- US002: Update license information.  
- US003: Receive email reminders.  
- US005: View compliance reports.  

### 📌 **Sprint Backlog Table:**

| **Task ID** | **Task Description**                          | **Assigned To** | **Estimated Hours** | **Status**       | **Mapped Requirement** |
|-------------|-----------------------------------------------|-----------------|---------------------|------------------|-------------------------|
| 🛠️ T001     | Develop license registration form.            | Dev Team        | 6                   | To Do            | FR1: Register License   |
| 🛠️ T002     | Implement backend for storing license data.   | Dev Team        | 8                   | To Do            | FR1: Register License   |
| 🛠️ T003     | Create functionality for updating licenses.   | Dev Team        | 6                   | To Do            | FR2: Update License Information |
| 🛠️ T004     | Set up email notification service.            | Dev Team        | 8                   | To Do            | FR3: Receive Email Reminders |
| 🛠️ T005     | Design compliance report dashboard.           | Dev Team        | 10                  | To Do            | FR5: View Compliance Reports |
| 🛠️ T006     | Integrate compliance report data retrieval.   | Dev Team        | 8                   | To Do            | FR5: View Compliance Reports |

---

## 4. 💭 Reflection

### Challenges in Prioritization, Estimation, and Aligning Agile with Stakeholder Needs  

One of the main challenges was prioritizing features for the MVP, as stakeholders had varying needs. For instance, forklift operators prioritized reminders and ease of use, while IT administrators focused on system security. To address this, I applied the MoSCoW method to classify features like license registration and compliance tracking as "Must-have" items. This approach ensured that the most critical features were delivered first, while less essential functionality was deferred to later sprints.

Effort estimation also proved difficult, especially for tasks involving external dependencies, such as setting up email notifications. Story points were useful for breaking tasks into smaller, manageable units, but estimating effort for unfamiliar areas required additional research. For example, integrating compliance reports required understanding both the data structure and reporting tools, which added complexity to the estimation process.

Aligning Agile practices with stakeholder needs required careful planning and trade-offs. For example, while safety inspectors valued compliance reports, this feature was scheduled for later sprints to focus on core functionality first. Similarly, SMS reminders were marked as "Should-have" to prioritize email reminders, which are more widely used. This ensured the MVP delivered immediate value while leaving room for iterative improvements based on feedback.

Another challenge was maintaining traceability between user stories, functional requirements, and tasks. Mapping user stories to requirements from Assignment 4 helped ensure alignment with the project’s original goals. This traceability minimized the risk of overlooking critical functionality and ensured that all tasks directly addressed stakeholder needs.

Balancing technical feasibility with user-centric design was another recurring challenge. For instance, while encrypting user data (a non-functional requirement) was essential for security, it did not directly impact usability for forklift operators. To address this, technical tasks like encryption were included in the sprint backlog alongside user-facing features such as license registration and reminders.

Overall, this process emphasized the importance of prioritization, iterative planning, and stakeholder alignment in Agile development. It also highlighted the value of breaking down complex requirements into smaller, testable tasks to ensure steady progress toward the MVP. Moving forward, I aim to improve effort estimation techniques and incorporate more frequent feedback loops to enhance the development process.