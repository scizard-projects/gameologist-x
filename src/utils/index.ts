import { Linking } from 'react-native';

export async function openURL(url: string) {
  await Linking.openURL(url);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function shareStory(story: any) {}
