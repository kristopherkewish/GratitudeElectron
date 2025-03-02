import { Gratitude } from './types';

declare global {
  interface Window {
    electronAPI: {
      invoke: (channel: string, ...args: any[]) => Promise<any>;
    };
  }
}

export const api = {
  async getGratitudes(date: Date): Promise<Gratitude[]> {
    const dateStr = date.toISOString().split('T')[0];
    return window.electronAPI.invoke('get-gratitudes', dateStr);
  },

  async addGratitude(date: Date, gratitude: string): Promise<Gratitude> {
    const dateStr = date.toISOString().split('T')[0];
    return window.electronAPI.invoke('add-gratitude', { date: dateStr, gratitude });
  },

  async deleteGratitude(id: number): Promise<void> {
    return window.electronAPI.invoke('delete-gratitude', id);
  }
};
