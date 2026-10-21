import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function getScore(data) {
  if (data.AA === "pass") return "Yup";
  if (data.AALarge === "pass") return "Kinda";
  return "Nope";
}

export default function ContrastChecker({ hex, contrastText, safeHex }) {
  const { data, isLoading, error } = useSWR(
    `https://webaim.org/resources/contrastchecker/?fcolor=${contrastText.replace("#", "")}&bcolor=${hex.replace("#", "")}&api`,
    fetcher,
  );

  if (isLoading) {
    return <p>Checking contrast...</p>;
  }

  if (error || !data) {
    return <p>Contrast check failed!</p>;
  }

  return (
    <p
      style={{
        backgroundColor: safeHex,
        color: "#000",
        display: "inline-block",
      }}
    >
      Overall Contrast Score: {getScore(data)}
    </p>
  );
}
