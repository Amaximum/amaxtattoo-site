# AMAX Tattoo — Сайт для тату-услуг

Рабочий сайт для amaxtattoo.com запущен на **http://localhost:3001**

---

## ✅ Что готово

### Страницы сайта
- **/** — Главная (Hero + About + FAQ + Форма + Карта локаций)
- **/about** — О студии и подходе
- **/faq** — Часто задаваемые вопросы
- **/contact** — Контакты + форма заявки
- **/locations** — Список всех городов (12 локаций)
- **/locations/[город]** — Отдельная SEO-страница для каждого города:
  - aurora, newmarket, richmond-hill, oak-ridges, king-city, vaughan, maple, markham, stouffville, east-gwillimbury, bradford, gormley

### SEO-структура
✅ Sitemap.xml (автоматически генерируется)  
✅ Robots.txt  
✅ Метаданные (title, description, OpenGraph)  
✅ Schema.org разметка (Organization, LocalBusiness)  
✅ Внутренние ссылки между страницами  
✅ Breadcrumb навигация на страницах городов  

---

## 🎯 Как редактировать SEO-тексты

**Все тексты для оптимизации находятся в одном файле:**

📁 `src/content/site-content.ts`

### Пример редактирования:

```typescript
export const siteConfig = {
  brand: "AMAX Tattoo",
  title: "AMAX Tattoo Services | Aurora, Ontario | By Appointment Only",
  description: "Здесь ваш новый SEO-текст после анализа SurferSEO",
  heroTitle: "Tattoo Services in Aurora — By Appointment Only",
  heroSubtitle: "Private studio sessions and mobile tattoo services...",
  about: "AMAX Tattoo provides custom tattoo services...",
  // и т.д.
};
```

После изменения текста — **сохраните файл**, страница автоматически обновится в браузере.

### Редактирование FAQ

```typescript
export const faqItems = [
  {
    question: "Do you accept walk-ins?",
    answer: "No. We work by appointment only...",
  },
  // добавляйте новые вопросы сюда
];
```

### Редактирование городов (локации)

```typescript
export const serviceLocations: ServiceLocation[] = [
  {
    slug: "aurora",
    name: "Aurora",
    distanceKm: 0,
    intro: "Core service area and primary appointment hub.", // ← SEO-текст
  },
  // ...
];
```

Меняйте только поле `intro` — это короткое описание для каждого города.

---

## 📝 Процесс SEO-оптимизации с SurferSEO

1. Откройте страницу в браузере (например `/locations/aurora`)
2. Скопируйте текст и проверьте в SurferSEO
3. Получите рекомендации по ключевым словам
4. Откройте файл `src/content/site-content.ts`
5. Найдите нужный город и обновите текст в поле `intro`
6. Сохраните — сайт обновится автоматически
7. Проверьте результат в браузере

---

## 🚀 Команды для работы

```bash
npm run dev       # Запуск локального сервера
npm run build     # Сборка для продакшена
npm run start     # Запуск production-версии
```

---

## 📧 Настройка формы (отправка на Gmail)

Форма теперь отправляет все поля заявки на `maxandtattoo@gmail.com` через SMTP.

Создайте файл `.env.local` в корне проекта:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your_gmail_app_password
BOOKING_TO_EMAIL=maxandtattoo@gmail.com
```

Важно для Gmail:
- включите 2FA на аккаунте Gmail;
- создайте `App Password` (не обычный пароль);
- вставьте этот App Password в `SMTP_PASS`.

---

## 📂 Структура проекта

```
src/
├── app/                    # Страницы Next.js
│   ├── page.tsx            # Главная
│   ├── about/page.tsx      # О нас
│   ├── faq/page.tsx        # FAQ
│   ├── contact/page.tsx    # Контакты
│   ├── locations/
│   │   ├── page.tsx        # Список городов
│   │   └── [slug]/page.tsx # Страница города
│   ├── api/booking/route.ts # API для формы
│   ├── sitemap.ts          # Генератор sitemap
│   └── robots.ts           # robots.txt
├── components/             # Компоненты
│   ├── site-header.tsx     # Шапка сайта
│   ├── site-footer.tsx     # Футер
│   ├── booking-form.tsx    # Форма заявки
│   └── coverage-map.tsx    # Карта локаций
├── content/
│   └── site-content.ts     # ← ВСЕ ТЕКСТЫ ДЛЯ SEO ЗДЕСЬ
└── lib/
    └── schema.ts           # Schema.org разметка
```

---

## 📋 TODO для продакшена

- [x] Подключена SMTP-отправка заявок в `/api/booking/route.ts`
- [ ] Добавить fallback-провайдера (Resend/SendGrid) на случай проблем SMTP
- [ ] Заменить Google Maps iframe на API с точными координатами
- [ ] Добавить изображения (логотип, фото работ)
- [ ] Настроить домен amaxtattoo.com
- [ ] Подключить Google Analytics / Search Console
- [ ] Добавить SSL-сертификат
- [ ] Настроить кеширование и CDN (Vercel/Cloudflare)

---

## 🔗 Развертывание

### Вариант 1: Vercel (рекомендуется)
1. Создайте аккаунт на [vercel.com](https://vercel.com)
2. Импортируйте Git-репозиторий
3. Vercel автоматически соберет и задеплоит сайт
4. Подключите домен amaxtattoo.com в настройках

### Вариант 2: Netlify / Cloudflare Pages
Аналогично — подключите репозиторий и настройте домен.

---

## 💡 Важно

- Все SEO-тексты легко редактируются без правки HTML/CSS
- Каждый город имеет уникальную страницу для локального SEO
- Форма бронирования работает (пока выводит в консоль, нужно добавить email)
- Форма бронирования отправляет заявки на email (после настройки `.env.local`)
- Сайт полностью мобильный и быстрый (Next.js + SSG)
- Ready для SurferSEO оптимизации

---

**Сайт готов к SEO-оптимизации и развертыванию.**
