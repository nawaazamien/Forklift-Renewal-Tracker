# Architecture Overview

## 📄 File: Architecture.md

## 📌 Description  
This document outlines the **architectural structure** of the **Forklift License Renewal Tracker**. It follows the **C4 Model**, breaking the system into **Context, Container, Component, and Deployment** levels.

---

### 📊 What Will Be Covered
## 🌍 **Context Diagram** – Shows how the system interacts with users and external services.

```mermaid
C4Context
  title System Context Diagram for Forklift License Renewal Tracker
  Enterprise_Boundary(industrialSafety, "Industrial Safety Compliance") {
    Person(user, "Forklift Operator", "Uses the system to track their license renewal status.")
    Person(manager, "Operations Manager", "Oversees compliance and tracks operator certifications.")
    
    System(forkliftTracker, "Forklift License Renewal Tracker", "Tracks renewal deadlines and sends notifications.")
    
    System_Ext(notificationService, "Notification Service", "Sends email/SMS reminders to users.")
    
    Rel(user, forkliftTracker, "Registers license and checks renewal status")
    Rel(manager, forkliftTracker, "Monitors compliance reports")
    Rel(forkliftTracker, notificationService, "Triggers reminders before expiration")
  }

  UpdateLayoutConfig($c4ShapeInRow="1", $c4BoundaryInRow="1")

```

**📦 Container Diagram** – Illustrates the major containers (applications or services) that make up the system and how they interact.

```mermaid

C4Container
  title Container Diagram for Forklift License Renewal Tracker

  Person(user, "Forklift Operator", "Uses system to track license renewal")
  Person(manager, "Operations Manager", "Monitors operator compliance")

  Container_Boundary(systemBoundary, "Forklift License Renewal Tracker") {
    Container(webApp, "Web Application", "React", "User interface for operators and managers")
    Container(apiServer, "API Server", "Node.js / Express", "Handles business logic and authentication")
    ContainerDb(database, "Database", "PostgreSQL", "Stores user data and license information")
    Container(notificationService, "Notification Service", "Node.js", "Sends email and SMS reminders")
  }

  System_Ext(extEmailService, "Email Service", "SMTP", "Sends email notifications")
  
  Rel(user, webApp, "Logs in and tracks licenses")
  Rel(manager, webApp, "Views compliance reports")
  Rel(webApp, apiServer, "Processes user requests")
  Rel(apiServer, database, "Reads/Writes license data")
  Rel(apiServer, notificationService, "Triggers reminders")
  Rel(notificationService, extEmailService, "Sends emails via SMTP")

```

**🧩 Component Diagram** – Details the internal structure of the API server, showing the key components and their interactions.

```mermaid

C4Component
  title Component Diagram for API Server in Forklift License Renewal Tracker

  Container(apiServer, "API Server", "Node.js", "Handles business logic and authentication")

  Component(authModule, "Authentication Module", "JWT", "Manages user login and access")
  Component(licenseTracker, "License Tracker", "Express.js", "Tracks renewal dates and deadlines")
  Component(notificationManager, "Notification Manager", "Node.js", "Sends reminders")

  ContainerDb(database, "Database", "PostgreSQL", "Stores user and license data")

  Rel(authModule, licenseTracker, "Handles user authentication")
  Rel(licenseTracker, notificationManager, "Triggers notifications before renewal deadlines")
  Rel(licenseTracker, database, "Reads/Writes license data")

```

**🖥️ Deployment Diagram** – Shows how the system is deployed across different environments and devices.

```mermaid
C4Deployment
  title Deployment Diagram for Forklift License Renewal Tracker

  Deployment_Node(userLaptop, "User's Device", "Any") {
      Container(webApp, "Web Application", "React SPA", "Accessed via web browser")
  }
  
  Deployment_Node(cloudServer, "Cloud Server", "AWS EC2 / Firebase") {
    Container(apiServer, "API Server", "Node.js", "Handles system logic and authentication")
    Container(database, "Database", "PostgreSQL", "Stores user and license data")
    Container(notificationService, "Notification Service", "Node.js", "Handles reminders")
  }

  System_Ext(emailService, "Email Service", "SMTP", "External email provider for sending notifications")

  Rel(webApp, apiServer, "Sends requests and displays data")
  Rel(apiServer, notificationService, "Triggers reminders")
  Rel(notificationService, emailService, "Sends emails via SMTP")
  Rel(apiServer, database, "Stores and retrieves data")

```

Each of these diagrams provides a different perspective, ensuring that developers, architects, and stakeholders can understand the system’s **design, interactions, and dependencies** at various levels. 
