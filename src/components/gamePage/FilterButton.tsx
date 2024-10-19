"use client";
import {ChevronDown, ChevronUp, Filter, X} from "lucide-react";
import React, {useEffect, useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {filterSectionGame} from "@/data/filterSection";
import {ScrollArea} from "../ui/scroll-area";

interface OpenPopovers {
  [key: string]: boolean;
}
interface InputValues {
  [key: string]: string;
}

const FilterButton = () => {
  const [openPopovers, setOpenPopovers] = useState<OpenPopovers>({});
  const [inputValues, setInputValues] = useState<InputValues>({});
  const [popoverVisible, setPopoverVisible] = useState(false);

  useEffect(() => {
    Object.keys(inputValues).forEach((title) => {
      const value = inputValues[title];
      const options =
        filterSectionGame.find((item) => item.title === title)?.options || [];
      const hasMatch = options.some((option) =>
        option.toLowerCase().includes(value.toLowerCase()),
      );

      if (!hasMatch) {
        setOpenPopovers((prev) => ({...prev, [title]: false}));
      }
    });
  }, [inputValues]);

  const togglePopover = (title: string) => {
    setOpenPopovers((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleOptionSelect = (title: string, option: string) => {
    handleInputChange(title, option);
    setOpenPopovers((prev) => ({
      ...prev,
      [title]: false,
    }));
  };

  const handleInputChange = (title: string, value: string) => {
    setInputValues((prev) => ({
      ...prev,
      [title]: value,
    }));

    const options =
      filterSectionGame.find((item) => item.title === title)?.options || [];
    const hasMatch = options.some((option) =>
      option.toLowerCase().includes(value.toLowerCase()),
    );

    setOpenPopovers((prev) => ({
      ...prev,
      [title]: hasMatch,
    }));
  };

  const getIcon = (
    title: string,
    openPopovers: OpenPopovers,
    inputValues: InputValues,
  ) => {
    const isOpen = openPopovers[title];
    const hasInput = inputValues[title];

    if (hasInput) {
      return (
        <button onClick={(e) => handleClearInput(title, e)}>
          <X
            size={18}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary_text"
          />
        </button>
      );
    }

    const Icon = isOpen ? ChevronUp : ChevronDown;
    return (
      <Icon
        size={18}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary_text"
      />
    );
  };

  const handleInputBlur = (title: string) => {
    setTimeout(() => {
      const options =
        filterSectionGame.find((item) => item.title === title)?.options || [];
      const value = inputValues[title] || "";
      const matchingOptions = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase()),
      );

      // If there's exactly one match, set it as the value
      if (matchingOptions.length === 1) {
        setInputValues((prev) => ({...prev, [title]: matchingOptions[0]}));
      }

      // If there are no matches or we've handled the single match, close the popover
      setOpenPopovers((prev) => ({...prev, [title]: false}));

      // If there's no exact match and more than one option, clear the input
      if (
        matchingOptions.length !== 1 &&
        !options.some((option) => option.toLowerCase() === value.toLowerCase())
      ) {
        setInputValues((prev) => ({...prev, [title]: ""}));
      }
    }, 100);
  };

  const handleClearInput = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setInputValues((prev) => ({...prev, [title]: ""}));
    setOpenPopovers((prev) => ({...prev, [title]: false}));
  };

  const filterOptions = (options: string[], inputValue: string) => {
    return options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };
  const onSubmitButton = () => {
    console.log("onSubmitButton");
    setPopoverVisible(false);
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-[#D8FF2E] text-black">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <Popover open={popoverVisible} onOpenChange={setPopoverVisible}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2.5 rounded-md bg-bg py-[6px] px-5 border border-border hover:bg-border/50 transition-colors duration-300 ease-in-out">
          <Filter size={18} /> Filter
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[300px] bg-bg rounded-lg p-0 py-4"
        align="end"
        alignOffset={0}
        sideOffset={10}
        onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="text-white/90 text-[14px] flex flex-col gap-2.5 ">
          <h2 className="px-4 text-[16px] font-medium">Filters</h2>
          <div className="stroke"></div>
          <div className="flex flex-col gap-2.5 px-4">
            {filterSectionGame.map((item) => {
              const filteredOptions = filterOptions(
                item.options || [],
                inputValues[item.title] || "",
              );
              return (
                <button
                  className="relative"
                  key={item.title}
                  onClick={() => togglePopover(item.title)}>
                  <input
                    type="text"
                    autoFocus={false}
                    placeholder={item.title}
                    className="rounded-md bg-[#1a1a1a] pl-3 px-2 py-[9px] w-full placeholder:text-secondary_text font-medium border border-border"
                    onChange={(e) =>
                      handleInputChange(item.title, e.target.value)
                    }
                    onBlur={() => handleInputBlur(item.title)}
                    value={inputValues[item.title] || ""}
                  />
                  {getIcon(item.title, openPopovers, inputValues)}
                  {openPopovers[item.title] && (
                    <div className="absolute top-full left-0 w-full border-b border-x bg-[#272727] rounded-lg py-1  text-white/90 z-10 ">
                      <ScrollArea className="w-full rounded-md  text-start p-1 flex gap-4">
                        <div className="flex flex-col ">
                          {filteredOptions.map((option, index) => (
                            <button
                              key={index}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                handleOptionSelect(item.title, option);
                              }}
                              onClick={() => {
                                setOpenPopovers((prev) => ({
                                  ...prev,
                                  [item.title]: false,
                                }));
                              }}
                              className="transition-colors duration-200 ease-in-out hover:bg-[#1a1a1a] py-1.5 rounded-md px-2 text-start">
                              {highlightMatch(
                                option,
                                inputValues[item.title] || "",
                              )}
                            </button>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          <div>
            <div className="stroke"></div>
            <div className="flex gap-2.5 items-center justify-between mt-4 text-sm px-4">
              <button
                className=" py-2 rounded-md flex items-center gap-1.5 text-secondary_text transition-colors duration-300 ease-in-out hover:text-white font-semibold"
                onClick={() => setInputValues({})}>
                <X size={16} /> Reset All
              </button>
              <button
                className="bg-white text-black px-5 py-2 rounded-md border border-border transition-colors duration-300 ease-in-out hover:bg-white/80"
                onClick={() => onSubmitButton()}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterButton;
