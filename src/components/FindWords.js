import { useState } from "react";
import Owlbot from "owlbot-js";
import "../styles/FindWords.css";
import Definition from "./Definition";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
        palette: {
          primary: {
            main: '#0993ac',
          }
        },
      });

function FindWords() {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");
  const client = Owlbot("36072e8ece6ef0b3476f13c28fa87bb8d4283a1a");

  const getData = async () => {
    await client.define(search).then((response) => {
      console.log(response);
      setResult(response);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const getValue = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Type word here"
            type="search"
            onChange={getValue}
          />
          <Button
            className="search-button"
            type="submit"
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </form>
      </ThemeProvider>
      {Object.keys(result).length > 0 && (
        <>
          <h1>{result.word}</h1>
          {result.pronunciation && <p>Pronunciation: {result.pronunciation}</p>}
          {result.definitions.map((definition, index) => (
            <Definition key={index} word={definition} />
          ))}
        </>
      )}
    </>
  );
}

export default FindWords;
