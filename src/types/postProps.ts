import {Post} from "./singlePost";

export interface LatestSectionProps {
  title?: string;
  linkHref: string;
  itemsList: Post[];
  whiteButtons?: boolean;
  breakpoints: {
    [width: number]: {
      slidesPerView: number;
      spaceBetween: number;
      allowTouchMove?: boolean;
      slidesPerGroup?: number;
    };
  };
  renderItemCard: (item: Post) => React.ReactNode;
}

export type RequirementItem =
  | {OS: string}
  | {CPU: string}
  | {RAM: string}
  | {GPU: string}
  | {DirectX: string}
  | {Storage: string};

export type SystemRequiments = {
  minSystemRequirement: RequirementItem[];
  recommendedSystemRequirement: RequirementItem[];
};

export type FAQList = {
  title: string;
  answer: string;
}[];
