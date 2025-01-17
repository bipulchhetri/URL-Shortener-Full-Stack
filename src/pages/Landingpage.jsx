import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const [longUrl,setLongUrl]=useState();
  const navigate=useNavigate()
  const handleShorten=(e)=>{
    e.preventDefault();
    if(longUrl) navigate(`/auth?createNew=${longUrl}`);
  }
  return (
    <div className="flex flex-col justify-center items-center ml-20">
      <h2 className=" sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        Shrink, Share, Simplify
        <br />
        Your Ultimate <span className="text-blue-500">URL Shortener</span>
      </h2>

      <img
        src="/url banner.webp" // replace with 2 in small screens
        className="lg:ml-10 w-full my-11 md:px-11 md:ml-10"
      />

      <form onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your long URL"
          onChange={(e)=>setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4 border-blue-500"
        />
        <Button 
        
        className="h-full bg-blue-600 hover:bg-gray-700 text-white" type="submit" >
          SHORT URL
        </Button>
      </form>

      <Accordion type="multiple" collapsible className="w-full my-20 md:px-11">
        <h2 className="font-extrabold text-3xl capitalize	">
          Fequently asked question
        </h2>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Landingpage;
