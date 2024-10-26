import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomInputLabel from "./CustomInputLabel";
import {FAQList, RequirementItem, SystemRequiments} from "@/types/postProps";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Plus, Trash, Trash2} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";

const AccordionPostInuts = ({
  faqList,
  setFaqList,
  systemRequirements,
  setSystemRequirements,
}: {
  faqList: FAQList;
  setFaqList: React.Dispatch<React.SetStateAction<FAQList>>;
  systemRequirements: SystemRequiments;
  setSystemRequirements: React.Dispatch<React.SetStateAction<SystemRequiments>>;
}) => {
  const addNewFaq = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newFaqList = [...faqList];
    newFaqList.push({title: "", answer: ""});
    setFaqList(newFaqList);
  };

  const isAddFaqDisabled = () => {
    if (faqList.length === 0) {
      return false;
    }
    const lastFaq = faqList[faqList.length - 1];
    return !(lastFaq.title.trim() && lastFaq.answer.trim());
  };

  const removeFaq = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newFaqList = [...faqList];
    newFaqList.splice(faqList.length - 1, 1);
    setFaqList(newFaqList);
  };

  return (
    <Accordion type="multiple" className="w-full ">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="">
          <CustomInputLabel label="Minimum requirements" required={false} />
        </AccordionTrigger>
        <AccordionContent className="">
          <div className="flex flex-col gap-3 mt-2">
            {systemRequirements.minSystemRequirement.map((item, index) => {
              const key = Object.keys(item)[0] as keyof RequirementItem;
              const value = item[key as keyof typeof item];
              return (
                <div
                  className="grid grid-cols-[100px_1fr] items-center"
                  key={index}>
                  <span>{key}</span>
                  <Input
                    placeholder={key}
                    value={value}
                    className="rounded-sm bg-[#171718]"
                    onChange={(e) => {
                      const newRequirements = {...systemRequirements};
                      newRequirements.minSystemRequirement[index] = {
                        [key]: e.target.value,
                      } as RequirementItem;
                      setSystemRequirements(newRequirements);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-none">
        <AccordionTrigger className="">
          <CustomInputLabel label="Recommended requirements" required={false} />
        </AccordionTrigger>
        <AccordionContent className="">
          <div className="flex flex-col gap-3 mt-2">
            {systemRequirements.recommendedSystemRequirement.map(
              (item, index) => {
                const key = Object.keys(item)[0] as keyof RequirementItem;
                const value = item[key as keyof typeof item];
                return (
                  <div
                    className="grid grid-cols-[100px_1fr] items-center"
                    key={index}>
                    <span>{key}</span>
                    <Input
                      placeholder={key}
                      value={value}
                      className="rounded-sm bg-[#171718]"
                      onChange={(e) => {
                        const newRequirements = {...systemRequirements};
                        newRequirements.recommendedSystemRequirement[index] = {
                          [key]: e.target.value,
                        } as RequirementItem;
                        setSystemRequirements(newRequirements);
                      }}
                    />
                  </div>
                );
              },
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger className="">
          <CustomInputLabel label="Additional FAQ" required={false} />
        </AccordionTrigger>
        <AccordionContent className="">
          <div>
            <div className="flex flex-col gap-5 mt-4">
              {faqList.map((item, index) => {
                return (
                  <div className="flex flex-col gap-2 " key={index}>
                    <div className="flex gap-2 justify-between">
                      <input
                        placeholder="Title"
                        type="text"
                        className="bg-transparent py-1 px-2 rounded-sm text-[15px] text-white/90 placeholder:text-secondary_text "
                        value={item.title}
                        onChange={(e) => {
                          const newFaqList = [...faqList];
                          newFaqList[index].title = e.target.value;
                          setFaqList(newFaqList);
                        }}
                      />
                      <button
                        className="hover:bg-bg transition-colors duration-300 ease-out p-2 rounded-sm"
                        onClick={removeFaq}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <Textarea
                      value={item.answer}
                      placeholder={item.title}
                      className="rounded-sm bg-[#171718] placeholder:text-secondary_text text-muted-foreground"
                      onChange={(e) => {
                        const newFaqList = [...faqList];
                        newFaqList[index].answer = e.target.value;
                        setFaqList(newFaqList);
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <Button
              className="rounded-sm px-7 mt-5"
              onClick={addNewFaq}
              disabled={isAddFaqDisabled()}>
              <Plus size={20} />
              Add FAQ
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionPostInuts;
