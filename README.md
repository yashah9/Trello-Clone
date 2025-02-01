# Trello Clone

## Overview
Trello Clone is a task management system designed to provide an intuitive and efficient way to manage projects and tasks. Built with modern technologies. This application offers role-based access, task assignments, and prioritization, making team collaboration easy.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Objectives](#objectives)
4. [System Architecture](#system-architecture)
   - [1. Frontend](#1-frontend)
   - [2. Backend](#2-backend)
   - [3. Deployment](#3-deployment)
5. [User Benefits](#user-benefits)
6. [Limitations](#limitations)

## Features
- **Task Management**: Create, update, delete, and prioritize tasks.
- **Role-Based Access**: Assign team members different permissions for task handling.
- **Project Organization**: Assign tasks to specific projects and track progress.
- **Deadline Management**: Set deadlines and due dates for tasks.
- **Secure Authentication (Future Feature)**: Planned Cognito integration for enhanced security.

## Technologies Used
- **Frontend**: Next.js, React.js, Redux for state management.
- **Backend**: Node.js, Express.js, Prisma ORM.
- **Database**: PostgreSQL for structured data storage.
- **Deployment**:
  - **AWS EC2**: Hosting the backend services.
  - **AWS RDS**: Managing the PostgreSQL database.
  - **AWS Amplify**: Deploying the frontend.
  - **AWS S3**: Storing file attachments.
  - **AWS API Gateway**: Facilitating API communication.
  - **AWS Cognito (Planned)**: Implementing secure authentication.

## Objectives
- Develop a scalable and user-friendly task management system.
- Implement role-based project and task handling.
- Ensure smooth deployment and integration with cloud services.
- Provide an efficient data retrieval and storage system with PostgreSQL and Prisma.

## System Architecture

### 1. Frontend
- **Next.js & React.js**: Provides a responsive and modern UI.
- **Redux**: Manages application state efficiently for a seamless user experience.
- **Tailwind CSS**: Ensures a sleek and accessible design.

### 2. Backend
- **Express.js & Node.js**: Handles API requests and task management logic.
- **Prisma ORM**: Simplifies database interactions with PostgreSQL.
- **RESTful API**: Ensures scalable and maintainable API endpoints.

### 3. Deployment
- **AWS Services**:
  - **EC2**: Hosts the backend server.
  - **RDS**: Manages PostgreSQL database.
  - **Amplify**: Deploys the frontend.
  - **S3**: Stores project and task-related files.
  - **API Gateway**: Handles backend API requests efficiently.
  - **Cognito (Future Feature)**: Adds authentication and user role management.

## User Benefits
1. **Seamless Task Management**: Enables users to efficiently organize and prioritize work.
2. **Role-Based Access Control**: Provides secure task assignment and management.
3. **Cloud Scalability**: Ensures smooth performance and reliable data storage with AWS.
4. **User-Friendly UI**: Enhances the experience with an intuitive interface.

## Limitations
- Authentication is not yet fully implemented (planned with AWS Cognito).
- No real-time updates for task changes (WebSockets or polling can be added).
