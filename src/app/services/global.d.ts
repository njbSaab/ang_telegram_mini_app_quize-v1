// src/global.d.ts
export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: any; // Укажите конкретный тип вместо `any`, если он у вас есть
    };
  }
}
