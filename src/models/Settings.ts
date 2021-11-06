export interface Settings {
  siteName?: string;
}

export interface InitialSettings extends Settings {
  adminUser?: string;
  adminPassword?: string;
  adminPasswordConfirm?: string;
  libraryPath?: string;
}
