import { createClient } from '@sanity/client';

import {
  API_VERSION,
  DATASET,
  PROJECT_ID,
  USE_CDN,
} from '../../configs/sanityConfig';

export const client = createClient({
  apiVersion: API_VERSION,
  dataset: DATASET,
  projectId: PROJECT_ID,
  useCdn: USE_CDN,
});
