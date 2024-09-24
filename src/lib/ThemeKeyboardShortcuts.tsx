"use client";
import {useHotkeys} from "react-hotkeys-hook";
import {useTheme} from "next-themes";

export default function GlobalThemeHotkeys() {
  const {setTheme} = useTheme();

  useHotkeys("ctrl+l", () => setTheme("light"), {preventDefault: true});
  useHotkeys("ctrl+d", () => setTheme("dark"), {preventDefault: true});
  useHotkeys("ctrl+s", () => setTheme("system"), {preventDefault: true});

  return null;
}
