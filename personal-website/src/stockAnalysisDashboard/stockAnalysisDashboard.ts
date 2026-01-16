import styled from "styled-components"

export async function analyzeStock(stockSymbolToAnalyze: string) {
    if (stockSymbolToAnalyze.length == 0) {
        alert("You must put in a ticker symbol before running the analysis")
        return
    }
    const url = "http://127.0.0.1:5000/analyze-stock/" + stockSymbolToAnalyze

    const response = await fetch(url)
    if (!response.ok) {
        alert("There was a problem analyzing your stock.");
    }
    const data = await response.json()
    return data
}

export const PrimaryColor = `#467bb0`
export const ThemeGreen = "#05E86A"
export const ThemeYellow = "#facc15"
export const ThemeRed = "#C92A0C"

export const VerticalAlignContainer = styled.div`
	width: 100%;
	height: 100%;
	display: table;
`


export const VerticalAlignContent = styled.div`
	display: table-cell;
	vertical-align: middle;
`

export const DashboardGridContainer = styled.div`
	width: 90%;
	margin: 0 auto;
`

export const DashboardGridContent = styled.div`
	background-color: white;
	border-radius: 5px;
	padding: 15px;
`

export const MarginSpace = styled.div`
    margin-bottom: 15px;
`

export const DashboardTitle = styled.div`
    color: white;
    font-size: 25px;
    text-align: center; 
`

export const DashboardSubtitle = styled.div`
    color: white;
    font-size: 17px;
    text-align: center;
`

export const LoadingOvalContainer = styled.div`
    width: fit-content;
    margin: 0 auto;
`

export const BackButton = styled.div`
    margin-left: 10px;
    width: fit-content;
    color: white;
    font-size: 12px;
    &:hover {
        cursor:pointer;
        font-weight: bold;
    }
`

export const InputContainer = styled.div`
    width: fit-content;
    margin: 0 auto;
    display: flex;
`

export const AnalyzedInput = styled.input`
    padding: 10px;
    color: white;
    background: none;
    border: none;
    border-button: solid white 1px;
`

export const AnalyzedButton = styled.button`
    margin-left: 15px;
    background: none;
    padding: 10px;
    color: white;
`