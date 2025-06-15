# Zulzaga AI - GitHub Deployment Guide

## 1. Download Source Code
- Download `zulzaga-ai-complete.tar.gz` from this Replit
- Extract the files to your local computer

## 2. Create GitHub Repository
1. Go to https://github.com
2. Click "New repository"
3. Name: `zulzaga-ai`
4. Description: `Zulzaga AI - Mongolia's Largest AI Platform`
5. Set to Public
6. Click "Create repository"

## 3. Upload Code to GitHub
```bash
# Navigate to extracted folder
cd zulzaga-ai

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Zulzaga AI Platform"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/zulzaga-ai.git

# Push to GitHub
git push -u origin main
```

## 4. Environment Setup for Production
Create `.env` file with:
```
DATABASE_URL=your_postgresql_url
OPENAI_API_KEY=your_openai_key
QPAY_USERNAME=your_qpay_username
QPAY_PASSWORD=your_qpay_password
QPAY_INVOICE_CODE=your_invoice_code
SESSION_SECRET=your_session_secret
```

## 5. Deployment Options

### Option A: Vercel (Recommended)
1. Connect GitHub repo to Vercel
2. Add environment variables
3. Deploy automatically

### Option B: Railway
1. Connect GitHub repo to Railway
2. Add PostgreSQL database
3. Configure environment variables

### Option C: Digital Ocean App Platform
1. Connect GitHub repo
2. Add managed PostgreSQL
3. Configure build settings

## 6. Database Setup
1. Create PostgreSQL database
2. Run: `npm run db:push`
3. Database tables will be created automatically

## 7. Features Included

### AI Services (10 total):
1. **Smart Chat** - GPT-4o powered conversations
2. **Translator** - 50+ languages with AI enhancement
3. **Numerology** - Magic of Numbers analysis
4. **Coding Assistant** - Programming help in multiple languages
5. **Document Generator** - Professional document creation
6. **Travel Planner** - AI-powered travel recommendations
7. **Script Converter** - Cyrillic ↔ Traditional Mongolian
8. **Grammar Checker** - Advanced language correction
9. **File Processor** - PDF, Word, Excel, Image, Audio analysis
10. **Professional Designer** - Commercial-grade design generation

### Business Tools:
- **Analytics Dashboard** - Usage and performance metrics
- **Schedule Management** - Personal planning system
- **Financial Psychology** - Budget and goal tracking
- **Dating Platform** - Safe social connections with AI advice
- **Admin Panel** - System management (admin users only)

### Technical Features:
- **QPay Integration** - Mongolian payment system
- **Subscription System** - 3-tier plans (Basic/Premium/Business)
- **Authentication** - Secure login/register system
- **PWA Support** - Installable as mobile app
- **Usage Limits** - 5 free queries, then subscription required
- **Mobile Responsive** - Works on all devices
- **Dark/Light Theme** - User preference system

### Security Features:
- **Query Limits** - Prevents abuse
- **Authentication Required** - All AI services protected
- **Session Management** - Secure user sessions
- **Input Validation** - Prevents malicious input
- **Error Handling** - Graceful error management

## 8. Admin Account
- Email: gomedia.9999@gmail.com
- Password: admin123456
- Role: admin (full access to admin panel)

## 9. Next Steps for Zulzaga EDU
After deploying main platform:
1. Create separate repository for Zulzaga EDU
2. Educational platform for grades 1-12
3. Age-appropriate content and safety features
4. Integration with main Zulzaga AI platform

## Support
Contact: Facebook.com/ZulzagaAi
Available: 24/7 (AI үргэлж боломжтой)