"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Language, setLanguage } from "@/features/editorSlice";
import { AppDispatch, RootState } from "@/features/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LanguageSelector = () => {
  const dispatch: AppDispatch = useDispatch();
  const language = useSelector((state: RootState) => state.editor.language);

  return (
    <Select
      onValueChange={(value: Language) => dispatch(setLanguage(value))}
      value={language}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="cpp">C++</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="javascript">Javascript</SelectItem>
          <SelectItem value="typescript">Typescript</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
