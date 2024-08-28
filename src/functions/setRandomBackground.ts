import {backgroundImages} from "@/data/listOfBackgroundImages";

export const setRandomBackground = ({
  setBackgroundImage,
  setIsLoading,
}: {
  setBackgroundImage: (image: string) => void;
  setIsLoading: (isLoading: boolean) => void;
}) => {
  setIsLoading(true);
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const randomImage = backgroundImages[randomIndex];
  setBackgroundImage(randomImage);
  setIsLoading(false);
};
