import React from 'react'
import { Card, Text, Metric } from "@tremor/react";

export default function Dashboard() {

    return(
        <div>
  <Card className="max-w-xs mx-auto">
    <Text>Sales</Text>
    <Metric>$ 34,743</Metric>
  </Card>
        </div>
    )
}