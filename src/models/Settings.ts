export interface Settings {
  siteName: string;
}

export interface InitialSettings {
  siteName?: string;
  adminUser?: string;
  adminPassword?: string;
  adminPasswordConfirm?: string;
  libraryPath?: string;
}
