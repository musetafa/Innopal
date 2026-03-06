"use client"

import { useMemo } from "react"
import {
  Cloud,
  ICloud,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 1,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    radiusX: 0.8,
    radiusY: 0.8,
    radiusZ: 0.8,
    // dragControl: false,
  },
}

export type DynamicCloudProps = {
  imageUrls: string[]
}

export function IconCloud({ imageUrls }: DynamicCloudProps) {
  const renderedIcons = useMemo(() => {
    return imageUrls.map((url, idx) => (
      <a key={idx} href="#" onClick={(e) => e.preventDefault()}>
        <img 
          src={url} 
          alt={`Logo ${idx + 1}`} 
          style={{ height: "60px", maxWidth: "160px", objectFit: "contain" }} 
        />
      </a>
    ))
  }, [imageUrls])

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  )
}
