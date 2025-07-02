import { Store } from '@tauri-apps/plugin-store';

class StorageService {
  private store: Store | null = null;

  private async getStore(): Promise<Store> {
    if (!this.store) {
      this.store = await Store.load('app-data.json');
    }
    return this.store;
  }

  async setToken(token: string): Promise<void> {
    const store = await this.getStore();
    await store.set('auth_token', token);
    await store.save();
  }

  async getToken(): Promise<string | null> {
    const store = await this.getStore();
    const token = await store.get<string>('auth_token');
    return token || null;
  }

  async removeToken(): Promise<void> {
    const store = await this.getStore();
    await store.delete('auth_token');
    await store.save();
  }

  async clear(): Promise<void> {
    const store = await this.getStore();
    await store.clear();
    await store.save();
  }
}

export const storageService = new StorageService();
