"use client";

import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TabContent from "@/components/TabContent";
import { about, education, experience, skills } from "@/lib/constants";
import TabContentSkills from "@/components/TabContentSkills";
import TabContentAbout from "@/components/TabContentAbout";

const Resume = () => {
  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380ox] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <TabContent data={experience} />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <TabContent data={education} />
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <TabContentSkills data={skills} />
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <TabContentAbout data={about} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
