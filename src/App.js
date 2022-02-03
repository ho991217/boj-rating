import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Container = styled.div``;

const Tier = [
  "Unranked",
  "Bronze 5",
  "Bronze 4",
  "Bronze 3",
  "Bronze 2",
  "Bronze 1",
  "Silver 5",
  "Silver 4",
  "Silver 3",
  "Silver 2",
  "Silver 1",
  "Gold 5",
  "Gold 4",
  "Gold 3",
  "Gold 2",
  "Gold 1",
  "Platinum 5",
  "Platinum 4",
  "Platinum 3",
  "Platinum 2",
  "Platinum 1",
  "Diamond 5",
  "Diamond 4",
  "Diamond 3",
  "Diamond 2",
  "Diamond 1",
  "Ruby 5",
  "Ruby 4",
  "Ruby 3",
  "Ruby 2",
  "Ruby 1",
  "Master",
];

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  const retreiveData = async () => {
    try {
      const response = await axios.get(
        "https://solved.ac/api/v3/user/show?handle=ho991217"
      );
      const data = response.data;
      setData(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    retreiveData();
  }, []);
  return (
    <Wrapper>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Container>{data?.handle + "'s tier: " + Tier[data?.tier]}</Container>
      )}
    </Wrapper>
  );
}

export default App;
