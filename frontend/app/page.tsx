"use client";

import Input from "@/components/ui/input";
import { SectionCard } from "@/components/ui/section-card";
import { Card } from "@/models/Card";
import { Fragment, useEffect, useState } from "react";
import { Axios } from "@/axios";
import Skeleton from "@/components/ui/skeleton";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [cards, setCards] = useState<Card[]>([]);

  const fetchCards = async () => {
    setLoading(true);

    try {
      const response = await Axios.get(`/card`);

      if (response.status === 200) {
        setCards(response.data.result);
      }

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };

  const searchCard = async (key: string) => {
    try {
      const response = await Axios.get(`/card/search`, {
        params: { title: key },
      });

      if (response.status === 200) {
        setCards(response.data.result);
      }

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    if (searchKey) {
      setLoading(true);

      const getData = setTimeout(() => {
        searchCard(searchKey);
      }, 2000);

      return () => clearTimeout(getData);
    } else {
      fetchCards();
    }
  }, [searchKey]);

  return (
    <Fragment>
      <div className="bg-[#dadbf0] py-12 flex flex-col gap-4 items-center">
        <h1>How can we help ?</h1>

        <Input
          className="border border-gray-500 w-[80%] md:w-[50%] p-2 bg-[url('/icons/arrow.svg')] bg-no-repeat bg-[calc(100%-12px)_center] bg-[length:15px_15px] pr-[30px]"
          name="search"
          value={searchKey}
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>

      {loading ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 p-4 md:py-20 md:px-24 relative">
          {cards.length == 0 && (
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
              No cards found!
            </p>
          )}

          {cards.map((card) => (
            <SectionCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
}
