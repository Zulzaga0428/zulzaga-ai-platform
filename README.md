# Зулзага AI - Advanced Multilingual AI Platform

Зулзага AI нь дэвшилтэт, олон хэлт AI платформ бөгөөд ухаалаг, дасан зохицох төлбөрийн болон харилцааны үйлчилгээг нэгтгэсэн, хэрэглэгчийн туршлагыг сайжруулсан, өргөн хүрээний хэлний технологитой.

## Онцлогууд

### AI Үйлчилгээнүүд
- **Chat AI туслагч** - Ерөнхий зөвлөгөө, асуулт хариулт
- **Орчуулагч** - 50+ хэл хоорондын орчуулга
- **Тоо судлал** - Нэр, төрсөн өдрөөр зурхай үзүүлэх
- **Кодчилол туслагч** - Программчлалын тусламж
- **Скрипт хөрвүүлэгч** - Кирилл ↔ Латин үсэг
- **Граммар шалгагч** - Зөв бичгийн дүрэм шалгах
- **Баримт үүсгэгч** - CV, захидал гэх мэт баримт
- **Хайрын зөвлөгөө** - Хайрын харилцааны зөвлөгөө

### Subscription Багцууд
- **Үндсэн багц** - 30,000₮ (200 асуулт/сар)
- **Премиум багц** - 50,000₮ (1000 асуулт/сар)
- **Байгууллагын багц** - 80,000₮ (5000 асуулт/сар)

## Технологи

- **Frontend**: React (TypeScript), TailwindCSS, Tanstack Query
- **Backend**: Node.js, Express, PostgreSQL
- **AI**: OpenAI GPT-4o Integration
- **Payment**: QPay Payment Integration
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Replit

## Эхлэх

### Шаардлага
- Node.js 20+
- PostgreSQL
- OpenAI API түлхүүр
- QPay Merchant эрх

### Суулгах

```bash
# Dependencies суулгах
npm install

# Environment variables тохируулах
cp .env.example .env

# Database schema push хийх
npm run db:push

# Development server эхлүүлэх
npm run dev
```

### Environment Variables

```
# Database
DATABASE_URL=your_postgresql_url

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# QPay
QPAY_USERNAME=your_qpay_username
QPAY_PASSWORD=your_qpay_password
QPAY_INVOICE_CODE=your_invoice_code
```

## API Endpoints

### Chat AI
```
POST /api/chat
{
  "message": "Сайн байна уу?",
  "personality": "advisor"
}
```

### Орчуулагч
```
POST /api/translate
{
  "text": "Hello world",
  "targetLanguage": "mn"
}
```

### Subscription
```
POST /api/subscription/create-payment
{
  "packageId": "basic_monthly",
  "userId": 1
}
```

## Хөгжүүлэлт

### Folder Structure
```
├── client/          # React frontend
│   ├── src/
│   ├── components/
│   └── pages/
├── server/          # Express backend
│   ├── routes.ts
│   ├── openai.ts
│   └── qpay.ts
├── shared/          # Shared schemas
└── database/        # Database migrations
```

### Scripts
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run db:push      # Database schema push
```

## Deployment

Аппликешн нь Replit-д deploy хийгдсэн бөгөөд автомат scaling болон TLS дэмжлэгтэй.

## License

MIT License

## Холбоо барих

- Email: support@zulzaga-ai.pro
- Website: https://zulzaga-ai.pro