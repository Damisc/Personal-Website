
import React from "react"
import { Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"
import styled from "styled-components"
import NumberStat from "./numberStat"
import { ThemeGreen, ThemeRed, ThemeYellow } from "./stockAnalysisDashboard"

ChartJS.register(ArcElement, Tooltip, Legend)



type NewsSentimentAnalysisProps = {
  newsTextAnalysis: any;
}

const Container = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  gap: 24px;
`

const ChartWrapper = styled.div`
  width: 45%;
  height: 100%;
`

const TextWrapper = styled.div``

const StatsWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
`

const NewsSentimentAnalysis: React.FC<NewsSentimentAnalysisProps> = ({
  newsTextAnalysis,
}) => {
  const labels = ["Positive", "Neutral", "Negative"];

  const values = [
    newsTextAnalysis.data.sentiment.pos,
    newsTextAnalysis.data.sentiment.neu,
    newsTextAnalysis.data.sentiment.neg,
  ]

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [ThemeGreen, ThemeYellow, ThemeRed],
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
            font: {
                size: 10,
            },
            boxWidth: 10,
            padding: 10,
        },
      },
    },
  }

  return (
    <Container>
      {/* Chart */}
      <ChartWrapper>
        <Doughnut data={data} options={options} />
      </ChartWrapper>

      {/* Text + Stats */}
      <TextWrapper>
        <Title>News Text Analysis</Title>

        <StatsWrapper>
          <NumberStat
            value={newsTextAnalysis.metadata.sentencesAnalyzed}
            label="Sentences Analyzed"
          />
          <NumberStat
            value={newsTextAnalysis.metadata.wordsAnalyzed}
            label="Words Analyzed"
          />
        </StatsWrapper>
      </TextWrapper>
    </Container>
  );
};

export default NewsSentimentAnalysis;
