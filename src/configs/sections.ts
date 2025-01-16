import { SECTION_TYPE } from '../constants';
import { Section } from '../types';

// Total length
export const LIMIT = 10;

const sections: Section[] = [
  {
    type: SECTION_TYPE.CONTENT,
    compact: false,
    isPackage: false,
    horizontal: false,
    isFirstPostFeatured: true,
    length: 1,
  },
  {
    type: SECTION_TYPE.CONTENT,
    compact: false,
    isPackage: false,
    horizontal: false,
    isFirstPostFeatured: false,
    length: 3,
  },
  {
    type: SECTION_TYPE.CONTENT,
    compact: true,
    isPackage: false,
    horizontal: false,
    isFirstPostFeatured: false,
    length: 3,
  },
  {
    type: SECTION_TYPE.CONTENT,
    compact: true,
    isPackage: false,
    horizontal: false,
    isFirstPostFeatured: true,
    length: 3,
  },
];

export default sections;
