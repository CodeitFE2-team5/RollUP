import patternPurple from '../assets/pattern_01.svg';
import patternBeige from '../assets/pattern_02.svg';
import patternBlue from '../assets/pattern_03.svg';
import patternGreen from '../assets/pattern_04.svg';

export const BACKGROUND_COLOR = {
  blue: 'bg-[#B1E4FF]',
  green: 'bg-[#D0F5C3]',
  purple: 'bg-[#ECD9FF]',
  beige: 'bg-[#FFE2AD]',
};

export const BACKGROUND_PATTERN = {
  blue: patternBlue,
  green: patternGreen,
  purple: patternPurple,
  beige: patternBeige,
}

export const RELATIONSHIP_TAG_COLOR = {
  친구: 'bg-blue-100 text-blue-500',
  가족: 'bg-green-100 text-green-500',
  동료: 'bg-purple-100 text-purple-500',
  지인: 'bg-orange-100 text-orange-500',
};

export const MESSAGE_FONT = {
  Pretendard: 'font-Pretendard',
  'Noto Sans': 'font-NotoSans',
  나눔명조: 'font-NanumMyeongjo',
  '나눔손글씨 손편지체': 'font-NanumHandWriting',
};

export const API_URL = 'https://rolling-api.vercel.app/2-5/recipients';

export const LIMIT = 8;

export const AVATAR_MAX_DISPLAY = 3;

export const ROLLINGPAPER_MAX_DISPLAY = 10;

export const LEFT_VALUE = {
  0 : 'absolute left-0',
  1 : 'absolute left-4',
  2 : 'absolute left-8',
  default: ''
}

export const SIZE_VALUE = {
  28: 'w-7',
  56: 'w-14',
  80: 'w-20' 
}
