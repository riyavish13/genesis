"use client";
import AutoComplete from "@/app/components/AutoComplete";
import React, { useState } from "react";

type Option = {
  label: string | number;
  value: string | number;
  info?: string;
};

const AutoCompletePage = () => {
  const [value, setValue] = useState<Option[]>([]);

  const fetchCountries = async ({
    query,
    page,
  }: {
    query: string;
    page: number;
  }) => {
    const res = await fetch(
      `https://cis.app.miratsapiservices.com/v2/cis/countries?page=${page}&limit=10&search=${query}`,
    );

    const json = await res.json();

    return {
      data: json.data.map((country: any) => ({
        label: country.name,
        value: country.alpha2Code,
        info: country.alpha3Code,
      })),
      hasMore: json.pagination?.hasNextPage,
    };
  };

  return (
    <div className="flex flex-col justify-center gap-5 py-20 max-w-xl mx-auto w-full">
      {value?.map((data) => data?.label).join(", ")}

      <div className="flex justify-center gap-5 py-20">
        {/* MULTIPLE */}
        <AutoComplete
          selected={value}
          setSelected={setValue}
          multiple
          options={[]}
          search
          dropdownFooter
          apiSearch={fetchCountries}
          onApply={() => {
            console.log("Selected values:", value);
          }}
        />

        <AutoComplete
          selected={value}
          setSelected={setValue}
          search
          options={[]}
          position="top"
          dropdownFooter
          apiSearch={fetchCountries}
          onApply={() => {
            console.log("Selected values:", value);
          }}
        />
      </div>
    </div>
  );
};

export default AutoCompletePage;
