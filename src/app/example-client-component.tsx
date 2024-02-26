"use client";

import { useParams } from "next/navigation";

export default function ExampleClientComponent() {
  const params = useParams<{ tag: string; item: string }>;
  console.log(params);
  return <></>;
}
