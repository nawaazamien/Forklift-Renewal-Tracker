# 📄 System Requirements Document (SRD)

## 🏦 Forklift License Renewal Tracker

### 📌 1. Stakeholder Analysis

Recognizing and understanding key stakeholders is vital for the success of the Forklift License Renewal Tracker project. The following table outlines the roles, primary concerns, challenges, and success criteria for six main stakeholders.

| Stakeholder       | Role                                             | Key Concerns                                      | Pain Points                                      | Success Metrics                                  |
|-------------------|--------------------------------------------------|---------------------------------------------------|--------------------------------------------------|-------------------------------------------------|
| 👷 Forklift Operators | Main users who use the system to monitor their license renewal status | 📅 Easy access to renewal dates and reminders<br>🔐 Ensuring accurate and secure handling of personal data<br>🖥️ Access to a user-friendly interface for managing renewals | ❗ Forgetting renewal dates<br>🔓 Lack of trust in data security measures of current systems<br>📝 Difficulty in manually tracking license renewals without a dedicated tool | ⏱️ Achieving 100% renewal compliance<br>🛡️ Attaining a 90% user satisfaction rate regarding data security<br>📈 Increasing the frequency of users reviewing their renewal status by 75% |
| 👩‍💼 Operations Managers | Oversees compliance and tracks certifications for multiple forklift operators | 📊 Monitoring compliance and managing multiple users<br>🧩 Ease of use for managing operator records<br>📋 Ability to generate compliance reports | 🗂️ Manual tracking of multiple operators<br>⚠️ Inconsistencies in data entry leading to inaccurate compliance tracking<br>🔍 Limited tools that cater to managing multiple users | 📉 Achieving a 20% reduction in compliance tracking time<br>🧮 Reducing discrepancies in operator records by 40%<br>📈 Enhancing compliance monitoring efficiency by 50% |
| 🛠️ IT Administrators | Manages system deployment and maintenance | 🖥️ System reliability and security<br>🔒 Implementation of encryption and secure authentication methods<br>🔍 Regular audits to identify and rectify security vulnerabilities | 📚 Keeping up-to-date with evolving security requirements<br>🛡️ Mitigating risks associated with system downtime and data breaches<br>🧑‍🏫 Ensuring all team members are trained in security best practices | ✅ Achieving 99.9% system uptime<br>🔐 Implementing security measures that result in zero data breaches<br>📜 Conducting quarterly security training sessions for all staff |
| 🧑‍💼 HR Department | Manages operator records and certifications | 📈 Accurate and up-to-date records<br>🧩 Ease of use for updating operator records<br>📋 Ability to generate reports for compliance purposes | 🗂️ Manual updates and errors<br>⚠️ Inconsistencies in operator records<br>🔍 Limited tools that cater to managing operator records | 📉 Achieving a 30% reduction in manual record updates<br>🧮 Reducing discrepancies in operator records by 40%<br>📈 Enhancing record management efficiency by 50% |
| 🛡️ Safety Inspectors | Ensures compliance with safety regulations | 📜 Access to compliance reports<br>🔒 Ensuring accurate and up-to-date compliance data<br>🔍 Regular audits to identify and rectify compliance issues | 📚 Difficulty in accessing up-to-date compliance data<br>🛡️ Inconsistencies in compliance reports<br>🧑‍🏫 Ensuring all team members are trained in compliance best practices | ✅ Achieving 100% accurate compliance reports<br>📜 Implementing measures that result in zero compliance issues<br>📋 Conducting quarterly compliance training sessions for all staff |
| 👨‍💻 Software Developers | Develops and maintains the system | 🧩 Clear requirements and maintainable codebase<br>🔒 Implementing robust security protocols<br>📈 Maintaining scalability to accommodate a growing user base | ⚖️ Balancing feature simplicity with comprehensive functionality<br>🛠️ Addressing potential security vulnerabilities proactively<br>💼 Managing resource constraints during development phases | 🚀 Achieving a 95% crash-free session rate post-launch<br>🔐 Implementing security measures that result in zero data breaches<br>📊 Ensuring the application can handle a 200% increase in users without performance degradation |

### 📌 2. Functional Requirements

The table below lists the key system functions along with their acceptance criteria.

| ID  | Requirement                                                                 | Acceptance Criteria                                                                 |
|-----|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| FR1 | The system shall allow forklift operators to register their licenses.       | Operators can input their license details and expiration dates.                     |
| FR2 | The system shall store license expiration dates and calculate renewal deadlines. | The system calculates and displays the next renewal date based on the input expiration date. |
| FR3 | The system shall send email reminders to operators before their license expiration. | Operators receive an email reminder 30 days and 7 days before the expiration date.   |
| FR4 | The system shall send SMS reminders to operators before their license expiration. | Operators receive an SMS reminder 30 days and 7 days before the expiration date.     |
| FR5 | The system shall allow managers to view compliance reports.                 | Managers can access a dashboard displaying the compliance status of all operators.   |
| FR6 | The system shall provide secure user authentication for both operators and managers. | Users must log in with a username and password to access the system.                 |
| FR7 | The system shall allow managers to add and remove operators.                | Managers can manage operator accounts through the system interface.                 |
| FR8 | The system shall allow operators to update their license information.       | Operators can edit their license details and expiration dates.                      |
| FR9 | The system shall generate compliance reports for safety inspectors.         | Inspectors can download compliance reports in PDF format.                           |
| FR10| The system shall log all user actions for audit purposes.                   | All user actions are recorded with timestamps and user IDs.                         |

### 📌 3. Non-Functional Requirements

Below are the quality attributes ensuring system usability, security, performance, and scalability.

| Category      | Requirement                                                                                   |
|---------------|-----------------------------------------------------------------------------------------------|
| Usability     | The interface shall comply with WCAG 2.1 accessibility standards.                             |
| Usability     | The system shall provide a user-friendly interface with intuitive navigation.                 |
| Deployability | The system shall be deployable on Windows and Linux servers.                                  |
| Deployability | The system shall support deployment on cloud platforms such as AWS and Azure.                 |
| Maintainability| Documentation shall include an API guide for future integrations.                            |
| Maintainability| The codebase shall follow standard coding conventions and be well-documented.                |
| Scalability   | The system shall support 1,000 concurrent users during peak hours.                            |
| Scalability   | The system shall be able to scale horizontally to handle increased load.                      |
| Security      | All user data shall be encrypted using AES-256.                                               |
| Security      | The system shall implement role-based access control (RBAC) for different user roles.         |
| Performance   | Search results shall load within 5 seconds.                                                   |
| Performance   | The system shall process and send reminders within 1 minute of the scheduled time.            |