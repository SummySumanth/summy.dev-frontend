declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENV: string;
  // Add other environment variables here
  // readonly VITE_ANOTHER_ENV_VAR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
