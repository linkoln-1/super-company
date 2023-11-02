import React, { useEffect, useState } from "react";
import useSWR from "swr";

import WorldMap from "@/components/Chart/WorldMap";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const World = () => {
  const { data, error } = useSWR("/api/segments", fetcher, {
    refreshInterval: 5 * 60 * 1000,
  });

  const [segments, setSegments] = useState([]);

  useEffect(() => {
    if (data && !error) {
      let normalizedSegments = normalizeData(data);
      setSegments(normalizedSegments);
    } else if (error) {
      console.error("Error fetching data:", error);
    }
  }, [data, error]);

  const normalizeData = (data: any) => {
    return data.map((segment: any) => ({
      name: segment.name,
      percentage: segment.percentage,
      color: segment.color,
      gradient: segment.gradient,
      top: segment.top,
      left: segment.left,
      hex: segment.hex,
      size: segment.size,
    }));
  };
  return (
    <>
      <WorldMap segments={segments} />
    </>
  );
};
