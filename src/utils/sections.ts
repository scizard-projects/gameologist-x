import { UNIT_HOME_BANNERS } from '../configs/ads';

import { SECTION_TITLES, SECTION_TYPE } from '../constants';
import { Post, Section } from '../types';

// Utility function for cyclic values
function getCyclicIndex(index: number, cycleLength = 4): number {
  return index % cycleLength;
}

// Utility function for random titles (optional refactor)
function getRandomTitle() {
  const useRandomTitle = Math.random() > 0.3; // 30% chance of using a random title
  if (useRandomTitle) {
    const randomIndex = Math.floor(Math.random() * SECTION_TITLES.length);
    return SECTION_TITLES[randomIndex];
  }
  return undefined;
}

// Function to build feed sections
export function createFeedSections(
  posts: Post[],
  sections: Section[],
): Section[] {
  const data = [];

  for (const [
    index,
    { type, compact, isPackage, horizontal, isFirstPostFeatured, length },
  ] of sections.entries()) {
    // If there are no more stories to distribute, break the loop
    if (posts.length === 0) {
      break;
    }

    // For STORIES sections, distribute the fetched stories based on the 'length' property of the section
    const dataLength = Math.min(length, posts.length);
    const dataItems = posts.splice(0, dataLength);

    // Add the section data with the distributed stories to the data array
    data.push({
      type,
      title: index ? getRandomTitle() : undefined,
      compact,
      isPackage,
      horizontal,
      isFirstPostFeatured,
      data: dataItems,
      length: dataItems.length,
    });
  }

  return data;
}

export function getShortSection(): Section {
  return {
    data: [
      {
        path: '',
      },
    ],
    length: 1,
    type: SECTION_TYPE.SHORTS,
  };
}

// Function to build an ad section
let adIndex = 0;
export function getAdSection(): Section {
  const cyclicIndex = getCyclicIndex(adIndex++, UNIT_HOME_BANNERS.length);
  const unitId = UNIT_HOME_BANNERS[cyclicIndex]; // Assuming merged constants

  return {
    type: SECTION_TYPE.ADS,
    length: 1,
    data: [
      {
        unitId,
        size: 'BannerAdSize.MEDIUM_RECTANGLE',
      },
    ],
  };
}
