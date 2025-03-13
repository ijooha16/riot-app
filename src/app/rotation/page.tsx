import { ChampionRotation } from "@/types/ChampionRotation";

const RotationPage = async () => {
      const res = await fetch(
        `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.RIOT_API_KEY}`
      );
      const data: ChampionRotation = await res.json();
      console.log(data)

    
  return <div>{JSON.stringify(data)}</div>;
};

export default RotationPage;
