# Build FreeDate AAB from a phone

Use GitHub Codespaces in Chrome/Safari. No computer is required.

1. Create/sign into GitHub.
2. Create a private repository and upload this project ZIP contents.
3. Open the repo in a Codespace.
4. In the Codespace terminal run:

```bash
npm install
npm install -g eas-cli
eas login
eas build --platform android --profile production
```

5. EAS will ask to create/manage Android signing credentials. Choose the managed/new keystore option if this is the first build.
6. When the cloud build finishes, open the EAS build URL and download the `.aab`.

For an installable phone test APK instead:
```bash
eas build --platform android --profile preview
```

For environment variables, use EAS environment variables/secrets rather than committing `.env`. Set:
`EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY`.
