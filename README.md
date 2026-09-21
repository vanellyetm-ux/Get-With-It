# FreeDate MVP

A free-to-use dating app MVP for iOS and Android.

## Stack
- Expo / React Native
- Expo Router
- Supabase Auth + PostgreSQL + Storage + Realtime
- No subscriptions, paid likes, boosts, or premium gates

## Run locally

1. Install Node.js LTS.
2. In this folder run:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and add your Supabase URL/key.
4. Run:
   ```bash
   npx expo start
   ```
5. Scan the QR code with Expo Go, or press `i` / `a`.

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/schema.sql`.
4. Create a public Storage bucket called `profile-photos`.
5. Add the policies in `supabase/storage.sql`.
6. Put the project URL and anon key in `.env`.

## Included MVP
- Email/password authentication
- Profile creation/editing
- Photo selection/upload
- Discovery deck
- Like/pass
- Mutual matching
- Match list
- Realtime chat
- Block/report
- Account deletion
- Basic preferences
- Privacy/terms placeholders
- Push notification registration scaffold

## Before store submission
Replace the placeholder privacy/terms URLs, add a real support email/domain, configure production bundle identifiers, create store assets, test moderation, and complete Apple/Google privacy disclosures.
