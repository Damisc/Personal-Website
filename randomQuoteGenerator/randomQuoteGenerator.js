const colors = [
    ["#0F172A"  ,  "#F8FAFC"],
    ["#2563EB"  ,  "#E0F2FE"],
    ["#111827"  ,  "#9CA3AF"],
    ["#22C55E"  ,  "#ECFDF5"],
    ["#EF4444 " ,  "#FFF1F2"],
    ["#7C3AED"  ,  "#EDE9FE"],
    ["#1F2937"  ,  "#D1D5DB"],
    ["#F97316"  ,  "#FFF7ED"],
    ["#14B8A6"  ,  "#CCFBF1"],
    ["#9333EA"  ,  "#FAE8FF"],
    ["#020617"  ,  "#F1F5F9"],
    ["#3B82F6"  ,  "#F9FAFB"],
    ["#DC2626"  ,  "#FEE2E2"],
    ["#0EA5E9"  ,  "#ECFEFF"],
    ["#15803D"  ,  "#BBF7D0"],
    ["#A855F7"  ,  "#FAFAFA"],
    ["#334155"  ,  "#CBD5E1"],
    ["#F59E0B"  ,  "#FEF3C7"],
    ["#10B981"  ,  "#D1FAE5"],
    ["#1E293B"  ,  "#E5E7EB"],
]

function getRandomColorCombo() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
}

async function getNewRandomQuote() {
    const response = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random")
    if (!response.ok) {
        alert("There was a problem loading a new quote.");
    }
    const data = await response.json()

    const quoteText = data[0].q
    const quoteAuthor = data[0].a
    document.getElementById("random-quote-text").innerHTML = quoteText
    document.getElementById("random-quote-author").innerHTML = quoteAuthor

    const colorCombo = getRandomColorCombo()
    document.getElementById("random-quote-generator").style.background = "linear-gradient(45deg, " + colorCombo[0] + " , " + colorCombo[1] + ")"
}