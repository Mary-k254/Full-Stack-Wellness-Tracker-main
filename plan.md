# MoodBite Development Plan

## Overview
Building a mental health & nutrition tracking app with AI-powered insights, secure authentication, and data privacy features. 70% Python backend with FastAPI, AI sentiment analysis, and statistical insights engine.

---

## Phase 1: Authentication & User Management ✅
**Goal:** Secure user registration, login with JWT, and user profile management

### Tasks
- [x] Set up FastAPI backend structure with proper routing
- [x] Implement SQLModel database models for users
- [x] Create JWT-based authentication (signup, login, token verification)
- [x] Add password hashing with passlib
- [x] Build protected route decorator for authenticated endpoints
- [x] Create user profile management endpoints
- [x] Add consent flags and privacy settings
- [x] Design authentication UI (signup/login forms)

**Status:** ✅ Complete - Authentication system working with login/signup forms, protected routes, profile management, and privacy settings

---

## Phase 2: Mood & Journal Tracking with AI Sentiment Analysis ✅
**Goal:** Enable users to log moods and journals with AI-powered sentiment analysis

### Tasks
- [x] Create Mood model (user_id, date, mood_score, tags, sentiment)
- [x] Implement mood logging endpoints (POST /moods, GET /moods with date filtering)
- [x] Create Journal model (user_id, date, text, sentiment_score, sentiment_label)
- [x] Integrate TextBlob for AI sentiment analysis (polarity -1 to 1, POSITIVE/NEGATIVE/NEUTRAL labels)
- [x] Build journal entry endpoint with automatic sentiment detection
- [x] Design mood tracking UI (slider 0-10, tag selection, mood history visualization)
- [x] Create journal entry UI with real-time sentiment feedback
- [x] Add mood trends chart showing weekly/monthly patterns

**Status:** ✅ Complete - Mood tracking with slider, tags, and history. Journal entries with real-time AI sentiment analysis. Dashboard shows mood trends chart and stats.

---

## Phase 3: Food Logging with NLP Extraction ✅
**Goal:** Track food intake with smart NLP-based food recognition

### Tasks
- [x] Create FoodLog model (user_id, date, food_name, category, confidence)
- [x] Build food logging endpoints (POST /food, GET /food with filtering)
- [x] Integrate spaCy PhraseMatcher with local food database (80+ items)
- [x] Implement free-text food extraction endpoint (/food/free-text)
- [x] Create food category classifier (8 categories with color coding)
- [x] Design food logging UI (searchable dropdown, quick-add buttons)
- [x] Add free-text food entry with extracted food preview
- [x] Build food history view with category badges

**Status:** ✅ Complete - Food logging with manual selection and AI-powered text extraction. 80+ food database with spaCy NLP. Dashboard shows food frequency bar chart.

---

## Phase 4: AI-Powered Insights Engine
**Goal:** Generate statistical insights correlating food intake with mood patterns

### Tasks
- [ ] Create Insights model (user_id, food_name, correlation_score, confidence, phrase)
- [ ] Implement statistical correlation engine (scipy t-tests, Cohen's d)
- [ ] Calculate mood differences when eating specific foods vs not eating them
- [ ] Generate human-readable insight phrases
- [ ] Build insights visualization with correlation scores and confidence levels
- [ ] Add filters to view insights by food category or mood impact
- [ ] Create "Why?" explanations for each insight showing the data behind it

---

## Phase 5: Enhanced Dashboard & Analytics
**Goal:** Comprehensive dashboard showing trends, insights, and quick actions

### Tasks
- [ ] Add date range filtering for all visualizations
- [ ] Create exportable PDF reports with mood, food, and insights summary
- [ ] Add achievement/streak tracking (e.g., "7 days logged in a row")
- [ ] Build weekly summary email with top insights
- [ ] Add mood-food correlation scatter plots
- [ ] Create personalized recommendations based on insights

---

## Phase 6: Data Privacy & Export Features
**Goal:** GDPR-compliant data management and user control

### Tasks
- [ ] Implement data export endpoint (JSON format)
- [ ] Create account deletion with cascading data removal
- [ ] Add privacy policy documentation
- [ ] Implement audit logging for data access
- [ ] Add data retention settings (auto-delete after X days)

---

## Technical Stack
- **Backend:** FastAPI, SQLModel, PostgreSQL, Alembic
- **AI/ML:** TextBlob (sentiment), spaCy (NLP), scipy (statistics)
- **Frontend:** Reflex (Python-based reactive UI)
- **Security:** JWT tokens, passlib password hashing
- **Deployment:** Docker, docker-compose

---

## Current Focus
✅ Phases 1-3 Complete - Moving to Phase 4: AI-Powered Insights Engine
