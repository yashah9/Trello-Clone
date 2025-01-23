"use client";

import React, { useEffect, useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";
import List from "../ListView";
import Timeline from "../Timeline";
import Table from "../TableView"

type Props = {
  params: Promise<{ id: string }>; // Update the type to indicate `params` is a Promise
};

const Project = ({ params }: Props) => {
  const [unwrappedParams, setUnwrappedParams] = useState<{ id: string } | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Wait for the `params` Promise to resolve
      setUnwrappedParams(resolvedParams); // Save the resolved params in state
    };

    fetchParams();
  }, [params]);

  if (!unwrappedParams) {
    // Render a loading state until params are resolved
    return <div>Loading...</div>;
  }

  const { id } = unwrappedParams;

  return (
    <div>
      {/* MODAL NEW TASKS */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );  
};

export default Project;